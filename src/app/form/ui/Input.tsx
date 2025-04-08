'use client';

import { cn } from "@/app/lib/utils";
import { InputHTMLAttributes, forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  showPasswordToggle?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, type = "text", showPasswordToggle = false, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const isPasswordType = type === "password";

    const currentInputType =
      showPasswordToggle && isPasswordType
        ? (isPasswordVisible ? "text" : "password")
        : type;

    return (
      <div className="w-full">
        {label && (
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>  
        )}
        <div className="relative">
          <input
            ref={ref}
            {...props}
            type={currentInputType}
            className={cn(
              "w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3F72AF] focus:border-[#3F72AF] transition-all duration-200",
              error && "border-red-500 focus:ring-red-500 focus:border-red-500",
              className
            )}
          />
          {showPasswordToggle && isPasswordType && (
            <button
              type="button"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400"
            >
              {isPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
