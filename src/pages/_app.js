import React,{useEffect} from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";
import { NextSeo, NextSeoJsonLd } from 'next-seo';


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
        <NextSeo
      title="Dr. Maryam Tamer | Expert Dentist | Comprehensive Dental Care"
      description="Dr. Maryam Tamer, experienced dentist dedicated to your oral health. Providing comprehensive dental care, from routine check-ups to advanced treatments. Achieve a bright, healthy smile with our personalized care. Book an appointment today!"
      openGraph={{
        images: [
          {
            url: 'https://i.ibb.co/Km8LFr0/case3.jpg',
            width: 800,
            height: 600,
            alt: 'My Image',
          },
        ],
      }}
    />

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
