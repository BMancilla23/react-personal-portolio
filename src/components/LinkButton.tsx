import { forwardRef } from "react";

type LinkButtonProps = {
  size?: "sm" | "default" | "lg";
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (props, ref) => {
    const {
      size = "default",
      className = "",
      children,
      ...anchorProps
    } = props;

    const baseStyles =
      "bg-primary  rounded-full flex font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-primary-foreground hover:bg-primary/90 shadown-lg shadow-primary/25 transition-all duration-300";

    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      default: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const finalClassName = `${baseStyles} ${sizeStyles[size]} ${className}`;

    return (
      <a ref={ref} className={finalClassName} {...anchorProps}>
        <span className="relative flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    );
  },
);
