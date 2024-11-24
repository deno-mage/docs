import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import {
  InnerLeftSection,
  InnerRightSection,
  LeftRightSection,
} from "../components/left-right-section.tsx";

export const RoutingPage = () => {
  return (
    <Page description="Getting started with Mage">
      <div className="flex flex-col gap-8">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/routing" isCurrent>
            Routing
          </Breadcrumb>
        </BreadcrumbList>
        <LeftRightSection>
          <InnerLeftSection>
            <Heading level={1}>Routing</Heading>
            <p className="text-lg">
              Mage has simple and familiar routing. You can define routes for
              different HTTP methods and paths.
            </p>
          </InnerLeftSection>
          <InnerRightSection>
            <CodeBlock>
              {`app.get("/books", (context) => {
  context.json(StatusCode.OK, [{ title: "Book 1" }, { title: "Book 2" }]);
});

app.post("/books", (context) => {
  context.text(StatusCode.OK, "Created book!");
});`}
            </CodeBlock>
          </InnerRightSection>
        </LeftRightSection>
      </div>
    </Page>
  );
};
