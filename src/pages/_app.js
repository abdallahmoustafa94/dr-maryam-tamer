import React,{useEffect} from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/wow.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      new WOW().init();
    };

   

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Dr.Maryam Tamer</title>
        <link rel="icon" href="/final/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
      <Cursor />
      {/* <LoadingScreen /> */}
      <Component {...pageProps} />
      <ScrollToTop />
      {/* <Script strategy="beforeInteractive" id="wow" src="/js/wow.min.js"></Script> */}
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
      {/* <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script> */}
    </>
  );
}

export default MyApp;
