import { Handler } from '@netlify/functions';
import { getStore } from '@netlify/blobs';

const handler: Handler = async (event, context) => {
  // Authentication Check
  const user = context.clientContext?.user;
  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized: Admin access required' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { name, data } = body; 

    if (!name || !data) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing file name or data' }),
      };
    }

    const base64Data = data.includes(',') ? data.split(',')[1] : data;
    const buffer = Buffer.from(base64Data, 'base64');

    const siteID = process.env.NETLIFY_SITE_ID;
    const token = process.env.NETLIFY_AUTH_TOKEN;

    if (!siteID || !token) {
      console.warn('Warning: NETLIFY_SITE_ID or NETLIFY_AUTH_TOKEN is missing from environment.');
    }

    const store = getStore({
      name: 'images',
      siteID,
      token,
    });
    
    await store.set(name, buffer);

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: 'Image uploaded successfully',
        url: `/.netlify/functions/get-image?id=${name}`,
        id: name
      }),
    };
  } catch (error) {
    console.error('Image upload error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to upload image' }),
    };
  }
};

export { handler };
