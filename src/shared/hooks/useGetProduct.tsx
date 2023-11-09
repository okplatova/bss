import axios from "axios";
import { useEffect, useState } from "react";

export const useGetProduct = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios({
        method: "get",
        url: "https://dev9.paradigma-digital.ru/equipment/",
      });
      setProduct(res.data && Object.values(res.data));
    } catch (e) {
      console.log("error product", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    product,
    isLoading,
  };
};
