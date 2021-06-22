import '../styles/globals.css'
import React, { useState } from "react";
import { Context,SearchContext } from "../context/Context";
import 'antd/dist/antd.css';
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

function MyApp({ Component, pageProps }) {


  Router.events.on('routeChangeStart',(url) => {
   
    NProgress.start()
    
  });
  Router.events.on('routeChangeComplete',(url) => {
   
    NProgress.done()
    
  });
  const [search, setsearch] = useState(false)
  const [context, setContext] = useState("az");


  return (
<>
<Head>
<link rel="stylesheet" 
href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" 
integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
 crossorigin="anonymous" referrerpolicy="no-referrer" />
</Head>

<Context.Provider value={[context, setContext]}>
  <Component {...pageProps} />
  </Context.Provider>

</>
  )

}

export default MyApp
