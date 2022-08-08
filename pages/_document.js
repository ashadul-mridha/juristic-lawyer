import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://unpkg.com/react/umd/react.production.min.js" strategy="lazyOnload" />
        <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" strategy="lazyOnload" />
        <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" strategy="lazyOnload" />
      </body>
    </Html>
  )
}