import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'; // Importa el componente Script

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Otros elementos en el <head>, si necesitas */}
      </Head>
      <body>
        {/* Utiliza el componente Script para manejar la carga de Google Tag Manager */}
        <Script 
          strategy="afterInteractive" 
          id="gtm-script" // Añade un ID único al script
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WRCK65N7');
          `}
        </Script>
        {/* Noscript tag para Google Tag Manager */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WRCK65N7"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
