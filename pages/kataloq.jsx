import React from 'react'
import BmwPartsCard from '../components/BmwPartsCard'
import BodyBanner from '../components/BodyBanner'
import Layout from '../components/Layout'
import Head from 'next/head'
const Kataloq = () => {
    return (
      <Layout >
        <Head>
          <title>bmw oluxanasi, bmw oluxana, bmw ehtiyat hisseleri Baku</title>
          <meta name="description" content="BMW olluxanasi. Orijinal bmw ehtiyat hisseleri Baku. Ən keyfiyyətli ehtiyat hissələri satışı. Bmw oluxana. Ehtiyat hissələrinin geniş çeşidi ilə saytda tanış olun. "/>
          <link rel="icon" href="../uploads/bmw.svg" />
          <meta name="keywords" content="bmw oluxanasi, bmw oluxana, bmw ehtiyat hisseleri Baku"/>
        </Head>
       <BodyBanner type={'kataloq'}/>

      </Layout>
    )
}

export default Kataloq
