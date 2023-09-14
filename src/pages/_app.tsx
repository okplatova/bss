import "@/shared/styles/index.sass";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layout/Layout";
import { RootStoreContext } from "@/shared/context";
import RootStore from "@/shared/store/rootStore";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RootStoreContext.Provider>
  );
}
