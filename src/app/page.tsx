import Image from "next/image";
import FormPage from "./form/page";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800 text-black h-screen dark:text-white p-4 ">
      <FormPage></FormPage>
      </div>
  );
}
