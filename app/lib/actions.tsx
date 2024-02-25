'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const { v4: uuidv4 } = require('uuid');

const FormSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    role: z.string(),
    phone: z.string(),
    password: z.string(),
    image_url: z.string(),
});

export type State = {
    errors?: {
        id?: string[];
        name?: string[];
        email?: string[];
        role?: string[];
        phone?: string[];
        password?: string[];
        image_url?: string[];
    };
    message?: string | null;
};

const CreateUser = FormSchema.omit({ id: true });
const UpdateUser = FormSchema.omit({ id: true });


export async function createUser(prevState: State, formData: FormData) {
    const imageFile = formData.get('image_url');
    let imageName;
    if (imageFile && imageFile instanceof File) {
        imageName = imageFile.name;
        imageName = `/users/${imageName}`
    }

    const validatedFields = CreateUser.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        role: formData.get('role'),
        phone: formData.get('phone'),
        password: formData.get('password'),
        image_url: imageName || null
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create User.',
        };
    }
    const { name, email, role, phone, password, image_url } = validatedFields.data;

    try {
        await sql`
            INSERT INTO users (id, name, email, role, phone, password, image_url)
            VALUES (${uuidv4()}, ${name}, ${email}, ${role.toLowerCase()}, ${phone}, ${password}, ${image_url})
        `;
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create User.',
        };
    }
    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
}
export async function updateUsers(id: string, formData: FormData) {
    const imageFile = formData.get('image_url');
    let imageName;
    if (imageFile && imageFile instanceof File) {
        imageName = imageFile?.name;
        imageName = `/users/${imageName}`
    }

    const { name, email, role, phone, password, image_url } = UpdateUser.parse({
        name: formData.get('name'),
        email: formData.get('email'),
        role: formData.get('role'),
        phone: formData.get('phone'),
        password: formData.get('password'),
        image_url: imageName || null
    });

    try {
        await sql`
          UPDATE users
          SET name = ${name}, email = ${email}, role = ${role}, phone = ${phone}, password = ${password}, image_url =${image_url}
          WHERE id = ${id}
        `;
    } catch (error) {
        return { message: 'Database Error: Failed to Update User.' };
    }

    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
}

export async function deleteUsers(id: string) {
    try {
        await sql`DELETE FROM users WHERE id = ${id}`;
        revalidatePath('/dashboard/users');
        return { message: 'Deleted User' };
    } catch (error) {
        return { message: 'Database Error: Failed to Delete User' };
    }
}
