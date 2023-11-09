import { FC, PropsWithChildren } from "react";

import s from "./styles.module.sass";

import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { Menu } from "../../Menu";
import { useGetProduct } from "@/shared/hooks";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  // const a = useGetProduct();

  return (
    <div className={s.layout}>
      <Menu />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
