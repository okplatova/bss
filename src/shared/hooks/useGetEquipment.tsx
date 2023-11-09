import axios from "axios";
import { useEffect, useState } from "react";

export const useGetEquipment = () => {
  const [equipment, setEquipment] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios({
        method: "get",
        url: "https://dev9.paradigma-digital.ru/services/",
      });
      setEquipment(res.data);
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
    equipment,
    isLoading,
  };
};
