"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CircleHelp, Eye, EyeOff } from "lucide-react";
import { UseFormRegister, FieldValues, FieldError, Path } from "react-hook-form";

type TextInputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: Record<string, FieldError | undefined | any>;
  label: string;
  type?: string;
  name: Path<T>;  // Ensure `name` is a valid key of the form data type
  toolTipText?: string;
  placeholder?: string;
  forgotPasswordLink?: string;
  icon?: React.ElementType;
};

export default function PasswordInput<T extends FieldValues>({
  register,
  errors,
  label,
  type = "password",
  name,
  toolTipText,
  icon: Icon,
  placeholder,
  forgotPasswordLink,
}: TextInputProps<T>) {
  const [passType, setPassType] = useState(type);

  // Get error message if available
  const errorMessage = errors[name]?.message || "";

  return (
    <div className="w-full">
      {/* Label and Tooltip */}
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {label}
        </label>
        {forgotPasswordLink && (
          <Link
            href={forgotPasswordLink}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </Link>
        )}
      </div>
      
      {/* Tooltip */}
      {toolTipText && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button type="button" className="ml-2">
                <CircleHelp className="w-4 h-4 text-slate-500" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{toolTipText}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {/* Input Field */}
      <div className="relative mt-2">
        {Icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="w-4 h-4 text-slate-300" />
          </div>
        )}
        <input
          id={name}
          type={passType}
          {...register(name, {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
              message: "Password must include uppercase, lowercase, number, and special character",
            },
          })}
          className={cn(
            "block w-full rounded-md border-0 py-2 shadow-sm ring-1 ring-inset ring-gray-300 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600",
            errors[name] && "focus:ring-red-500 text-red-600",
            Icon && "pl-8"
          )}
          placeholder={placeholder || label}
        />
        {/* Toggle Password Visibility */}
        <button
          type="button"
          onClick={() => setPassType(prev => (prev === "password" ? "text" : "password"))}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-600"
        >
          {passType === "password" ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </button>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <p className="mt-1 text-xs text-red-600">{errorMessage}</p>
      )}
    </div>
  );
}
