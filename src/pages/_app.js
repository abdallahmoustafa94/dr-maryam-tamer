import React,{useEffect} from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {

  const router = useRouter()

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



  useEffect(() => {
    // Check if the current locale is Arabic ('ar')
    if (router.locale === 'ar') {
      // Apply global RTL styles
      document.documentElement.classList.add("rtl");
    } else {
      // Remove global RTL styles
      document.documentElement.classList.remove("rtl");
    }
  }, [router.locale]);

  console.log(router.locale)
  
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

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [], null, ['ar', 'en'])),
  },
})

export default appWithTranslation(MyApp);
