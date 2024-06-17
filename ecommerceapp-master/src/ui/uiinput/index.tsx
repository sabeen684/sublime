"use client"
import { CSSProperties, ChangeEventHandler, HTMLInputTypeAttribute, MouseEventHandler, useState } from "react";

interface UIInputProps {
  id?: string;
  label?: string;
  name?: string;
  isRequired?: boolean;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  defaultValue?: string | number | null;
  instruction?: string;
  disabled?: boolean;
  autoComplete?: string;
  min?: string;
  max?: string;
  maxLength?: number;
  pattern?: string;
}

export default function UIInput({
  id,
  label,
  name,
  isRequired,
  placeholder,
  type,
  style,
  onClick,
  onChange,
  error,
  defaultValue,
  instruction,
  disabled,
  autoComplete,
  max,
  min,
  maxLength,
  pattern,
}: UIInputProps) {
  const [value, setValue] = useState(defaultValue ? defaultValue.toString() : "");
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((prev) => !prev);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value;
    if (!maxLength || inputValue.length <= maxLength) {
      setValue(inputValue);
      if (onChange) {
        onChange(e);
      }
    }
  };

  return (
    <div className="inputfield" style={style}>
      {label && (
        <label htmlFor={id} className="inputfield-label">
          {label} {isRequired ? "*" : ""}
        </label>
      )}

      <input
        type={type === "password" ? (show ? "text" : "password") : type}
        id={id}
        name={name}
        className={`inputfield-input ${error ? "error" : ""}`}
        placeholder={placeholder}
        onClick={onClick}
        onChange={handleChange}
        value={value}
        required={isRequired}
        disabled={disabled}
        autoComplete={autoComplete ?? name}
        min={min}
        max={max}
        maxLength={maxLength}
        pattern={pattern}
      />

      {error && <span className="inputfield-error">{error}</span>}

      {type === "password" && (
        <i
          className={`fa-regular fa-eye${show ? "" : "-slash"}`}
          onClick={toggleShow}
          style={{ cursor: "pointer" }}
        ></i>
      )}

      {instruction && <p className="inputfield-instruction">{instruction}</p>}
    </div>
  );
}