const InputLabel = ({ className = "", htmlfor = "", text = "" }) => {
  return (
    <label
      htmlFor={htmlfor}
      className={`block font-secondary text-sm font-normal text-white ${className}`}
    >
      {text}
    </label>
  );
};

export default InputLabel;
