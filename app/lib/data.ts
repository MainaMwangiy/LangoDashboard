import { unstable_noStore as noStore } from 'next/cache';
import { sql } from '@vercel/postgres';
import { User } from './definitions';

export async function getUser() {
    noStore();
    try {
        const data = await sql<User>` SELECT * FROM Users ORDER BY name ASC `;
        const users = data.rows;
        return users;
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to fetch all users.');
    }
}
