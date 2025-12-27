import { Handler } from '@netlify/functions';
import { Client } from 'pg';

const handler: Handler = async (event, context) => {
  const connectionString = process.env.DATABASE_URL || process.env.NETLIFY_DATABASE_URL;

  if (!connectionString) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Database configuration missing' }),
    };
  }

  const client = new Client({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();

    const category = event.queryStringParameters?.category;
    let query = `
      SELECT 
        id,
        title,
        description,
        image_url as "imageUrl",
        project_url as "projectUrl",
        tech_stack as "techStack",
        details,
        category
      FROM projects
    `;
    
    const values: any[] = [];

    if (category) {
      query += ' WHERE category = $1';
      values.push(category);
    }

    const result = await client.query(query, values);

    // Convert techStack array to a comma-separated string
    const formattedRows = result.rows.map(row => ({
      id: row.id,
      title: row.title,
      description: row.description,
      imageUrl: row.imageUrl,
      projectUrl: row.projectUrl,
      techStack: row.techStack.join(', '),
      details: row.details,
      category: row.category,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(formattedRows),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow CORS for development/production
      },
    };
  } catch (error) {
    console.error('Database error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch projects' }),
    };
  } finally {
    await client.end();
  }
};

export { handler };
