import { ComponentChild } from "preact";

interface TextProps {
  children: ComponentChild;
  as?: "p" | "span";
  size?: "xs" | "sm" | "base" | "lg";
  highlight?: boolean;
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
  const highlightStyles = props.highlight
    ? "bg-stone-200 p-[1px] rounded inline-block"
    : "";

  return (
    <Tag className={`${sizeClass} ${highlightStyles} max-w-prose`}>
      {props.children}
    </Tag>
  );
};
