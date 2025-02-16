import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const SET_HEADER = `c.header("Content-Type", "text/plain");`;

const GET_HEADERS = `c.req.headers.get("User-Agent");

c.res.headers.get("User-Agent");`;

export const HeadersPage = () => {
  return (
    <Page description="Getting started with Mage" title="Headers">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/headers" isCurrent>
            Headers
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Headers</Heading>
        <Text as="p" size="lg">
          Mage context provides methods for setting and getting headers.{" "}
        </Text>

        <Heading level={2}>Set</Heading>
        <Text as="p">Set a response header.</Text>
        <CodeBlock>{SET_HEADER}</CodeBlock>

        <Heading level={2}>Get</Heading>
        <Text as="p">Get headers of request and response.</Text>
        <CodeBlock>{GET_HEADERS}</CodeBlock>
      </div>
    </Page>
  );
};
