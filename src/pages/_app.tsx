import '../styles/global.css';

import type { AppProps } from 'next/app';
import Script from 'next/script';
// import NextNProgress from 'nextjs-progressbar';
import { RecoilRoot } from 'recoil';
//      <NextNProgress color='rgb(147 51 234)' />
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        crossOrigin='anonymous'
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5476404733919333'
      />

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
export default MyApp;
