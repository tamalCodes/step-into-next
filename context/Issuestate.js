import react, { useState } from "react";
import Issuecontext from "./Issuecontext";

const Issuestate = (props) => {
  const [allissues, setallissues] = useState([]);

  return (
    <Issuecontext.Provider
      value={{
        allissues,
        setallissues,
      }}
    >
      {props.children};
    </Issuecontext.Provider>
  );
};

export default Issuestate;
