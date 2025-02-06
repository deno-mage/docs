import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";
import { CodeBlock } from "../components/code-block.tsx";

const SECURITY_HEADERS = `app.use(useSecurityHeaders());`;

const WITH_CSP = `app.use(useSecurityHeaders());

app.use(context) => {
  contentSecurityPolicy(context, {
    directives: {
      defaultSrc: "'self'",
      scriptSrc: ["'self'", "https://example.com"],
    },
  });
});`;

export const SecurityHeadersPage = () => {
  return (
    <Page description="Learn about Mage" title="Security headers">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/cors" isCurrent>
            Security headers
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Security headers</Heading>
        <Text as="p" size="lg">
          You can configure common security headers via a middleware provided by
          Mage.
        </Text>

        <Heading level={2}>Configuring</Heading>
        <Text as="p">
          To configure security headers, you can use the{" "}
          <Text as="code">useSecurityHeaders()</Text> middleware.
        </Text>
        <CodeBlock>{SECURITY_HEADERS}</CodeBlock>

        <Heading level={2}>With CSP</Heading>
        <Text as="p">
          This middleware configures a very secure CSP header so always use it
          before you configure your own CSP header.
        </Text>
        <CodeBlock>{WITH_CSP}</CodeBlock>
      </div>
    </Page>
  );
};
