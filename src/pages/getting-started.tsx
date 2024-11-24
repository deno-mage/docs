import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import {
  InnerLeftSection,
  InnerRightSection,
  LeftRightSection,
} from "../components/left-right-section.tsx";

export const GettingStartedPage = () => {
  return (
    <Page description="Getting started with Mage">
      <div className="flex flex-col gap-8">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/" isCurrent>
            Getting Started
          </Breadcrumb>
        </BreadcrumbList>
        <LeftRightSection>
          <InnerLeftSection>
            <Heading level={1}>Getting Started</Heading>
            <p className="text-lg">
              Mage is a web framework for Deno. It allows you to build web
              applications with Deno and Preact.
            </p>
          </InnerLeftSection>
          <InnerRightSection>
            <CodeBlock>
              {`app.get("/", (context) => {
  context.text(StatusCode.OK, "Hello, World!");
});`}
            </CodeBlock>
          </InnerRightSection>
        </LeftRightSection>
      </div>
    </Page>
  );
};
