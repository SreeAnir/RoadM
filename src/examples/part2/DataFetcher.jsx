import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("API Data Loaded ✅");
    }, 2000);
  }, []);

  return <h2>{data ? data : "Loading..."}</h2>;
};

export default DataFetcher;
