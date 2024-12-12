import React, { useEffect, useState } from "react";
import EditPage from "../../Components/Templates/EditPage";
import { useRouter } from "next/router";

const Index = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const {
    query: { userId },
    isReady,
  } = router;
  useEffect(() => {
    async function fetchData() {
      if (isReady) {
        const res = await fetch(`/api/customer/${userId}`);
        const toJson = await res.json();
        setData(toJson.data);
      }
    }
    fetchData();
  }, [isReady]);
  if (data) {
    return <EditPage data={data} id={userId} />;
  }
};

export default Index;
