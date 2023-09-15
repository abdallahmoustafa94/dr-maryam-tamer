/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";
import Loader from "../common/loader";
import useMediaQuery from "../hooks/useMediaQuery";
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
      {isLoading ? (
        <Loader />
      ) : (
        children
      )}
    </>
  );
};

export default LightTheme;
