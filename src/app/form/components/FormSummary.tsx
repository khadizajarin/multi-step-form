'use client';

// At the top of FormSummary.tsx or in your types file
export type FormData = {
    fullName?: string;
    email?: string;
    phone?: string;
    street?: string;
    city?: string;
    zip?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
  };
  

type Props = {
  data: FormData;
  onBack: () => void;
  onSubmit: () => void;
};

export default function FormSummary({ data, onBack, onSubmit }: Props) {
  return (
    <div className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Review Your Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-200">
        <div><strong>Full Name:</strong> {data.fullName}</div>
        <div><strong>Email:</strong> {data.email}</div>
        <div><strong>Phone:</strong> {data.phone}</div>
        <div><strong>Street:</strong> {data.street}</div>
        <div><strong>City:</strong> {data.city}</div>
        <div><strong>Zip Code:</strong> {data.zip}</div>
        <div><strong>Username:</strong> {data.username}</div>
        {/* Never show password in a real app, this is just for demo */}
        <div><strong>Password:</strong> {data.password}</div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
        >
          Back
        </button>

        <button
          type="button"
          onClick={onSubmit}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
