import React, { useState ,useEffect, useContext} from 'react'
import BodyImage from '../components/BodyImage'
import Car from '../components/Car'
import Layout from '../components/Layout'
import Style from '../styles/Car.module.css'
import { Modal, Button } from 'antd';
import moment from 'moment'
import Head from 'next/head'
import { Context } from "../context/Context";

const Cars = (cars) => {
  const [lang, setlang] = useContext(Context);

  const [visible, setVisible] = useState(false);
  const [data, setdata] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [imagesIndex, setimagesIndex] = useState(0);
 const getData = async()=>{
  const res = await fetch('https://admin.bmwpartsbaku.az/public/api/car')
  const cars= await res.json();

 setdata(cars);
 }

  useEffect( ()=>{

    getData()
   
 
  },[])
    
  
    return (
      
    <Layout>
      <Head>
        <title>Avtomobillər</title>
        <meta name="description" content="Bmw üçün ehtiyat hissələri" />
        <link rel="icon" href="../uploads/bmw.svg" />
      </Head>
   <BodyImage title={lang === 'az' ? "Avtomobillər": "Aвтомобили"}/>
<div className="custom_wrapper">

{data.length<1 && <div className={Style.spinnerParent}>
<div className={Style.spinner}></div>
</div>}

<div className={Style.parentelement}>

<Modal
     /*    title="Modal 1000px width" */
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => {setVisible(false);setimagesIndex(0)}}
        width={1000}
        footer={null}
      >
        	
      {data[modalIndex]?.images?.length > 1 && <span className={Style.icons,Style.prev} 
       onClick={()=>{0>=imagesIndex?setimagesIndex(data[modalIndex].images.length-1): setimagesIndex(imagesIndex-1)}}
       >
         
         <svg width="20" height="45" viewBox="0 0 20 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.584 42.5476L2.41732 22.4516L17.584 2.35547" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
       
       </span> }


   { 
      data.length>0 &&  
      <img alt='avtomobillər' className={Style.img__custom} src={"https://admin.bmwpartsbaku.az/"+data[modalIndex].images[imagesIndex].name} alt="" width="100%" height="500px" style={{objectFit:"cover"}}/> 
   }
       
       {data[modalIndex]?.images?.length > 1 &&   <span className={Style.icons} onClick={()=>{data[modalIndex].images.length<=imagesIndex+1?setimagesIndex(0): setimagesIndex(imagesIndex+1)}}>
        <svg width="20" height="44" viewBox="0 0 20 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.41602 1.58463L17.5827 22.0013L2.41602 42.418" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </span>}

{ data.length>0 &&
  <> 
          <div className={Style.modalFooter}>
            
          <h3>
            {  data[modalIndex].model}
          </h3>
          <div className={Style.footerArea}>
         <div>
<p> {lang === 'az' ? "Kuza nömrəsi": "Номер куза"}: {data[modalIndex].kuzov}</p>
          <p>{lang === 'az' ? "İli": "Год"}: {data[modalIndex].year}</p>
         </div>
            <div>

            <p>{lang === 'az' ? "Alınma tarixi": "Дата покупки"}: {moment(data[modalIndex].purchase_date).format('LL') } </p>
                <p>{lang === 'az' ? "Hansı ölkədən gətirilib": "Страна импорта"}: {data[modalIndex].country}</p>
            </div>
          </div>
    
       
       
        </div></>
}
      </Modal>

  {data.map((item,index)=>(<Car key={item.id} kuza={item}  setModalIndex={setModalIndex} index={index} setvis={setVisible}  /> ))} 
</div>
</div >
    </Layout>
    )
}


export default Cars
