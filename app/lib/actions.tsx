'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string({
        invalid_type_error: 'Please select a user.',
    }),
    status: z.enum(['pending', 'paid'], {
        invalid_type_error: 'Please select a role.',
    }),
    date: z.string(),
});

export type State = {
    errors?: {
        customerId?: string[];
        // amount?: string[];
        // status?: string[];
    };
    message?: string | null;
};

const CreateUser = FormSchema.omit({ id: true, date: true });
const UpdateUser = FormSchema.omit({ id: true, date: true });


export async function createUser(prevState: State, formData: FormData) {
    const validatedFields = CreateUser.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create User.',
        };
    }
    const { customerId, status } = validatedFields.data;
    const date = new Date().toISOString().split('T')[0];
    try {
        await sql`
        INSERT INTO Users (customer_id,  status, date)
        VALUES (${customerId}, ${status}, ${date})
      `;
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create User.',
        };
    }
    revalidatePath('/dashboard/Users');
    redirect('/dashboard/Users');
}

export async function updateUsers(id: string, formData: FormData) {
    const { customerId, status } = UpdateUser.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    try {
        await sql`
          UPDATE Users
          SET customer_id = ${customerId}, status = ${status}
          WHERE id = ${id}
        `;
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