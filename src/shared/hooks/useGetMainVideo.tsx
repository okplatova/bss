import axios from "axios";
import { useEffect, useState } from "react";

export const useGetMainVideo = () => {
  const [video, setVideo] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios({
        method: "get",
        url: "https://adm.bss-tv.com/",
      });
      setVideo(res.data.VIDEO[0].PREVIEW_TEXT);
    } catch (e) {
      console.log("error video", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    video,
    isLoading,
  };
};
