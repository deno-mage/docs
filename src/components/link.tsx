import { ComponentChildren } from "preact";
import { FaExternalLinkAlt } from "@preact-icons/fa";

interface LinkProps {
  href: string;
  target?: "_blank" | "_self";
  rel?: string;
  children: ComponentChildren;
}

export const Link = (props: LinkProps) => {
  return (
    <a
      href={props.href}
      target={props.target}
      rel={props.rel}
      className="inline-flex gap-1 items-center underline underline-offset-2 text-blue-500 visited:text-blue-800"
    >
      {props.children}
      {props.target === "_blank" && <FaExternalLinkAlt />}
    </a>
  );
};
