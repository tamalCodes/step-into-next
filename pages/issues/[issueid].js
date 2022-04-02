import React from "react";
import { useRouter } from "next/router";

const Issueid = () => {
  //router gives us the values inside the URL
  const router = useRouter();
  router.query.issueid;

  //* this query will help us to fetch the data
  //* we can get the isssueid and get the data from backend

  return <>Issueid</>;
};

export default Issueid;
