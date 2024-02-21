const { db } = require('@vercel/postgres');
const { users } = require('../app/lib/initial.ts');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        role VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        password TEXT NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, role, phone, password, image_url)
        VALUES (${user.id}, ${user.name}, ${user.email},${user.role}, ${user.phone}, ${hashedPassword},${user.image_url} )
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );


    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}


async function main() {
  const client = await db.connect();

  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
