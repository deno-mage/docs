import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

export const PrebuiltMiddlewaresPage = () => {
  return (
    <Page description="Learn about Mage" title="Prebuilt middlewares">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/prebuilt-middlewares" isCurrent>
            Prebuilt middlewares
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Prebuilt middlewares</Heading>
        <Text as="p" size="lg">
          Mage provides a few prebuilt middlewares to help you set handle common
          scenarios.
        </Text>
        <Text as="mark">To do</Text>
      </div>
    </Page>
  );
};
