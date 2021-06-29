import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import HomeWrapper from '../components/HomeWrapper'
import Link from 'next/link'
import React, { useState, useEffect,useContext} from 'react';
import Navbar from '../components/Navbar'
import SearchComponent from '../components/SearchComponent'
import styles from '../styles/Home.module.css'
import BmwPartCard from '../components/BmwPartsCard'
import { Context } from "../context/Context";
const Home=(data) =>{

  const [lang, setlang] = useContext(Context);
  const [slider, setslider] = useState(0)
 
  const [thirtSeria, setthirtSeria] = useState([])
  const [fivetSeria, setfiveSeria] = useState([])
  const [sevenSeria, setsevenSeria] = useState([])

const getthirdSeria= async()=>{
  const res = await fetch('https://admin.bmwpartsbaku.az/public/api/products/seriya/1')
  const product= await res.json();
  setthirtSeria(product);

}


const getfivetSeria= async()=>{
  const res = await fetch('https://admin.bmwpartsbaku.az/public/api/products/seriya/3')
  const product= await res.json();

  setfiveSeria(product);
}


const getsevenSeria= async()=>{
  const res = await fetch('https://admin.bmwpartsbaku.az/public/api/products/seriya/4')
  const product= await res.json();

  setsevenSeria(product);
}


  useEffect(() => {
    
    getthirdSeria();
    getfivetSeria();
    getsevenSeria();

 
  }, [])


let nextSlider= data.data.length-1;
  let autoInterval = 0;
  useEffect(() => {
    autoInterval = setInterval(() => {
      slider==nextSlider?setslider(0):setslider(slider+1)
     
    }, 6000);
    return () => clearInterval(autoInterval);
  });

  const [offsetY, setoffsetY] = useState(0)
  const handleScroll=()=>{
    setoffsetY(window.pageYOffset)
  }

useEffect(() => {
 window.addEventListener('scroll',handleScroll);
  return () =>  window.removeEventListener('scroll',handleScroll);
  
}, [])




  return (
   
    <div className={styles.fullBody}>



           <Head>
        <title>BMW Parts Baku</title>
        <meta name="description" content="site by Jedaiteam" />
        <link rel="icon" href="../uploads/bmw.svg" />
      </Head>



      <div className={styles.customHeader}>
    <div className={styles.sliderClick}>

      {data.data.map((ban,index)=>(
  <li key={index} className={slider==index?styles.active:""} 
  onClick={()=>{setslider(index)}}></li>
      ))}
 
    </div>

  {data.data.map((e,index)=>(
 <img  key={index} src={'https://admin.bmwpartsbaku.az/'+e.pc_iage}  
 className={index==slider?styles.activeSlider:styles.deactiveSlider}/>
    ))}
 
     

         <div className={styles.CustomNav}>
         <Navbar />
         </div>
         <div className="custom_wrapper">
           {data.data.map((e,index)=>(
             
             <Link href="/Katalog">
             <a >
             <h1 key={index}
             className={index==slider?styles.title:styles.deactiveTitle}>
               {data.data[slider][`title_${lang}`]}
               </h1>
             </a>
             </Link>
           

           ))}
        <div className={styles.sliderToCatalog}>
          <Link href="/Katalog">
            <a >Kataloq</a>
          </Link>
        </div>
         </div>

         <SearchComponent/>

        
      </div>
      <HomeWrapper/>
 <div className="custom_wrapper">


<div className={styles.homeTitle}>
    <h3>
      <span> <img src="../uploads/bmw.svg" width={60} alt=""/>
      </span>

      <span><span>BMW</span> 3-cü seriya</span>

      <span> <img src="../uploads/bmw.svg" width={60} alt=""/>
      </span>
    </h3>

  
</div>
<div className={styles.katalogParent}>
  {thirtSeria.map((item,index)=>(
   <BmwPartCard data={item} key={index}/>
  ))}
  
</div>
<div className={styles.LinkHome}>
    <Link href={{ pathname: '/search', query: { seriya_id:1 ,category_id:"",kuzov_id:""} }}>
                  <a>Hamsına bax</a>
                  </Link>
    </div>


 </div>



<div className={styles.katalogs}></div>
 <div className="custom_wrapper">

<div className={styles.categories}>
<div className={styles.homeTitle}>
    <h3>
 <span>   <img src="../uploads/bmw.svg" width={60} alt=""/></span>

      <span> <span>BMW</span> 5-ci seriya</span>

<span>  <img src="../uploads/bmw.svg" width={60} alt=""/></span>
    </h3>

</div>
</div>

<div className={styles.katalogParent}>
  {fivetSeria.map((item,index)=>(
    <BmwPartCard data={item} key={index}/>
  ))}
  
</div>

<div className={styles.LinkHome}>
    <Link href={{ pathname: '/search', query: { seriya_id:3 ,category_id:"",kuzov_id:""} }}>
                  <a>Hamsına bax</a>
                  </Link>
    </div>

</div>
<div className={styles.lasbannerParent} >


<div className={styles.lastBanner} style={{backgroundPosition:` ${offsetY*0.011}% center`}}>
<div className={styles.overlay}></div>
 <p>
 BMW İŞLƏNMİŞ EHTİYYAT HİSSƏLƏRİ <br/>
 Whatsapp'la Sifariş Edin
 </p>



   <a href="https://wa.me/+994506100017" className={styles.animeWp}>
   <Image 
                    src="/uploads/whatsapp.svg"
                    alt="contact"
                    height={44}
                    width={44}
                   
                    objectFit="cover"
                  
                />

                <a >(050) 610-00-17</a>
   </a>
   <div>
  {/*    <span>
     <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 0C9.86869 0 0 9.86869 0 22C0 26.1385 1.14992 30.1561 3.33131 33.6448C2.46231 36.6892 0.892692 42.4482 0.875769 42.5082C0.794538 42.8061 0.881692 43.1242 1.10423 43.3383C1.32677 43.5524 1.64831 43.6285 1.94108 43.5388L10.6615 40.8565C14.0775 42.9144 17.9892 44 22 44C34.1313 44 44 34.1313 44 22C44 9.86869 34.1313 0 22 0ZM22 42.3077C18.1762 42.3077 14.4515 41.239 11.2276 39.2184C11.0914 39.1329 10.9348 39.0898 10.7783 39.0898C10.6945 39.0898 10.6108 39.1025 10.5295 39.127L2.915 41.4708C3.47431 39.4291 4.47954 35.7771 5.06254 33.7455C5.13023 33.5102 5.09215 33.2564 4.95931 33.0508C2.82192 29.7618 1.69231 25.9405 1.69231 22C1.69231 10.8028 10.8028 1.69231 22 1.69231C33.1972 1.69231 42.3077 10.8028 42.3077 22C42.3077 33.1972 33.1972 42.3077 22 42.3077Z" fill="white"/>
<path d="M36.3717 27.1853C34.8097 26.318 33.4796 25.4482 32.509 24.8135C31.7678 24.3295 31.2322 23.9801 30.8396 23.7829C29.7421 23.2355 28.9103 23.6222 28.5939 23.942C28.5541 23.9818 28.5186 24.0249 28.4881 24.0706C27.3483 25.7807 25.8599 27.4163 25.4242 27.5043C24.9207 27.4256 22.5642 26.0862 20.222 24.1358C17.8308 22.1431 16.3263 20.235 16.1055 18.9353C17.6396 17.3564 18.1921 16.363 18.1921 15.2325C18.1921 14.0674 15.4742 9.20285 14.9826 8.71124C14.4893 8.21878 13.3783 8.14178 11.6801 8.48024C11.5168 8.51324 11.3662 8.59362 11.2477 8.71124C11.0421 8.91685 6.23086 13.822 8.51717 19.7671C11.0269 26.2918 17.4686 33.8758 25.6814 35.1078C26.6147 35.2475 27.4896 35.3168 28.3087 35.3168C33.1402 35.3168 35.9918 32.8859 36.7948 28.0636C36.8549 27.7108 36.6848 27.3588 36.3717 27.1853ZM25.9327 33.4342C17.2478 32.1319 11.7774 23.5274 10.0969 19.1595C8.43001 14.8272 11.5041 10.9645 12.2758 10.0913C12.9036 9.9847 13.5645 9.93985 13.8403 9.98301C14.4166 10.7843 16.4118 14.5539 16.4998 15.2325C16.4998 15.6768 16.3551 16.2953 14.6323 18.0189C14.4732 18.1772 14.3844 18.3921 14.3844 18.6172C14.3844 23.0476 23.7293 29.1941 25.3844 29.1941C26.8237 29.1941 28.7005 26.7749 29.7692 25.1985C29.8309 25.2011 29.935 25.2222 30.0831 25.2967C30.3877 25.4499 30.9157 25.7942 31.5833 26.2309C32.465 26.8071 33.6361 27.572 35.0187 28.3649C34.3909 31.3856 32.6359 34.4411 25.9327 33.4342Z" fill="white"/>
</svg>

     </span> */}
   </div>
</div>


<div className="custom_wrapper">
<div className={styles.homeTitle} >
    <h3>
      <span> <img src="../uploads/bmw.svg" width={60} alt=""/>
      </span>

      <span><span>BMW</span> 7-ci seriya</span>

      <span> <img src="../uploads/bmw.svg" width={60} alt=""/>
      </span>
    </h3>

  
</div>

<div className={styles.katalogParent}>
  {sevenSeria.map((item,index)=>(
    <BmwPartCard data={item} key={index}/>
  ))}
  
</div>
<div className={styles.LinkHome}>
    <Link href={{ pathname: '/search', query: { seriya_id:4 ,category_id:"",kuzov_id:""} }}>
                  <a>Hamsına bax</a>
                  </Link>
    </div>
</div>
</div>
    <Footer/>
    </div>

   
  )
}


export const getServerSideProps = async () => {
  const res = await fetch('https://admin.bmwpartsbaku.az/api/slider')
  const data  = await res.json()

  return {
    props: {
      data,
    },
  }
}
export default Home