import "../styles/InputField.css"
function InputField({
  inputWrapper="",
  type = "text",
  placeholder="Enter",
  value,
  onChange,
  error,
  name,
}) {
  return (
    <div className={`input-wrapper ${inputWrapper}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`form-input ${error ? "input-error" : ""}`}
      />

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;