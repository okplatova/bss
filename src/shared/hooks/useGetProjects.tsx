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
        url: "https://dev9.paradigma-digital.ru/projects/",
      });
      console.log("res", res.data[0].CONTENT);
      setProjects(res.data);
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
    projects,
    isLoading,
  };
};
