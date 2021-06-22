import React, { useState ,useContext} from 'react';
import BmwPartsCard from './BmwPartsCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Style from '../styles/DetailBody.module.css'
import { Context } from "../context/Context";
const DetailBody = ({data}) => {
    const [context, setContext] = useContext(Context);
const [slider, setSlider] = useState(`https://admin.bmwpartsbaku.az/${data.mainimage}`)
const [customdata, setcustomdata] = useState(null)
const status={
    status_good_az:'Əla',
    status_good_ru:'отлично',
    status_normal_ru:'хорошо',
    status_normal_az:'Yaxşı',
    status_bad_az:'Kafi',
    status_bad_ru:'достаточно',
}
/* async function Mydata(){

}
useEffect(() => {
 
}, []) */
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    return (
        <div className='custom_wrapper'>
          <div className={Style.parentElement}>
            <div className={Style.slider}>
                <div>
                <img src={slider}
                 alt="" />
            
     
                </div>

                <ul>
                     {data.images.map((item,index)=>(
                    <li className={Style.desktopCarousel} key={index} onClick={()=>{setSlider(`http://admin.bmwpartsbaku.az/${item.title}`)}}>
                        <img src={`http://admin.bmwpartsbaku.az/${item.title}`} alt=""/>
                   </li>
                    ))} 
               
                </ul>

            </div>
            <div className={Style.content}>
              <h1>{data[`title_${context}`]}</h1>
                     <h1><span>{data.price}</span>
                    <span><svg width="30" height="24" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3843 11.2968V28.1679C18.3843 29.6167 19.5588 30.7911 21.0074 30.7911C22.456 30.7911 23.6305 29.6167 23.6305 28.1679V11.3447C32.205 12.8574 36.7461 21.6551 36.7461 28.1678C36.7461 29.6166 37.9206 30.7909 39.3692 30.7909C40.8179 30.7909 41.9924 29.6166 41.9924 28.1678C41.9924 17.9773 34.7278 7.46921 23.6305 6.03994V3.24812C23.6305 1.79934 22.456 0.625 21.0074 0.625C19.5588 0.625 18.3843 1.79934 18.3843 3.24812V6.01076C6.81175 7.24707 0.0224609 17.1674 0.0224609 28.1678C0.0224609 29.6166 1.19696 30.7909 2.64558 30.7909C4.0942 30.7909 5.2687 29.6166 5.2687 28.1678C5.2687 22.7084 8.08888 12.7464 18.3843 11.2968Z" fill="#F60100"/>
                </svg>
                </span>
                </h1>

                <div className={Style.category}>
                    <div>
                        <h4>Seriya nömrəsi: {data[`seriya_title_${context}`][0]}</h4>
                        <h4>Kuza nömrəsi: {data[`kuzov_title`]}</h4>
                    </div>
                    <div>
                        <h4>Kateqoriya: {data[`category_${context}`]}</h4>
                        <h4>Vəziyyəti: <span style={{color: data.status=='ugly'? '#F60100':data.status=='bad'?'#FFAD36':'#32BF00'}}>{data.status=='ugly'?status[`status_bad_${context}`]:data.status=='bad'?status[`status_normal_${context}`]:status[`status_good_${context}`]}</span></h4>
                    </div>
                </div>

                <div className={Style.text}>
                    <p>{data[`desc_${context}`]}</p>
                </div>
                <div className={Style.contact}>
                    <div><a href="https://wa.me/+994506100017"> <img src="../uploads/whatsapp.svg" alt="" width="27"/>  WhatsApp-la sifariş</a></div>
                    <div><a href="tel:+994506100017"> <img src="../uploads/call.svg" alt=""/> Zəng et</a></div>
                </div>
            </div>
          </div>
        <div className={Style.relationData} >
          <h1>Oxşar Məhsullar</h1>
        <Carousel responsive={responsive}>
            {data.related.map((data,index)=>(
              <div><BmwPartsCard key={index} data={data}/></div>
            ))}
                    
                 
                    </Carousel>
        </div>
       
        </div>
    )
}

export default DetailBody
