import Image from "next/image";
import FormPage from "./form/page";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded">
      <FormPage></FormPage>
      </div>
  );
}
