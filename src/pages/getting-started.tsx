import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Link } from "../components/link.tsx";
import { Text } from "../components/text.tsx";

const INSTALL_COMMAND = "deno add jsr:@mage/app";

const FIRST_APP_CODE = `import { MageApp } from "@mage/app";

const app = new MageApp();

app.get("/", async (c) => {
  c.text("Hello, world!");
});

Deno.serve(app.handler);`;

const RUN_COMMAND = "deno run --allow-all main.ts";

export const GettingStartedPage = () => {
  return (
    <Page description="Getting started with Mage" title="Getting started">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/" isCurrent>
            Getting started
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Getting started</Heading>
        <Text as="p" size="lg">
          Setup a simple Mage app using these steps.
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

        <Heading level={2}>Write your first app</Heading>
        <Text as="p">
          The simplest app you can write with Mage is a simple "Hello, World!"
          app! Add the following to your <Text as="code">main.ts</Text> file.
        </Text>
        <CodeBlock>{FIRST_APP_CODE}</CodeBlock>

        <Heading level={2}>Run your app</Heading>
        <Text as="p">Run your app with Deno.</Text>
        <CodeBlock>{RUN_COMMAND}</CodeBlock>
      </div>
    </Page>
  );
};
