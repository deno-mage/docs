import { ComponentChildren } from "preact";

interface CodeBlockProps {
  children: ComponentChildren;
}

export const CodeBlock = (props: CodeBlockProps) => {
  return (
    <pre className="inline-block rounded-lg overflow-hidden">
      <code className="language-typescript p-6">{props.children}</code>
    </pre>
  );
};
