import axios from "axios";
import { useEffect, useState } from "react";

export const useGetVideostudio = () => {
  const [videostudion, setVideostudion] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios({
        method: "get",
        url: "https://adm.bss-tv.com/videostudio/",
      });
      setVideostudion(res.data);
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
    videostudion,
    isLoading,
  };
};
