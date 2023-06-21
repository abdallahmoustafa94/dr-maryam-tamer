import Document, { Html, Head, Main, NextScript } from "next/document";


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
          <meta
            name="keywords"
            content="dentist, dental clinic, dental services, oral health, City, State,veners, holywood smile, Dr. Maryam Tamer, دكتورة مريم ، دكتورة مريم تامر ، دكتور اسنان ، دكتور ، فينيرز ، طب اسنان ، دكتور اسنان في القاهرة ، خدمات طب الاسنان ، ابتسامة هوليوود ، طبيب اسنان ، عيادة اسنان ، مركز اسنان"
          />
          <meta
            name="description"
            content="Looking for a skilled and experienced dentist in your area? Consider visiting Dr. Maryam Tamer! With years of experience in the field, Dr. Tamer is dedicated to providing top-notch dental care to patients of all ages. From routine cleanings to complex procedures, she has the expertise to help you achieve a healthy, beautiful smile. Book an appointment with Dr. Maryam Tamer today and experience the highest level of dental care available."
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
