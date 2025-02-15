import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Link } from "../components/link.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const EXAMPLE_APP = `import { MageApp } from "@mage/app";

const app = new MageApp();

app.get("/", async (c) => {
  c.text("Hello, world!");
});

Deno.serve(app.handler);`;

export const IndexPage = () => {
  return (
    <Page description="Build web applications with Deno and Preact">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/" isCurrent>
            Home
          </Breadcrumb>
        </BreadcrumbList>
        <Heading level="hero">Build with Mage</Heading>
        <Text size="lg" as="p">
          Build web applications with{" "}
          <Link
            href="https://deno.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deno
          </Link>{" "}
          that feels familiar.
        </Text>
        <CodeBlock>{EXAMPLE_APP}</CodeBlock>
      </div>
    </Page>
  );
};
