import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const CACHE_CONTROL =
  `import { useCacheControl } from "@mage/app/cache-control";

// cache all responses for 60 seconds
app.use(useCacheControl({ maxAge: 60 }));
`;

export const CacheControlPage = () => {
  return (
    <Page description="Getting started with Mage" title="Cache control">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/cache-control" isCurrent>
            Cache control
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Cache control</Heading>
        <Text as="p" size="lg">
          Cache control headers are important for ensuring resources are cached
          effectively for consumers.
        </Text>

        <Heading level={2}>Setting cache control header</Heading>
        <Text as="p">
          Mage has a first party middleware to set cache control headers.
        </Text>
        <CodeBlock>{CACHE_CONTROL}</CodeBlock>
      </div>
    </Page>
  );
};
