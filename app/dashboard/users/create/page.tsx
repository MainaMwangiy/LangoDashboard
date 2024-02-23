import Form from '@/app/ui/users/create-form';
import Breadcrumbs from '@/app/ui/users/breadcrumbs';
import { getUser } from '@/app/lib/data';

export default async function Page() {
    const users = await getUser();
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Users', href: '/dashboard/users' },
                    {
                        label: 'Create User',
                        href: '/dashboard/users/create',
                        active: true,
                    },
                ]}
            />
            <Form users={users} />
        </main>
    );
}