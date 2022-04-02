import react from "react";
import Issuecontext from "./Issuecontext";

const Issuestate = (props) => {
  const [drawerOpen, setDrawerOpen] = react.useState(true);
  const anchor = "left";
  const [state, setState] = react.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  return (
    <Issuecontext.Provider
      value={{
        drawerOpen,
        setDrawerOpen,
        anchor,
        state,
        setState,
      }}
    >
      {props.children};
    </Issuecontext.Provider>
  );
};

export default Issuestate;
