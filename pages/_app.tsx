import "../styles/globals.css";
import type { AppProps } from "next/app";
import Top from "./src/component/Top";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Top />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
