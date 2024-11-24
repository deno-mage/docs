import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import {
  InnerLeftSection,
  InnerRightSection,
  LeftRightSection,
} from "../components/left-right-section.tsx";

export const MiddlewarePage = () => {
  return (
    <Page description="Getting started with Mage">
      <div className="flex flex-col gap-8">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/middleware" isCurrent>
            Middleware
          </Breadcrumb>
        </BreadcrumbList>
        <LeftRightSection>
          <InnerLeftSection>
            <Heading level={1}>Middleware</Heading>
            <p className="text-lg">
              Middlewares are everything in Mage. You register middleware to
              handle requests and build the response.
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
