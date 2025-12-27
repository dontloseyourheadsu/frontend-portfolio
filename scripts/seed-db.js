require("dotenv").config();
const { Client } = require("pg");
const fs = require("fs");
const path = require("path");

const connectionString =
  process.env.DATABASE_URL || process.env.NETLIFY_DATABASE_URL;

if (!connectionString) {
  console.error("Database configuration missing.");
  process.exit(1);
}

const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Required for some Neon connections if CA is not set up
  },
});

const jsonPath = path.join(__dirname, "data/low-level.json");

async function seed() {
  try {
    await client.connect();
    console.log("Connected to database.");

    // Create table
    await client.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        image_url TEXT NOT NULL,
        project_url TEXT NOT NULL,
        tech_stack TEXT[] NOT NULL,
        details TEXT,
        category TEXT NOT NULL
      );
    `);
    console.log('Table "projects" ensured.');

    // Read JSON data
    const rawData = fs.readFileSync(jsonPath, "utf-8");
    const projects = JSON.parse(rawData);

    console.log(`Found ${projects.length} projects to seed.`);

    // Clear existing data for this category to avoid duplicates (optional, but good for seeding)
    // For now, let's just insert. Or maybe truncate?
    // Let's delete by category 'low-level' before inserting to be safe.
    await client.query("DELETE FROM projects WHERE category = 'low-level'");
    console.log('Cleared existing "low-level" projects.');

    for (const project of projects) {
      const query = `
        INSERT INTO projects (title, description, image_url, project_url, tech_stack, details, category)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `;
      const values = [
        project.title,
        project.description,
        project.imageUrl,
        project.projectUrl,
        project.techStack,
        project.details || null,
        "low-level",
      ];
      await client.query(query, values);
    }

    console.log("Seeding completed successfully.");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await client.end();
  }
}

seed();
