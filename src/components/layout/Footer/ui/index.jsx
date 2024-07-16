import { ParadigmaLogo } from "@/components/ui/ParadigmaLogo";

import s from "./styles.module.sass";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={`${s.footerInner} container`}>
        <p className={s.text}>
          <span>Big Screen Show © {currentYear}</span>
          <span>
            Световизуальное оборудование для грандиозного шоу. все права
            защищены
          </span>
        </p>
        <a
          target="_blank"
          href="https://paradigma-digital.ru/"
          className={s.development}
        >
          <ParadigmaLogo />
          <p>
            <span>разработка сайта – </span>
            <span>paradigma</span>
          </p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
