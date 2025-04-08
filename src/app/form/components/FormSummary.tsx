// 'use client';

// import Button from "../ui/Button";

// // At the top of FormSummary.tsx or in your types file
// export type FormData = {
//     fullName?: string;
//     email?: string;
//     phone?: string;
//     street?: string;
//     city?: string;
//     zip?: string;
//     username?: string;
//     password?: string;
//     confirmPassword?: string;
//   };
  

// type Props = {
//   data: FormData;
//   onBack: () => void;
//   onSubmit: () => void;
// };

// export default function FormSummary({ data, onBack, onSubmit }: Props) {
//   return (
//     <div className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
//       <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Review Your Information</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-200">
//         <div><strong>Full Name:</strong> {data.fullName}</div>
//         <div><strong>Email:</strong> {data.email}</div>
//         <div><strong>Phone:</strong> {data.phone}</div>
//         <div><strong>Street:</strong> {data.street}</div>
//         <div><strong>City:</strong> {data.city}</div>
//         <div><strong>Zip Code:</strong> {data.zip}</div>
//         <div><strong>Username:</strong> {data.username}</div>
//         <div><strong>Password:</strong> {'•'.repeat(data.password?.length || 8)}</div>

//       </div>

//       <div className="flex justify-between pt-4">
//         <Button
//           type="button"
//           onClick={onBack}
//         >
//           Back
//         </Button>

//         <Button
//           type="submit"
//           onClick={onSubmit}
//           className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
//         >
//           Submit
//         </Button>
//       </div>
//     </div>
//   );
// }


'use client';

import { useMutation } from '@tanstack/react-query';

import Button from '../ui/Button';

import { submitForm } from '@/app/lib/apt';

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

export default function FormSummary({ data, onBack }: Props) {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: submitForm,
    onSuccess: () => {
      console.log('Success! You can redirect or show a message.');
    },
  });

  return (
    <div className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Review Your Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-200">
        <div><strong>Full Name:</strong> {data.fullName}</div>
        <div><strong>Email:</strong> {data.email}</div>
        <div><strong>Phone:</strong> {data.phone}</div>
        <div><strong>Street:</strong> {data.street}</div>
        <div><strong>City:</strong> {data.city}</div>
        <div><strong>Zip Code:</strong> {data.zip}</div>
        <div><strong>Username:</strong> {data.username}</div>
        <div><strong>Password:</strong> {'•'.repeat(data.password?.length || 8)}</div>
      </div>

      {isSuccess && (
        <p className="text-green-600 dark:text-green-400 text-sm">
          ✅ Submission successful!
        </p>
      )}

      <div className="flex justify-between pt-4">
        <Button type="button" onClick={onBack}>
          Back
        </Button>

        <Button
          type="button"
          disabled={isPending}
          onClick={() => mutate(data)}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
        >
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </div>
  );
}
