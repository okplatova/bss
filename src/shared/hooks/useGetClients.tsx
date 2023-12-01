import axios from "axios";
import { useEffect, useState } from "react";

export const useGetClients = () => {
  const [clients, setClients] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios({
        method: "get",
        url: "https://dev9.paradigma-digital.ru/clients/",
      });
      setClients(res.data);
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
    clients,
    isLoading,
  };
};
