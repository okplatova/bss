import { FC, PropsWithChildren } from "react";

import s from "./styles.module.sass";

import { Header } from "../../Header";
import { Footer } from "../../Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
