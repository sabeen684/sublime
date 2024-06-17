import { FILE } from "@/constants/image";
import Image from "next/image";
import {
  CSSProperties,
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
  useState,
} from "react";
import UIButton from "../uibutton";


interface UIFileInputProps {
  id?: string;
  label?: string;
  name?: string;
  isRequired?: boolean;
  placeholder?: string;
  style?: CSSProperties;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  defaultValue?: string | number | null;
  instruction?: string;
  multiple?: boolean;
  accept?: string;
}
export default function UIFileInput({
  id,
  label,
  name,
  isRequired,
  placeholder,
  style,
  onChange,
  error,
  instruction,
  accept = ".jpg,.jpeg,.pdf",
}: UIFileInputProps) {
  const [fileList, setFileList] = useState<FileList | null>(null);
  const [validation, setValidation] = useState<string | null>(null);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files?.length < 1) return;
    // const validTypes = ["image/jpeg", "application/pdf"];
    // const filesArray=Array.from(files);
    // for (const file of filesArray) {
    //   if (!validTypes.includes(file.type)) {
    //     setValidation("Only JPG, JPEG, and PDF files are allowed.");
    //     return;
    //   }
    // }

    setValidation(null);
    setFileList(files);
    onChange && onChange(e);
  };



  return (
    <div className="fileinput" style={style}>
      {label ? (
        <label htmlFor={id ? id : ""} className="fileinput-label">
          {label} {isRequired ? "*" : ""}
        </label>
      ) : null}

      <div className={`fileinput-input ${error ? "error" : ""}`}>
        <div className="fileinput-input--add">
          <span>
            {fileList && fileList?.length > 0
              ? fileList &&
                Object.values(fileList).map((item, index) => (
                  <div className="fileinput-input--name" key={index}>
                    <div>{item.name}</div>
                  </div>
                ))
              : placeholder}
          </span>
          <div className="fileinput-input--add_btn">
            <UIButton
              label={
                fileList && fileList.length > 0
                  ? `${fileList.length} Items Selected`
                  : "Choose File"
              }
              
              style={{ fontSize: "1rem", height: "2rem" }}
              onClick={() => handleFileChange}
            />
          </div>
          <input
            type={"file"}
            onChange={handleFileChange}
            id={id}
            name={name}
            required={isRequired}
            accept={accept}
          />
        </div>
      </div>

      {error ? <span className="fileinput-error">{error}</span> : null}
      {validation ? <span className="fileinput-error">{validation}</span> : null}

      {instruction ? (
        <p className="fileinput-instruction">{instruction}</p>
      ) : null}
    </div>
  );
}
