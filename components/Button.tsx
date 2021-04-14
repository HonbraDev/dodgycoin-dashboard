import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";

const sizeClassnames = {
  big: "py-2 px-6 text-sm rounded-lg",
  small: "px-2 py-1 text-xs rounded-md",
};

const colorClassnames = {
  primary:
    "text-white bg-blue-500 hover:bg-blue-600 disabled:text-white disabled:bg-blue-600",
    secondary: "text-white bg-gray-500 hover:bg-gray-600 disabled:text-white disabled:bg-gray-600",
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: keyof typeof sizeClassnames;
  color?: keyof typeof colorClassnames;
  icon?: ReactNode;
  transition?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "big",
  color = "primary",
  disabled,
  icon,
  className = "",
  transition,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={`flex shadow ${sizeClassnames[size]} ${
        transition ? `transition duration-200 ease-in-out` : ``
      } ${
        colorClassnames[color]
      } font-bold flex items-center justify-center ${className}`}
      data-testid="button"
      {...props}
    >
      <span className="flex items-center">
        {icon ? <span className={`mr-2 items-center`}>{icon}</span> : null}
        {children}
      </span>
    </button>
  );
};
