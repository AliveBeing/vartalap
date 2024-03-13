import { StateProvider } from "@/context/StateContext.jsx";
import reducer, { intialState } from "@/context/StateReducers.js";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
      <StateProvider intialState={intialState} reducer={reducer}>
        <Head>
          <title>Vartalap</title>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </StateProvider>
  );
}
