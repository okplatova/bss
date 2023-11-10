import "@/shared/styles/index.sass";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layout/Layout";
import { RootStoreContext } from "@/shared/context";
import RootStore from "@/shared/store/rootStore";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  NProgress.configure({
    showSpinner: false,
  });

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);
    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, [router.events]);

  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RootStoreContext.Provider>
  );
}
