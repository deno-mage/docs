import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const REQUEST = `app.use(async (context) => {
  console.log(context.request.method);
  console.log(context.request.url);
  console.log(await context.request.text());
});`;

const HEADER = `app.use(async (context) => {
  console.log(context.request.header("Content-Type"));
});`;

const SEARCH_PARAM = `app.use(async (context) => {
  console.log(context.url.searchParam("value"));
});`;

const RAW = `app.use((context) => {
  console.log(context.request.raw.method);
  console.log(context.request.raw.url);
});`;

export const RequestsPage = () => {
  return (
    <Page description="Learn about Mage" title="Accessing the request">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/access-the-request" isCurrent>
            Requests
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Requests</Heading>
        <Text as="p" size="lg">
          You have full access to the raw request object in all middleware.
        </Text>

        <Heading level={2}>MageRequest</Heading>
        <Text as="p">
          The request object is available on the context as a{" "}
          <Text as="code">MageRequest</Text>{" "}
          that provides memoized access to the body utility methods like{" "}
          <Text as="code">text()</Text>, <Text as="code">json()</Text>, and{" "}
          <Text as="code">formData()</Text>.
        </Text>
        <CodeBlock>{REQUEST}</CodeBlock>

        <Heading level={2}>Headers</Heading>
        <Text as="p">
          You can read header values from the request object using the{" "}
          <Text as="code">header()</Text> method.
        </Text>
        <CodeBlock>{HEADER}</CodeBlock>

        <Heading level={2}>Search Params</Heading>
        <Text as="p">
          You can read search parameters from the request object using the{" "}
          <Text as="code">searchParam()</Text> method.
        </Text>
        <CodeBlock>{SEARCH_PARAM}</CodeBlock>

        <Heading level={2}>Raw Request</Heading>
        <Text as="p">
          The raw request object is available on the context as{" "}
          <Text as="code">context.request.raw</Text>{" "}
          and provides access to the raw request object.
        </Text>
        <CodeBlock>{RAW}</CodeBlock>
      </div>
    </Page>
  );
};
