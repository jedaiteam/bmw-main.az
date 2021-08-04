import React from 'react'
import BmwPartsCard from '../components/BmwPartsCard'
import BodyBanner from '../components/BodyBanner'
import Layout from '../components/Layout'
import Head from 'next/head'
const Katalog = () => {
    return (
      <Layout >
        <Head>
        <title>BMW üçün ehtiyat Hissələri</title>
        <meta name="description" content="BMW ehtiyyat hissələri"/>
        <link rel="icon" href="../uploads/bmw.svg" />
      </Head>
       <BodyBanner type={'katalog'}/>

      </Layout>
    )
}

export default Katalog
