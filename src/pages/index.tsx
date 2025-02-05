import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Link } from "../components/link.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const EXAMPLE_APP = `import { MageApp, StatusCode } from "@mage/server";

const app = new MageApp();

app.get("/", (context) => {
  context.render(StatusCode.OK, <h1>Hello, World!</h1>);
});

Deno.serve(app.build());`;

export const IndexPage = () => {
  return (
    <Page description="Build web applications with Deno and Preact">
      <div className="flex flex-col gap-4">
        <BreadcrumbList>
          <Breadcrumb href="/" isCurrent>
            Home
          </Breadcrumb>
        </BreadcrumbList>
        <div className="flex flex-col gap-4">
          <Heading level="hero">Mage</Heading>
          <Text size="lg" as="p">
            Build web applications with{" "}
            <Link
              href="https://deno.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deno
            </Link>
            {" and "}
            <Link
              href="https://preactjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preact
            </Link>
          </Text>
          <CodeBlock>{EXAMPLE_APP}</CodeBlock>
        </div>
      </div>
    </Page>
  );
};
