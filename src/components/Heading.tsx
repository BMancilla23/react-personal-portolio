import type { ReactNode } from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  size?: "xl" | "lg" | "md";
  className?: string;
  children: ReactNode;
};
export const Heading = ({
  as: Tag = "h2",
  align = "left",
  size = "lg",
  className,
  children,
}: HeadingProps) => {
  const sizes = {
    xl: "text-3xl md:text-4xl lg:text-5xl",
    lg: "text-3xl md:text-4xl",
    md: "text-xl md:text-2xl",
  };

  const aligns = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <Tag
      className={`${sizes[size]} ${aligns[align]} font-bold leading-tight ${className}`}
    >
      {children}
    </Tag>
  );
};
