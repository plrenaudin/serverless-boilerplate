import "isomorphic-unfetch";
import App from "next/app";
import Head from "next/head";
import Navigation from "../components/Navigation";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navigation />
        <Component {...pageProps} />
      </>
    );
  }
}
