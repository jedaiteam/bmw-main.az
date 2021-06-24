import React from 'react'
import BodyImage from '../components/BodyImage'
import HowToBuy from '../components/HowToBuy'
import Layout from '../components/Layout'
import Head from 'next/head'
const NeceAlmaq = () => {
    return (
        <Layout>
                                <Head>
        <title>Necə almaq olar</title>
        <link rel="icon" href="../uploads/bmw.svg" />
      </Head>
             <BodyImage title="Necə almaq olar?"/>
             <HowToBuy/>
        </Layout>
    )
}

export default NeceAlmaq
