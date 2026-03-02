import { forwardRef } from "react";

type ButtonProps = {
  size?: "sm" | "default" | "lg";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      size = "default",
      className = "",
      children,
      type = "button",
      ...buttonProps
    } = props;

    const baseStyles =
      "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300";

    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      default: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const finalClassName = `${baseStyles} ${sizeStyles[size]} ${className}`;

    return (
      <button ref={ref} type={type} className={finalClassName} {...buttonProps}>
        <span className="relative flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  },
);
