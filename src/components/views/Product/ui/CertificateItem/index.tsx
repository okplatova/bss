import { PdfIcon } from "@/components/ui/PdfIcon";
import s from "./styles.module.sass";
import { Title } from "@/components/ui/Title";
import { DownloadIcon } from "@/components/ui/DownloadIcon";
import { Button } from "@/components/ui/Button";

const CertificateItem = () => {
  return (
    <div className={s.certificateItem}>
      <div className={s.top}>
        <PdfIcon />
        <Title variant="h6">Сертификат соответсвия</Title>
      </div>
      <div className={s.bottom}>
        <p className={s.year}>2023</p>
        <Button size="small" variable="secondary" className={s.downloadBtn}>
          <DownloadIcon />
        </Button>
      </div>
    </div>
  );
};

export default CertificateItem;
