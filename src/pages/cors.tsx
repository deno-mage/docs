import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const CORS = `import { useCORS } from "@mage/app/cors";

app.use(
  useCORS({
    origins: ["https://example.com"],
  }),
);`;

export const CORSPage = () => {
  return (
    <Page description="Getting started with Mage" title="CORS">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/cors" isCurrent>
            CORS
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>CORS</Heading>
        <Text as="p" size="lg">
          CORS headers are vital for securing your web application.
        </Text>

        <Heading level={2}>Setting CORS headers</Heading>
        <Text as="p">
          Mage has a first party middleware to set CORS headers.
        </Text>
        <CodeBlock>{CORS}</CodeBlock>
      </div>
    </Page>
  );
};
