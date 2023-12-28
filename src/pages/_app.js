import React,{useState, useEffect} from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import { useRouter } from 'next/router';
import useMediaQuery from "../hooks/useMediaQuery";
import "../styles/main.scss";
import i18n from "../../config/i18n";
import Loader from "../common/loader";

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
    if (i18n.language === 'ar') {
      // Apply global RTL styles
      console.log('Adding RTL class');
      document.documentElement.classList.add("rtl");
  
      // Add custom font-family for Cairo font
      document.documentElement.style.setProperty("font-family", "'Cairo', sans-serif");
    } else {
      // Remove global RTL styles
      console.log('Removing RTL class');
      document.documentElement.classList.remove("rtl");
  
      // Reset font-family to the default value for LTR text
      document.documentElement.style.removeProperty("font-family");
    }
  }, [i18n.language]);

  console.log(router.locale)

  const windowWidth = useMediaQuery();
  const [isLoading, setIsLoading] = useState(true)
      useEffect(()=>{
        if(typeof windowWidth !== 'undefined'){
          setIsLoading(false)
        }
      },[windowWidth])
  
      console.log(windowWidth)
  return (
    <>
      <Head> 
        <title>عيادة دكتورة مريم تامر</title>
        <link rel="icon" href="/final/logo.webp" />
        <link
  href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap"
  rel="stylesheet"
/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
      <Cursor />
      {/* <LoadingScreen  /> */}
      {isLoading && (
        <Loader / >
      )}
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



export default MyApp
