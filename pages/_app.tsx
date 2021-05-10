import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../Components/Nav";
import { ReactElement } from "react";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
