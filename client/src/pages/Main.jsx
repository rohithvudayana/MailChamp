import { Suspense, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => {
      return !prevState;
    });
  };
  
  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar openDrawer={openDrawer} />
      <Suspense fallback = {<SuspenseLoader/>}>
        <Outlet context={{ openDrawer }}/>
      </Suspense>
    </>
  );
};

export default Main;
