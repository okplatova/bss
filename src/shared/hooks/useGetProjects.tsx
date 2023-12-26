import axios from "axios";
import { useEffect, useState } from "react";

export const useGetProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios({
        method: "get",
        url: "https://adm.bss-tv.com/projects/",
      });
      setProjects(res.data);
    } catch (e) {
      console.log("error projects", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    projects,
    isLoading,
  };
};
