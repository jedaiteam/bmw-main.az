import React,{useState} from 'react'
import Head from 'next/head'
import BodyImage from '../../components/BodyImage'
import DetailBody from '../../components/DetailBody'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
const Detail = ({data}) => {
  const router = useRouter()
const [state, setstate] = useState(router.id)
    return (
      <Layout>
                                       <Head>
        <title>{data.title_az}</title>
     
      </Head>
          <BodyImage title={data.title_az}/>
            <DetailBody data={data}/>
      </Layout>

    )
}
export const getServerSideProps = async ({params:{id}}) => {
 
  const res = await fetch(`https://admin.bmwpartsbaku.az/public/api/products/${id}`)
  const data  = await res.json()

  return {
    props: {
      data,
    },
  }
}
export default Detail
