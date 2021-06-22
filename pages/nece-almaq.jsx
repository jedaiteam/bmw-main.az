import React from 'react'
import BodyImage from '../components/BodyImage'
import HowToBuy from '../components/HowToBuy'
import Layout from '../components/Layout'
import Head from 'next/head'
const NeceAlmaq = () => {
    return (
        <Layout>
                                <Head>
        <title>Kataloq</title>
     
      </Head>
             <BodyImage title="Necə almaq olar?"/>
             <HowToBuy/>
        </Layout>
    )
}

export default NeceAlmaq
