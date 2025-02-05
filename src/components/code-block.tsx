import { ComponentChildren } from "preact";

interface CodeBlockProps {
  children: ComponentChildren;
}

export const CodeBlock = (props: CodeBlockProps) => {
  return (
    <pre className="rounded-lg overflow-hidden max-w-prose">
      <code className="language-typescript">{props.children}</code>
    </pre>
  );
};
