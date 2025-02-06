import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const REQUEST = `app.post("/", async (context) => {
  console.log(context.request.method);
  console.log(context.request.headers.get("Content-Type"));
  console.log(context.url.searchParams.get("value"));
  console.log(await context.request.text());

  context.text(StatusCode.OK, "Hello, World!");
});`;

const URL = `app.get("/", (context) => {
  console.log(context.url);
  
  context.text(StatusCode.OK, "Hello, World!");
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

        <Heading level={2}>Request</Heading>
        <Text as="p">
          The request instance is available at{" "}
          <Text as="code">context.request</Text>. You can use this to
          interrogate the incoming request.
        </Text>
        <CodeBlock>{REQUEST}</CodeBlock>

        <Heading level={2}>URL</Heading>
        <Text as="p">
          For convenience a URL instance is available at{" "}
          <Text as="code">context.url</Text>. This is a parsed representation of
          the request URL.
        </Text>
        <CodeBlock>{URL}</CodeBlock>
      </div>
    </Page>
  );
};
