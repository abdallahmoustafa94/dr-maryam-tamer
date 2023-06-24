import Document, { Html, Head, Main, NextScript } from "next/document";
import { NextSeo, NextSeoJsonLd } from 'next-seo';


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="keywords" content="dentist, dental care, oral health, family dentistry, preventive dentistry, restorative dentistry, cosmetic dentistry, dental implants, teeth whitening, dental examinations, dental treatments, oral hygiene, dental clinic, smile makeover, pediatric dentistry, dental services, veneers, Hollywood smile, Dr. Maryam Tamer" />

          <meta
            name="description"
            content="Dr. Maryam Tamer, experienced dentist dedicated to your oral health. Providing comprehensive dental care, from routine check-ups to advanced treatments. Achieve a bright, healthy smile with our personalized care. Book an appointment today!"
          />
          <meta property="og:title" content="Dr. Maryam Tamer | Expert Dentist | Comprehensive Dental Care" />
<meta property="og:type" content="Dentist.Medical" />
<meta property="og:url" content="https://www.drmaryamtamer.com" /> 
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
    <NextSeoJsonLd
      images={[
        {
          url: 'https://i.ibb.co/Km8LFr0/case3.jpg',
          width: 800,
          height: 600,
          alt: 'My Image',
        },
      ]}
    />

          <meta name="author" content="" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-THZXR2W');`,
            }}
          />
          <meta name="google-site-verification" content="KVBmKEI1uEVRySQHHK8Rtsw-Vl0qjA_TApidKSiN0d4" />
        </Head>

        <body>
          <Main />
          <NextScript />
 <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-THZXR2W`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
    
        </body>
      </Html>
    );
  }
}

export default MyDocument;
