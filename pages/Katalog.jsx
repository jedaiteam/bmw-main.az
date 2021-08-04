import React from 'react'
import BmwPartsCard from '../components/BmwPartsCard'
import BodyBanner from '../components/BodyBanner'
import Layout from '../components/Layout'
import Head from 'next/head'
const katalog = () => {
    return (
      <Layout>
        <Head>
        <title>BMW üçün ehtiyat Hissələri</title>
        <meta name="description" content="BMW ehtiyyat hissələri"/>
        <link rel="icon" href="../uploads/bmw.svg" />
      </Head>
       <BodyBanner />

   
      </Layout>
    )
}

export default Katalog
