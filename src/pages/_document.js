import Document, { Html, Head, Main, NextScript } from "next/document";

import { FaWhatsapp } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || "ar" };
  }

  render() {
    console.log(this.props.locale)

    const buttonStyle = {
      position: 'fixed',
      bottom: '70px',
      right: '20px',
      padding: '15px', // Increased padding for larger buttons
      backgroundColor: '#25d366',
      color: 'white',
      border: 'none',
      borderRadius: '50%', // Rounded shape
      cursor: 'pointer',
      outline: 'none',
      fontSize: '28px', // Increased font size for larger buttons
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
      zIndex:'9999'
    };
    return (
      <Html 
      lang={this.props.locale}>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="keywords" content="دكتور اسنان، طبيب اسنان، مركز اسنان، عيادة اسنان، دكتورة مريم تامر، افضل عيادة لطب الاسنان، دكتور اسنان قريب منى، دكتورة اسنان، علاج الاسنان، زراعة الاسنان، فينيرز، تقويم، حشو الاسنان، تجميل اسنان" />

          <meta name="description" content="ابحث عن أفضل خدمات طب الأسنان مع الدكتورة مريم تامر. خبرتها وتفانيها في تقديم الوقاية والعلاج الترميمي والجمالي تضمن لك صحة فم وأسنان مثالية. اعتمد على الخبرة والجودة معنا." />

<meta property="og:title" content="عيادة دكتورة مريم تامر لطب الأسنان - أفضل خدمات العناية بصحة الفم والأسنان" />
<meta property="og:type" content="Dentist.Medical" />
<meta property="og:url" content="https://www.drmaryamtamer.com" /> 
          <meta property="og:image" content="https://i.ibb.co/Km8LFr0/case3.jpg" />

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
      
          <meta name="google-site-verification" content="KVBmKEI1uEVRySQHHK8Rtsw-Vl0qjA_TApidKSiN0d4" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5VQNZWTD');
              `,
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
 <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-5VQNZWTD`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <a
      className="whatsapp"
        style={{ ...buttonStyle, backgroundColor: '#25d366' }}
        href="https://wa.me/201095125220"
      >
        <FaWhatsapp   className="whatsapp"/>
      </a>
      
      
      <a
      className="call"
        style={{ ...buttonStyle, backgroundColor: '#007bff',bottom:'150px' }}
        href="tel:00201095125220"
      >
          <FiPhoneCall  className="call" />
      </a>    
        </body>
      </Html>
    );
  }
}

export default MyDocument;
