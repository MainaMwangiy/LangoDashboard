import { getUser } from '@/app/lib/data';

export default async function UsersTable() {
  const users = await getUser();
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          {users.map((user, key) => {
            return (
              <>
                <p key={key}>{user.email}</p>
              </>
            )
          })}
        </div>
      </div>
    </div>
  );
}
