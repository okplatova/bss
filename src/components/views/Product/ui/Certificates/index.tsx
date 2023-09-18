import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import CertificateItem from "../CertificateItem";

const Certificates = () => {
  return (
    <div className={s.certificates}>
      <SectionTitle label="Сертификаты" />
      <div className={s.certificatesList}>
        {[...Array(6)].map((_, index) => (
          <CertificateItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
