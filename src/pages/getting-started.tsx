import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Link } from "../components/link.tsx";
import { Text } from "../components/text.tsx";

const INSTALL_COMMAND = "deno install jsr:@mage/server";

const MINIMAL_TSCONFIG = `{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "preact"
  }
}`;

const FIRST_APP_CODE = `import { MageApp, StatusCode } from "@mage/server";

const app = new MageApp();

app.get("/", (context) => {
  context.render(StatusCode.OK, <h1>Hello, World!</h1>);
});

Deno.serve(app.build());`;

const RUN_COMMAND = "deno run --allow-all main.ts";

export const GettingStartedPage = () => {
  return (
    <Page description="Getting started with Mage" title="Getting Started">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/" isCurrent>
            Getting Started
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Getting Started</Heading>
        <Text as="p" size="lg">
          Mage aims to provide a simple and familiar API for building web apps.
        </Text>

        <Heading level={2}>Install</Heading>
        <Text as="p">
          Install Mage from{" "}
          <Link
            href="https://jsr.io/@mage/server"
            target="_blank"
            rel="noopener noreferrer"
          >
            JSR
          </Link>
          .
        </Text>
        <CodeBlock>{INSTALL_COMMAND}</CodeBlock>

        <Heading level={2}>Minimal compiler options</Heading>
        <Text as="p">
          Setup your minimal compiler options in{" "}
          <Text highlight>deno.json</Text>.
        </Text>
        <CodeBlock>{MINIMAL_TSCONFIG}</CodeBlock>

        <Heading level={2}>Write your first app</Heading>
        <Text as="p">
          The simplest app you can write with Mage is a simple "Hello, World!"
          app! Add the following to your <Text highlight>main.ts</Text> file.
        </Text>
        <CodeBlock>{FIRST_APP_CODE}</CodeBlock>

        <Heading level={2}>Run your app</Heading>
        <Text as="p">Run your app with Deno.</Text>
        <CodeBlock>{RUN_COMMAND}</CodeBlock>
      </div>
    </Page>
  );
};
