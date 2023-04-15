const Input = ({
  type = "text",
  value,
  onChange,
  onBlur,
  id,
  name,
  placeholder,
  rows = 3,
  error,
  min,
  max,
  disabled = false,
}) => {
  const commonProps = {
    value,
    onChange,
    id,
    name,
    placeholder,
    onBlur,
    className: `form-control ${error ? "is-invalid" : ""}`,
  };
  if (type === "textarea") {
    return <textarea rows={rows} disabled={disabled} {...commonProps} />;
  }
  if (type === "file") {
    return (
      <input
        type="file"
        accept="image/png, image/jpeg"
        {...commonProps}
        multiple
      />
    );
  }
  return (
    <input
      type={type}
      min={min}
      max={max}
      disabled={disabled}
      {...commonProps}
    />
  );
};

export default Input;
