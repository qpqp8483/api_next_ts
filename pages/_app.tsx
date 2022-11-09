import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import type { AppProps } from "next/app";
import Top from "../src/component/Top";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div style={{ width: 1000, margin: "0 auto" }}>
        <Top />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
