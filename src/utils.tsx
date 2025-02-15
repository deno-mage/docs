import { MageMiddleware } from "@mage/app";
import postcss, { AcceptedPlugin } from "postcss";
import { ComponentChildren, createContext } from "preact";
import { useContext } from "preact/hooks";
/**
 * Options for building CSS file using PostCSS
 */
interface PostCSSOptions {
  /**
   * Path to the entry CSS file
   */
  entry: string;
  /**
   * Path to the output CSS file
   */
  output: string;
  /**
   * PostCSS plugins
   */
  plugins: AcceptedPlugin[];
}

/**
 * Build CSS file using PostCSS
 *
 * @param options PostCSS options
 */
export const buildPostCSS = async (options: PostCSSOptions) => {
  const input = await Deno.readTextFile(options.entry);
  const output = await postcss(options.plugins).process(input, {
    from: options.entry,
    to: options.output,
  });

  await Deno.writeTextFile(options.output, output.css);
};

/**
 * Compile CSS file using PostCSS. The compilation will take place before the next middleware is called
 * and on every request.
 *
 * @param options Middleware options
 * @returns MageMiddleware
 */
export const usePostCSS = (options: PostCSSOptions): MageMiddleware => {
  return async (_, next) => {
    await buildPostCSS(options);

    await next();
  };
};

/**
 * Get asset URL for the provided path with the build id embedded in the url for cache busting
 *
 * @param buildId The build id used to cache bust the asset, `useServeFiles()` supports serving files with the build id embedded
 * @param path Path to the asset
 */
export const asset = (buildId: string, path: string): string => {
  const pathParts = path.split("/");
  const filename = pathParts.pop();

  if (filename?.includes(".")) {
    const filenameParts = filename.split(".");
    const extension = filenameParts.pop();
    const basename = filenameParts.join(".");
    pathParts.push(`${basename}${buildId}.${extension}`);
  } else {
    pathParts.push(`${filename}${buildId}`);
  }

  return pathParts.join("/");
};

/**
 * Context value for asset path
 */
interface AssetContextValue {
  /**
   * Get the asset path with the build id injected for cache busting
   *
   * @param path Path to the asset
   */
  asset: (path: string) => string;
}

/**
 * Context for asset function to live on
 */
const AssetContext = createContext<AssetContextValue | undefined>(undefined);

/**
 * Props for AssetProvider component
 */
interface AssetProviderProps {
  buildId: string;
  children: ComponentChildren;
}

/**
 * AssetProvider component to provide paths to assets for the browser.
 *
 * @param props AssetProviderProps
 * @returns JSXInternal.Element
 */
export const AssetProvider = (props: AssetProviderProps) => {
  return (
    <AssetContext.Provider
      value={{
        asset: (key: string) => asset(props.buildId, key),
      }}
    >
      {props.children}
    </AssetContext.Provider>
  );
};

/**
 * Hook to get the asset path.
 *
 * @returns Function to get the asset path.
 */
export const useAsset = () => {
  const context = useContext(AssetContext);

  if (!context) {
    throw new Error("useAsset() must be used within <AssetProvider />");
  }

  return context.asset;
};
