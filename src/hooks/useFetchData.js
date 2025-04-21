import { useEffect, useState } from "react";

const useFetchData = (fetchFunction, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setError(null);
    setIsLoading(true);
    fetchFunction(params, signal)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        if (error.message === "canceled") return;
        setError(error);
      })
      .finally(() => setIsLoading(false));

    return () => {
      controller.abort();
    };
  }, [fetchFunction, params]);

  return { data, isLoading, error };
};

export default useFetchData;
