import { AppProps } from "next/app";
import "../styles/styles.css";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lynx</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
