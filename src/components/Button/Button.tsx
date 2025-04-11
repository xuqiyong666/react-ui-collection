import React, { useMemo } from "react";
import { css } from '@emotion/css'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {


  const className = useMemo(() => css`
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.75rem;
    border-width: 1px;
    text-align: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    &:hover {
      box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      filter: brightness(1.25);
    }

    &:disabled {
      background-color: #737373;
      border-color: #737373;
      color: #e5e5e5;
      cursor: not-allowed;
    }
  `, [])

  const styles = () => {
    const propStyle = props.style ?? {};
    if (props.disabled) return propStyle;
    if (variant === "primary")
      return {
        borderColor: "#6366F1",
        backgroundColor: "#6366F1",
        color: "#FAFAFA",
        ...propStyle,
      };
    if (variant === "secondary")
      return {
        borderColor: "#6366F1",
        backgroundColor: "#FAFAFA",
        color: "#6366F1",
        ...propStyle,
      };
    return propStyle;
  };

  return (
    <button {...props} className={className} style={styles()}>
      {props.children}
    </button>
  );
};

export default Button;
