import React from "react";
import InputField from "./InputField";
import InputLabel from "./InputLabel";

const InputGroup = ({
  htmlfor = "",
  labelText = "",
  inputType = "",
  placeholder = "",
  inputName = "",
}) => {
  return (
    <div className="space-y-2 lg:col-span-6 col-span-12">
      <InputLabel htmlfor={htmlfor} text={labelText} />
      <InputField type={inputType} placeholder={placeholder} name={inputName} />
    </div>
  );
};

export default InputGroup;
