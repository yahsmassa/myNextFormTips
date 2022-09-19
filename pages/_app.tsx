import { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
