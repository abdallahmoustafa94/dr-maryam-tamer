import React,{useEffect} from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
 
useEffect(()=>{
  if (typeof window !== "undefined") {
    const script = document.createElement("script");
    script.id = "wowInit";
    script.src = "/js/wow.min.js";
    script.onload = () => {
      new WOW().init();
    };
    document.body.appendChild(script);
  }
},[])
  return (
    <>
      <Head>
        <title>Dr.Maryam Tamer</title>
        <link rel="icon" href="/final/logo.png" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
    </>
  );
}

export default MyApp;
