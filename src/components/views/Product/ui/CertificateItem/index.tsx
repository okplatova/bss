import s from "./styles.module.sass";

import { PdfIcon } from "@/components/ui/PdfIcon";
import { Title } from "@/components/ui/Title";
import { DownloadIcon } from "@/components/ui/DownloadIcon";
import { Button } from "@/components/ui/Button";
import { FC } from "react";

const CertificateItem: FC<any> = ({ сertificate }) => {
  return (
    <div className={s.certificateItem}>
      <div className={s.top}>
        <PdfIcon />
        <Title variant="h6">{сertificate["Текст"]}</Title>
      </div>
      <div className={s.bottom}>
        <p className={s.year}>{сertificate["Дата"]}</p>
        <Button
          size="small"
          variable="secondary"
          className={s.downloadBtn}
          ariaLabel="download"
        >
          <DownloadIcon />
        </Button>
      </div>
    </div>
  );
};

export default CertificateItem;
