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
const UpdateUser = FormSchema.omit({ id: true, date: true });


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
        image_url: imageName
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
    // const { customerId, status } = UpdateUser.parse({
    //     customerId: formData.get('customerId'),
    //     amount: formData.get('amount'),
    //     status: formData.get('status'),
    // });

    try {
        // await sql`
        //   UPDATE Users
        //   SET customer_id = ${customerId}, status = ${status}
        //   WHERE id = ${id}
        // `;
    } catch (error) {
        return { message: 'Database Error: Failed to Update User.' };
    }

    revalidatePath('/dashboard/Users');
    redirect('/dashboard/Users');
}

export async function deleteUsers(id: string) {
    try {
        await sql`DELETE FROM Users WHERE id = ${id}`;
        revalidatePath('/dashboard/Users');
        return { message: 'Deleted User' };
    } catch (error) {
        return { message: 'Database Error: Failed to Delete User' };
    }
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        // await signIn('credentials', formData);
    } catch (error) {
        // if (error instanceof AuthError) {
        //     switch (error.type) {
        //         case 'CredentialsSignin':
        //             return 'Invalid credentials.';
        //         default:
        //             return 'Something went wrong.';
        //     }
        // }
        throw error;
    }
}