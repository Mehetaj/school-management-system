import { cn } from "@/lib/utils";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp } from "lucide-react";
import { UseFormRegister, FieldErrors, FieldValues, Path } from "react-hook-form";

type TextInputProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  label: string;
  type?: string;
  name: Path<T>; // Using Path<T> instead of keyof T
  toolTipText?: string;
  unit?: string;
  placeholder?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function TextInput<T extends FieldValues>({
  register,
  errors,
  label,
  type = "text",
  name,
  toolTipText,
  unit,
  icon: Icon,
  placeholder,
}: TextInputProps<T>) {
  return (
    <div>
      <div className="flex space-x-2 items-center">
        <label
          htmlFor={name as string}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button>
                  <CircleHelp className="w-4 h-4 text-slate-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{toolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="mt-2">
        <div className="relative rounded-md ">
          {Icon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon className="text-slate-300 w-4 h-4" />
            </div>
          )}
          <input
            id={name as string}
            type={type}
            {...register(name, { required: true })}
            className={cn(
              "block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-sm",
              (errors[name] && "focus:ring-red-500 pl-8") || (Icon && "pl-8")
            )}
            placeholder={placeholder || label}
          />
          {unit && (
            <p className="bg-white py-2 px-3 rounded-tr-md rounded-br-md absolute inset-y-0 right-1 my-[2px] flex items-center">
              {unit}
            </p>
          )}
        </div>
        {errors[name] && (
          <span className="text-xs text-red-600">{label} is required</span>
        )}
      </div>
    </div>
  );
}
