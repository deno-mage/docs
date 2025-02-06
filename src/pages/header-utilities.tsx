import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const CACHE_CONTROL = `app.get("/", (context) => {
  cacheControl(context, {
    immutable: true,
    maxAge: 60,
    mustRevalidate: true,
    mustUnderstand: true,
    noCache: true,
    noStore: true,
    noTransform: true,
    proxyRevalidate: true,
    public: true,
    private: true,
    sMaxAge: 60,
    staleIfError: 60,
    staleWhileRevalidate: 60,
  });

  context.text(StatusCode.OK, "Hello, World!");
});`;

const CSP = `get("/", (context) => {
  contentSecurityPolicy(context, {
    directives: {
      defaultSrc: "'self'",
      scriptSrc: ["'self'", "https://example.com"],
    },
  });

  context.text(StatusCode.OK, "Hello, World!");
});`;

export const HeaderUtilitiesPage = () => {
  return (
    <Page description="Learn about Mage context" title="Context">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/header-utilities" isCurrent>
            Header utilities
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Header utilities</Heading>
        <Text as="p">
          Mage provides utility functions to help you configure some response
          headers.
        </Text>

        <Heading level={2}>Cache-Control</Heading>
        <Text as="p">
          The <Text as="code">cacheControl()</Text>{" "}
          function helps you set the Cache-Control header.
        </Text>
        <CodeBlock>{CACHE_CONTROL}</CodeBlock>

        <Heading level={2}>Content-Security-Policy</Heading>
        <Text as="p">
          The <Text as="code">contentSecurityPolicy()</Text>{" "}
          function helps you set the Content-Security-Policy header.
        </Text>
        <CodeBlock>{CSP}</CodeBlock>
      </div>
    </Page>
  );
};
