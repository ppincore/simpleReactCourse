import React, { ButtonHTMLAttributes, ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: TButtonProps) => {
  const { children, ...otherProps } = props;
  return <button {...otherProps}>{children}</button>;
};

export default Button;
