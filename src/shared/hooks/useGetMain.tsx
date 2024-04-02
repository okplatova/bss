import axios from "axios";
import { useEffect, useState } from "react";

export const useGetMain = () => {
  const [main, setMain] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios({
        method: "get",
        url: "https://adm.bss-tv.com/",
      });
      setMain(res.data.MAIN);
    } catch (e) {
      console.log("error", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    main,
    isLoading,
  };
};
