'use client';
import { useFormState } from 'react-dom';
import { UserCircleIcon, KeyIcon, PhoneIcon, IdentificationIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createUser } from '@/app/lib/actions';
import { User } from '@/app/lib/definitions';

export default function Form({ users }: { users: User[] }) {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);

  return (
    <form action={dispatch} className="space-y-6" encType="multipart/form-data">
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
            placeholder="Enter Name"
          />
          <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
            placeholder="Enter Email"
          />
          {/* <MailIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
        </div>

        {/* Role */}
        <div className="mb-4">
          <label htmlFor="role" className="block mb-2 text-sm font-medium">
            Role
          </label>
          <input
            id="role"
            name="role"
            type="text"
            required
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
            placeholder="Enter Role"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
            placeholder="Enter Phone Number"
          />
          <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm placeholder:text-gray-500"
            placeholder="Enter Password"
          />
          <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>

        {/* Image URL - File Upload */}
        <div className="mb-4">
          <label htmlFor="image_url" className="block mb-2 text-sm font-medium">
            Profile Picture
          </label>
          <input
            id="image_url"
            name="image_url"
            type="file"
            className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
          />
          {/* <PhotographIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </button>
        <Button type="submit">Create User</Button>
      </div>
    </form>
  );
}
