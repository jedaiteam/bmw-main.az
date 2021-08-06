import React from 'react'
import BmwPartsCard from '../components/BmwPartsCard'
import BodyBanner from '../components/BodyBanner'
import Layout from '../components/Layout'
import Head from 'next/head'
const Katalog = () => {
    return (
      <Layout >
        <Head>
        <title>BMW ehtiyat hisseleri Baku. BMW oluxanasi. BMW  hisseleri. </title>
        <meta name="description" content="BMW olluxanasi. Orijinal bmw ehtiyat hisseleri Baku. Ən keyfiyyətli ehtiyat hissələri satışı. Bmw oluxana. Ehtiyat hissələrinin geniş çeşidi ilə saytda tanış olun. "/>
        <link rel="icon" href="../uploads/bmw.svg" />
      </Head>
       <BodyBanner type={'katalog'}/>

      </Layout>
    )
}

export default Katalog
