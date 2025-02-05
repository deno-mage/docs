import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const SIMPLE_MIDDLEWARE = `app.get("/", (context) => {
  context.text(StatusCode.OK, "Hello, World!");
});`;

export const MiddlewarePage = () => {
  return (
    <Page description="Learn about Mage middleware" title="Middleware">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/middleware" isCurrent>
            Middleware
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Middleware</Heading>
        <Text size="lg" as="p">
          Mage apps are composed of stacked middleware. Every request is handled
          by each middleware in the order they are added.
        </Text>

        <Heading level={2}>Middleware</Heading>
        <Text as="p">
          A simple middleware that sets a response looks like this.
        </Text>
        <CodeBlock>{SIMPLE_MIDDLEWARE}</CodeBlock>
      </div>
    </Page>
  );
};
