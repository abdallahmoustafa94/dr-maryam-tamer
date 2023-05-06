import { Script } from 'next/script';
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
            content="HTML5 Template Vie onepage themeforest"
          />
          <meta
            name="description"
            content="Vie - Onepage Multi-Purpose HTML5 Template"
          />
          <meta name="author" content="" />
//           <link rel="shortcut icon" href="/img/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-THZXR2W"
        strategy="afterInteractive"
      />
        </Head>

        <body>
          <Main />
          <NextScript />
<noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-THZXR2W"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
