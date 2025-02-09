import { Page } from "../components/page.tsx";
import { Heading } from "../components/heading.tsx";
import { CodeBlock } from "../components/code-block.tsx";
import { Breadcrumb, BreadcrumbList } from "../components/breadcrumbs.tsx";
import { Text } from "../components/text.tsx";

const WEB_SOCKET = `app.get("/websocket", (context) => {
  context.webSocket((socket) => {
    socket.addEventListener("message", (event) => {
      if (event.data === "ping") {
        socket.send("pong");
      }
    });

    socket.addEventListener("close", () => {
      console.log("Socket closed");
    });
  });
});`;

export const WebSocketsPage = () => {
  return (
    <Page description="Learn about Mage" title="Web Sockets">
      <div className="flex flex-col gap-4 max-w-full">
        <BreadcrumbList>
          <Breadcrumb href="/">Home</Breadcrumb>
          <Breadcrumb href="/web-sockets" isCurrent>
            Web Sockets
          </Breadcrumb>
        </BreadcrumbList>

        <Heading level={1}>Web Sockets</Heading>
        <Text as="p" size="lg">
          Mage supports Web Sockets with a simple API.
        </Text>

        <Heading level={2}>Connecting a web socket</Heading>
        <Text as="p">
          You can upgrade a request to a web socket connection using the{" "}
          <Text as="code">context.webSocket()</Text>{" "}
          method. If the request is not a WebSocket request it will send a 501
          Not Implemented response and no WebSocket will be created.
        </Text>
        <CodeBlock>{WEB_SOCKET}</CodeBlock>
      </div>
    </Page>
  );
};
