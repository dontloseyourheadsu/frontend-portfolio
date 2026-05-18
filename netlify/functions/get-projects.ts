import { Handler } from '@netlify/functions';
import { getStore } from '@netlify/blobs';

const handler: Handler = async (event, context) => {
  try {
    // Manually provide credentials for local development if needed
    const siteID = process.env.NETLIFY_SITE_ID;
    const token = process.env.NETLIFY_AUTH_TOKEN;

    if (!siteID || !token) {
      console.warn('Warning: NETLIFY_SITE_ID or NETLIFY_AUTH_TOKEN is missing from environment.');
    }

    const store = getStore({
      name: 'projects',
      siteID,
      token,
    });
    
    // Retrieve the list of projects. Default to empty array if not found.
    const projectsList = await store.get('projects-list', { type: 'json' }) as any[];
    
    let projects = projectsList || [];

    // Apply basic filtering and pagination
    const category = event.queryStringParameters?.category;
    const page = parseInt(event.queryStringParameters?.page || '1', 10);
    const limit = parseInt(event.queryStringParameters?.limit || '10', 10);

    if (category) {
      projects = projects.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    const total = projects.length;
    const offset = (page - 1) * limit;
    const paginatedProjects = projects.slice(offset, offset + limit);

    return {
      statusCode: 200,
      body: JSON.stringify({
        projects: paginatedProjects,
        pagination: {
          page,
          limit,
          total,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
  } catch (error) {
    console.error('Netlify Blobs error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch projects' }),
    };
  }
};

export { handler };
