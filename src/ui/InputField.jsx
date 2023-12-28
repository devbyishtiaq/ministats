const InputField = ({
  type = "text",
  placeholder = "",
  className = "",
  value,
  onChange,
  name = "",
  register,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`block w-full py-2 text-white px-3 ring-0 focus:ring-0 focus:border-dark-grey rounded-lg border border-dark-grey !bg-custom-black placeholder:text-grey text-sm ${className}`}
      value={value}
      onChange={onChange}
      autoComplete={name}
      {...register(name)}
    />
  );
};

export default InputField;
