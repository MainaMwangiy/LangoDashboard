import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { CreateUsers } from '@/app/ui/users/buttons';
import UsersTable from '@/app/ui/users/table';

export default async function Page() {
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>User Management</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search Users..." />
                <CreateUsers />
            </div>
            <UsersTable />
        </div>
    );
}