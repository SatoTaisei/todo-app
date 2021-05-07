import Head from "next/head";
import { React } from "react";
import "src/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TODOリスト</title>
        <meta name="description" content="Let's start TODO-App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
