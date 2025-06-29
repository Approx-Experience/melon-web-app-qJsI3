import React, {useState, useEffect} from "react";
import NavigationBar from "./components/NavigationBar.jsx";
import { Outlet } from "react-router-dom";
import MoblieNavigationBar from "./components/MobileNavigationBar.jsx";

const Root = () => {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);

    const handleResize = () => {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
      {windowDimension < 768 ? 
      <MoblieNavigationBar/>
      :
      <NavigationBar />
      }
      <Outlet />
    </>
  );
};

export default Root;