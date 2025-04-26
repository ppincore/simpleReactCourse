import React, { InputHTMLAttributes } from "react";
type TInputProps = {
  
} & InputHTMLAttributes<HTMLInputElement>;

const Input = (props: TInputProps) => {
  return <input {...props}/>;
};

export default Input;
