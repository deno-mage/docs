import { ComponentChildren } from "preact";

interface CodeBlockProps {
  children: ComponentChildren;
}

export const CodeBlock = (props: CodeBlockProps) => {
  return (
    <pre className="text-sm rounded-lg overflow-hidden max-w-full w-prose">
      <code className="language-typescript">{props.children}</code>
    </pre>
  );
};
