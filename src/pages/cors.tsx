import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";
import { CodeBlock } from "../components/code-block.tsx";

const CORS = `app.use(useCors({
    origins: "*",
  }),
);`;

export const CorsPage = () => {
  return (
    <Page description="Learn about Mage" title="CORS">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/cors" isCurrent>
            CORS
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>CORS</Heading>
        <Text as="p" size="lg">
          You can configure cors via a middleware provided by Mage.
        </Text>

        <Heading level={2}>Configuring</Heading>
        <Text as="p">
          To configure cors, you can use the <Text as="code">useCors()</Text>
          {" "}
          middleware.
        </Text>
        <CodeBlock>{CORS}</CodeBlock>
      </div>
    </Page>
  );
};
