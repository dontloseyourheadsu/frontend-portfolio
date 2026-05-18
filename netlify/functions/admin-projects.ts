import { Handler } from '@netlify/functions';
import { getStore } from '@netlify/blobs';

const handler: Handler = async (event, context) => {
  // 1. Authentication Check
  const user = context.clientContext?.user;
  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized: Admin access required' }),
    };
  }

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
  
  const method = event.httpMethod;

  try {
    const projectsList = await store.get('projects-list', { type: 'json' }) as any[] || [];

    if (method === 'POST') {
      const newProject = JSON.parse(event.body || '{}');
      newProject.id = projectsList.length > 0 ? Math.max(...projectsList.map(p => p.id)) + 1 : 1;
      
      const updatedList = [...projectsList, newProject];
      await store.setJSON('projects-list', updatedList);

      return {
        statusCode: 201,
        body: JSON.stringify(newProject),
      };
    } 

    if (method === 'PUT') {
      const updatedProject = JSON.parse(event.body || '{}');
      const index = projectsList.findIndex(p => p.id === updatedProject.id);
      
      if (index === -1) {
        return { statusCode: 404, body: JSON.stringify({ error: 'Project not found' }) };
      }

      projectsList[index] = { ...projectsList[index], ...updatedProject };
      await store.setJSON('projects-list', projectsList);

      return {
        statusCode: 200,
        body: JSON.stringify(projectsList[index]),
      };
    }

    if (method === 'DELETE') {
      const id = parseInt(event.queryStringParameters?.id || '0');
      const updatedList = projectsList.filter(p => p.id !== id);
      
      await store.setJSON('projects-list', updatedList);

      return {
        statusCode: 204,
        body: '',
      };
    }

    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };

  } catch (error) {
    console.error('Admin API error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

export { handler };
