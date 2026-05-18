import { Handler } from '@netlify/functions';
import { getStore } from '@netlify/blobs';

const handler: Handler = async (event) => {
  const id = event.queryStringParameters?.id;

  if (!id) {
    return { statusCode: 400, body: 'Missing image ID' };
  }

  try {
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
    
    const blob = await store.get(id, { type: 'blob' });

    if (!blob) {
      return { statusCode: 404, body: 'Image not found' };
    }

    const buffer = Buffer.from(await blob.arrayBuffer());

    const ext = id.split('.').pop()?.toLowerCase();
    let contentType = 'image/jpeg';
    if (ext === 'png') contentType = 'image/png';
    if (ext === 'svg') contentType = 'image/svg+xml';
    if (ext === 'webp') contentType = 'image/webp';

    return {
      statusCode: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
      body: buffer.toString('base64'),
      isBase64Encoded: true,
    };
  } catch (error) {
    console.error('Error fetching image:', error);
    return { statusCode: 500, body: 'Error fetching image' };
  }
};

export { handler };
