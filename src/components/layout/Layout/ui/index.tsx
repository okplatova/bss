import { FC, PropsWithChildren } from "react";

import s from "./styles.module.sass";

import { Header } from "../../Header";
import { Footer } from "../../Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
