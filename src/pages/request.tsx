import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const URL_CONTEXT = `app.get("/", (context) => {
  console.log(context.url);
  context.text(StatusCode.OK, "Hello, World!");
});`;

const REQUEST_CONTEXT = `app.post("/", async (context) => {
  console.log(context.request.method);
  console.log(context.request.headers.get("Content-Type"));
  console.log(await context.request.text());

  context.text(StatusCode.OK, "Hello, World!");
});`;

export const RequestPage = () => {
  return (
    <Page description="Learn about Mage context" title="Context">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/request" isCurrent>
            Request
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Request</Heading>
        <Text as="p">
          Details about the request are available on the context object.
        </Text>

        <Heading level={2}>URL</Heading>
        <Text as="p">
          The URL object and available at <Text as="code">context.url</Text>.
        </Text>
        <CodeBlock>{URL_CONTEXT}</CodeBlock>

        <Heading level={2}>Request</Heading>
        <Text as="p">
          The request instance is available at{" "}
          <Text as="code">context.request</Text>.
        </Text>
        <CodeBlock>{REQUEST_CONTEXT}</CodeBlock>
      </div>
    </Page>
  );
};
