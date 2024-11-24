import { ComponentChildren } from "preact";

interface CodeBlockProps {
  children: ComponentChildren;
}

export const CodeBlock = (props: CodeBlockProps) => {
  return (
    <pre className="rounded-lg overflow-hidden">
      <code className="language-typescript">{props.children}</code>
    </pre>
  );
};
