import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const CSP = `import { useCSP } from "@mage/app/csp";

app.use(
  useCSP({
    directives: {
      defaultSrc: "'self'",
      upgradeInsecureRequests: true,
    },
  }),
);`;

export const CSPPage = () => {
  return (
    <Page description="Getting started with Mage" title="CSP">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/csp" isCurrent>
            CSP
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>CSP</Heading>
        <Text as="p" size="lg">
          Context Security Policy headers are vital for securing your web
          application.
        </Text>

        <Heading level={2}>Setting CSP header</Heading>
        <Text as="p">
          Mage has a first party middleware to set CSP headers.
        </Text>
        <CodeBlock>{CSP}</CodeBlock>
      </div>
    </Page>
  );
};
