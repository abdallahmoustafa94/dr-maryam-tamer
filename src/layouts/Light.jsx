/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";
import Loader from "../common/loader";
import useMediaQuery from "../hooks/useMediaQuery";
import Navbar from "../components/Navbar/navbar";
const LightTheme = ({ children, mobileappstyle }) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const windowWidth = useMediaQuery()
  React.useEffect(() => {
    window.theme = "light";
  }, []);

  React.useEffect(()=>{
    if(typeof windowWidth !== 'undefined'){
      setIsLoading(false)
    }
  },[windowWidth])

  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
      var navbar = navbarRef.current,
        logo = logoRef.current;
      if (window.pageYOffset > 300) {
        navbar?.classList.add("nav-scroll");
      } else {
        navbar?.classList.remove("nav-scroll");
      }
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          navbar?.classList.add("nav-scroll");
        } else {
          navbar?.classList.remove("nav-scroll");
        }
      });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/light.css" />
        {mobileappstyle ? (
          <link href="/css/mobile-app-light.css" rel="stylesheet" />
        ) : (
          ""
        )}
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />

      {isLoading ? (
        <Loader />
      ) : (
        children
      )}
    </>
  );
};

export default LightTheme;
