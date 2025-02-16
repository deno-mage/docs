import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const SET = `c.set("key", "value");`;

const GET = `const value = c.get("key");`;

export const ContextDataPage = () => {
  return (
    <Page description="Getting started with Mage" title="Context Data">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/context-data" isCurrent>
            Context Data
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Context Data</Heading>
        <Text as="p" size="lg">
          You can share data across middleware via context data.
        </Text>

        <Heading level={2}>Set</Heading>
        <Text as="p">
          Set data on the context to be used by a middleware down the chain.
          This data is isolated to the context for the current request.
        </Text>
        <CodeBlock>{SET}</CodeBlock>

        <Heading level={2}>Get</Heading>
        <Text as="p">
          Get data from the context that was set by a previous middleware.
        </Text>
        <CodeBlock>{GET}</CodeBlock>
      </div>
    </Page>
  );
};
