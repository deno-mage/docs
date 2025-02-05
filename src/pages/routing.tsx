import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

export const RoutingPage = () => {
  return (
    <Page description="Learn about Mage routing" title="Routing">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/routing" isCurrent>
            Routing
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Routing</Heading>
        <Text size="lg" as="p">
          Mage has simple and familiar routing. You can define routes for
          different HTTP methods and paths.
        </Text>
        <CodeBlock>
          {`app.get("/books", (context) => {
  context.json(StatusCode.OK, [{ title: "Book 1" }, { title: "Book 2" }]);
});

app.post("/books", (context) => {
  context.text(StatusCode.OK, "Created book!");
});`}
        </CodeBlock>
      </div>
    </Page>
  );
};
