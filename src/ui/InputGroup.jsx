import React from "react";
import InputLabel from "./InputLabel";

const InputGroup = ({
  htmlfor = "",
  labelText = "",
  inputType = "text",
  placeholder = "",
  inputName = "",
  register,
  errors,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="space-y-2 lg:col-span-6 col-span-12">
      <InputLabel htmlFor={htmlfor} text={labelText} />
      <input
        type={inputType}
        name={inputName}
        placeholder={placeholder}
        className={`block w-full py-2 text-white px-3 ring-0 focus:ring-0 focus:border-dark-grey rounded-lg border border-dark-grey bg-custom-black placeholder:text-grey text-sm ${className}`}
        value={value}
        onChange={onChange}
        autoComplete={inputName}
        {...register(inputName)}
      />
      {errors[inputName] && (
        <p className="text-red-500 text-sm">{errors[inputName].message}</p>
      )}
    </div>
  );
};

export default InputGroup;
