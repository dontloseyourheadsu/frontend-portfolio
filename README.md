## How to Seed the Database

1. **Setup Environment Variables**:

   - Create a `.env` file in the root directory.
   - Add the following variables based on `.env.example`:
     ```dotenv
     DATABASE_URL=your-local-database-url
     NETLIFY_DATABASE_URL=your-production-database-url
     ```

2. **Setup Netlify and Neon**:

   - **Netlify**:
     - Go to the Netlify dashboard.
     - Add `NETLIFY_DATABASE_URL` under Environment Variables.
   - **Neon**:
     - Create a PostgreSQL database on Neon.
     - Copy the connection string and set it as `DATABASE_URL` locally and `NETLIFY_DATABASE_URL` in Netlify.

3. **Seed the Database**:

   - Run the following command:
     ```bash
     node scripts/seed-db.js
     ```
   - Ensure the `data/low-level.json` file exists in the `scripts/data` folder.

5. **Verify**:
   - Check the database to ensure the data has been seeded correctly.

---
