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

export async function createUser() {
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

// export async function getUserVehicleDetails() {
//     noStore();
//     try {
//         const data = await sql<Vehicle>` SELECT * FROM Vehicle INNER JOIN Users ON Users.id = Vehicle.id WHERE  ORDER BY name ASC `;
//         const users = data.rows;
//         return users;
//     } catch (err) {
//         console.error('Database Error:', err);
//         throw new Error('Failed to fetch all users.');
//     }
// }
