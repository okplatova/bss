import { ParadigmaLogo } from "@/components/ui/ParadigmaLogo";
import s from "./styles.module.sass";
const Footer = () => {
  return (
    <footer className={`${s.footer} container`}>
      <p className={s.text}>
        <span>Big Screen Show © 2023.</span>
        <span>
          Световизуальное оборудование для грандиозного шоу. все права защищены
        </span>
      </p>
      <div className={s.development}>
        <ParadigmaLogo />
        <p>
          <span>разработка сайта – </span>
          <span>paradigma</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
