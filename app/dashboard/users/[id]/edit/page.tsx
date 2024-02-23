import Breadcrumbs from '@/app/ui/users/breadcrumbs';
import { fetchUserById } from '@/app/lib/data';
import EditForm from '@/app/ui/users/edit-form';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const user = await fetchUserById(id);
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Users', href: '/dashboard/users' },
                    {
                        label: 'Edit User',
                        href: `/dashboard/users/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <EditForm user={user} />
        </main>
    );
}