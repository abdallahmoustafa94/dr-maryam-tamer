import React,{useEffect} from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";


function MyApp({ Component, pageProps }) {
  const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null
  useEffect(()=>{
    new WOW().init()
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
