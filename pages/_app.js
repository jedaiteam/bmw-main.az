import "antd/dist/antd.css";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import React, { useEffect, useState } from "react";
import { Context } from "../context/Context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  });
  const [search, setsearch] = useState(false);
  const [context, setContext] = useState("az");

  useEffect(() => {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-56ND7NW");
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <Context.Provider value={[context, setContext]}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-56ND7NW"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Component {...pageProps} />
      </Context.Provider>
    </>
  );
}

export default MyApp;
