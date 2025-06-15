import React, { ReactNode } from "react";

interface ButtonProps {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: ButtonProps) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
