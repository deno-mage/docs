import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Link } from "../components/link.tsx";

export const IndexPage = () => {
  return (
    <Page description="Build web applications with Deno and Preact">
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <div className="text-center lg:text-right">
          <Heading level={1}>Mage Server</Heading>
          <p className="text-lg">
            Build web applications with{" "}
            <Link href="https://deno.com">Deno</Link>
            {" and "}
            <Link href="https://preactjs.com">Preact</Link>
          </p>
        </div>
        <div>
          <CodeBlock>
            {`import { MageApp, StatusCode } from "@mage/server";

const app = new MageApp();

app.get("/", (context) => {
  context.text(StatusCode.OK, "Hello, World!");
});

Deno.serve(app.build());`}
          </CodeBlock>
        </div>
      </div>
    </Page>
  );
};
