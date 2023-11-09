import s from "./styles.module.sass";

import { SectionTitle } from "@/components/ui/SectionTitle";
import CertificateItem from "../CertificateItem";
import { FC } from "react";
import { Skeleton } from "@/components/ui/Skeleton";

const Certificates: FC<any> = ({ сertificates }) => {
  return (
    <div className={s.certificates}>
      <SectionTitle label="Сертификаты" />
      <div className={s.certificatesList}>
        {сertificates ? (
          <>
            {сertificates.map((сertificate: any) => (
              <CertificateItem
                сertificate={сertificate}
                key={сertificate["Текст"]}
              />
            ))}
          </>
        ) : (
          <>
            {[...Array(6)].map((_, index) => (
              <Skeleton key={index} className={s.skeleton} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Certificates;
