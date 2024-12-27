"use client";
import AddNewButton from "@/components/FormInputs/AddNewButton";
import React from "react";
import Select from "react-tailwindcss-select";
import { Option, Options } from "react-tailwindcss-select/dist/components/type";

type FormSelectInputProps = {
  options: Options; // Array of options for the Select component
  label: string; // Label for the input
  option: Option | null; // Currently selected option
  setOption: (option: Option | null) => void; // Function to update the selected option
  href?: string; // Optional URL for the AddNewButton
  labelShown?: boolean; // Whether to show the label
  toolTipText?: string; // Tooltip text for the AddNewButton
};

export default function FormSelectInput({
  options,
  label,
  option,
  setOption,
  href,
  toolTipText,
  labelShown = true,
}: FormSelectInputProps) {
  return (
    <div className="">
      {labelShown && (
        <h2 className="pb-2 block text-sm font-medium leading-6 text-gray-900">
          Select {label}
        </h2>
      )}
      <div className="flex items-center space-x-2">
        <Select
          isSearchable
          primaryColor="blue"
          value={option}
          onChange={(item) => setOption(item as Option | null)}
          options={options}
          placeholder={label}
        />
        {href && toolTipText && (
          <AddNewButton toolTipText={toolTipText} href={href} />
        )}
      </div>
    </div>
  );
}
