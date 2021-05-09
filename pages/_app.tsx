import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../Components/Nav";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
