import axios from "axios";
import { useEffect, useState } from "react";

export const useGetServices = () => {
  const [services, setServices] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios({
        method: "get",
        url: "https://adm.bss-tv.com/services/",
      });
      setServices(res.data);
    } catch (e) {
      console.log("error services", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    services,
    isLoading,
  };
};
