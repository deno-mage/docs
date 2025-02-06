import { ComponentChild } from "preact";

interface TextProps {
  children: ComponentChild;
  as?: "p" | "span" | "mark" | "code";
  size?: "xs" | "sm" | "base" | "lg";
  bold?: boolean;
}

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
};

export const Text = (props: TextProps) => {
  const Tag = props.as ?? "span";

  const sizeClass = sizeClasses[props.size ?? "base"];
  const markStyles = props.as === "mark" ? "bg-yellow-200 p-1 rounded" : "";
  const codeStyles = props.as === "code" ? "bg-stone-200 p-1 rounded" : "";
  const boldStyles = props.bold ? "font-bold" : "";

  return (
    <Tag
      className={`${sizeClass} ${markStyles} ${boldStyles} ${codeStyles} max-w-prose`}
    >
      {props.children}
    </Tag>
  );
};
