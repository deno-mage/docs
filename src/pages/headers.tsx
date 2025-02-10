import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const READ_REQUEST_HEADERS = `app.use((context) => {
  console.log(context.request.headers.get("User-Agent"));
});`;

const EDIT_HEADERS = `app.use((context) => {
  context.response.headers.set("Content-Type", "text/plain");
  context.response.headers.delete("Content-Type", "text/plain");
});`;

const CACHE_CONTROL = `app.use((context) => {
  cacheControl(context, {
    maxAge: 60,
  });
});`;

const CSP = `app.use((context) => {
  contentSecurityPolicy(context, {
    directives: {
      defaultSrc: "'self'",
      scriptSrc: ["'self'", "https://example.com"],
    },
  });
});`;

export const HeadersPage = () => {
  return (
    <Page description="Learn about Mage" title="Headers">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/headers" isCurrent>
            Headers
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Headers</Heading>
        <Text as="p" size="lg">
          You can read request headers and configure response headers in any
          middleware.
        </Text>

        <Heading level={2}>Reading request headers</Heading>
        <Text as="p">
          You can read headers directly from the request object on{" "}
          <Text as="code">context.request.headers</Text>.
        </Text>
        <CodeBlock>{READ_REQUEST_HEADERS}</CodeBlock>

        <Heading level={2}>Edit response headers</Heading>
        <Text as="p">
          You can configure headers directly on the response object on{" "}
          <Text as="code">context.response.headers</Text>.
        </Text>
        <CodeBlock>{EDIT_HEADERS}</CodeBlock>

        <Heading level={2}>Utility methods</Heading>
        <Text as="p">
          Mage provides utility functions to help you set common headers that
          are long winded and complex.
        </Text>

        <Heading level={3}>Cache-Control</Heading>
        <Text as="p">
          The <Text as="code">cacheControl()</Text>{" "}
          function helps you set the Cache-Control header.
        </Text>
        <CodeBlock>{CACHE_CONTROL}</CodeBlock>

        <Heading level={3}>Content-Security-Policy</Heading>
        <Text as="p">
          The <Text as="code">contentSecurityPolicy()</Text>{" "}
          function helps you set the Content-Security-Policy header.
        </Text>
        <CodeBlock>{CSP}</CodeBlock>

        <Heading level={2}>Security headers</Heading>
        <Text as="p" size="lg">
          You can configure common security headers via a middleware provided by
          Mage.
        </Text>
      </div>
    </Page>
  );
};
