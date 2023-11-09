import { Button } from "@/components/ui/Button";
import s from "./styles.module.sass";
import { useRouter } from "next/router";

const Error = () => {
  const { push } = useRouter();
  return (
    <div className={s.error}>
      <h1>404</h1>
      <span>страница не найдена</span>
      <Button
        onClick={() => push("/")}
        size="medium"
        variable="clear"
        ariaLabel="equipmentType"
      >
        вернуться на главную
      </Button>
    </div>
  );
};

export default Error;
