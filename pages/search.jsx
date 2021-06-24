import React from 'react'
import BmwPartsCard from '../components/BmwPartsCard'
import BodyBanner from '../components/BodyBanner'
import Layout from '../components/Layout'
import Head from 'next/head'

const search = () => {
    return (
        <Layout>
           <Head>
        <title>Kataloq</title>
        <link rel="icon" href="../uploads/bmw.svg" />
      </Head>
        <BodyBanner/>
 
        <div className='custom_wrapper'>
          
        </div>
       </Layout>
    )
}

export default search
