import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function UserRoles({ role }: { role: 'user' | 'admin' }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': role === 'user',
          'bg-green-500 text-white': role === 'admin',
        },
      )}
    >
      {role === 'user' ? (
        <>
          user
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {role === 'admin' ? (
        <>
          admin
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
