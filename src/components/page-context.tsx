import { MageContext } from "@mage/server";
import { ComponentChildren, createContext } from "preact";
import { useContext } from "preact/hooks";

interface PageContextValue {
  asset: (path: string) => string;
}

export const PageContext = createContext<PageContextValue | undefined>(
  undefined,
);

interface PageProviderProps {
  context: MageContext;
  children: ComponentChildren;
}

export const PageProvider = (props: PageProviderProps) => {
  return (
    <PageContext.Provider
      value={{
        asset: props.context.asset.bind(props.context),
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error("useMage() must be used within <PageProvider />");
  }

  return context;
};
