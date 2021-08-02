import React, { useState , useEffect,useContext} from 'react';
import BmwPartsCard from './BmwPartsCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Style from '../styles/DetailBody.module.css'
import { Context } from "../context/Context";
const DetailBody = ({data}) => {
    const [context, setContext] = useContext(Context);
    const [lang, setlang] = useContext(Context);

const [slider, setSlider] = useState(null)
const [sliderIndex, setSliderIndex] = useState(1)
const [customdata, setcustomdata] = useState(null)
const [zoom, setzoom] = useState( {objectPosition: 'center'} )
const status={
    status_good_az:'Əla',
    status_good_ru:'Идеальное',
    status_normal_ru:'Хорошее',
    status_normal_az:'Yaxşı',
    status_bad_az:'Kafi',
    status_bad_ru:'Среднее',
}
/* async function Mydata(){

}
 */
useEffect(() => {
setSlider(`https://admin.bmwpartsbaku.az/${data.mainimage}`)
}, [data])


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
      breakpoint: { max: 1280, min: 925 },
      items: 3
    },
    bigMobile: {
      breakpoint: { max: 925, min: 635 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 635, min: 0 },
      items: 1
    }
  };
  var startX,movingX;
  function handleTouchStart(event){
    startX=event.touches[0].clientX;
  }
  function handleTouchMove(event){
    movingX=event.touches[0].clientX
  }
  function handleTouchEnd(){
if(data.images.length>0){
  if (startX+100<movingX) {
    if (sliderIndex==0) {
      setSliderIndex(data.images.length-1);
     
      setSlider(`http://admin.bmwpartsbaku.az/${data.images[sliderIndex].title}`); 
     }else{
      setSliderIndex(sliderIndex-1);
     
    
      setSlider(`http://admin.bmwpartsbaku.az/${data.images[sliderIndex].title}`); 
     }
  }
  else if(startX+100>movingX){
 if (data.images.length<=sliderIndex+1) {
  setSliderIndex(0);
  console.log(sliderIndex);
  setSlider(`http://admin.bmwpartsbaku.az/${data.images[sliderIndex].title}`); 
 }else{
  setSliderIndex(sliderIndex+1);
  console.log(sliderIndex);
  setSlider(`http://admin.bmwpartsbaku.az/${data.images[sliderIndex].title}`); 
 }
  

  }
}
  }
   const handleZoom =e=>{
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left)
    const y = (e.screenY - top - 100) 
    // console.log(x)
    // console.log("TOP " , top)
    // console.log("Screen Y " , e.screenY)
    // console.log("Client Y " , e.screenY)
    // console.log("Y " , y)
    setzoom({ transform: `translate(${-(x/2)}px , ${-(y/2)}px)`, width:"1000px" , height:"1000px" });
    // console.log("x " , x)
    // console.log("y " , y)
  }


    return (
        <div className='custom_wrapper'>
          <div className={Style.parentElement}>
            <div className={Style.slider}>
                <div className={Style.imgWrapper} >
                  <img
                  onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
                  onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
                  onTouchEnd={() => handleTouchEnd()}
                  onMouseMove={handleZoom}
                  onMouseOut={(e)=>{  const { left, top, width, height } = e.target.getBoundingClientRect()
                  const x = 0
                  const y = 0
                  setzoom({ transform: `translate(${0}%, ${0}%) scale(1)` ,transition:'0.5s'});}}
                  src={slider} style={zoom}  
                 alt={data.title_az} />
                </div>

                <ul>
                     {data.images.map((item,index)=>(
                    <li className={Style.desktopCarousel} key={index} onClick={()=>{setSlider(`http://admin.bmwpartsbaku.az/${item.title}`)}}>
                        <img alt={data.title_az} src={`http://admin.bmwpartsbaku.az/${item.title}`} />
                   </li>
                    ))} 
               
                </ul>

            </div>
            <div className={Style.content}>
    {/*           <h1>{data[`title_${context}`]}</h1> */}
                     <h1><span>{data.price}</span>
                    <span><svg width="30" height="24" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3843 11.2968V28.1679C18.3843 29.6167 19.5588 30.7911 21.0074 30.7911C22.456 30.7911 23.6305 29.6167 23.6305 28.1679V11.3447C32.205 12.8574 36.7461 21.6551 36.7461 28.1678C36.7461 29.6166 37.9206 30.7909 39.3692 30.7909C40.8179 30.7909 41.9924 29.6166 41.9924 28.1678C41.9924 17.9773 34.7278 7.46921 23.6305 6.03994V3.24812C23.6305 1.79934 22.456 0.625 21.0074 0.625C19.5588 0.625 18.3843 1.79934 18.3843 3.24812V6.01076C6.81175 7.24707 0.0224609 17.1674 0.0224609 28.1678C0.0224609 29.6166 1.19696 30.7909 2.64558 30.7909C4.0942 30.7909 5.2687 29.6166 5.2687 28.1678C5.2687 22.7084 8.08888 12.7464 18.3843 11.2968Z" fill="#F60100"/>
                </svg>
                </span>
                </h1>

                <div className={Style.category}>
                    <div>
                        <h4>{lang === 'az' ?"BMW seriya nömrəsi": "Серийный номер BMW"}: {data[`seriya_title_${context}`][0]}</h4>
                        <h4>Kuza nömrəsi: {data[`kuzov_title`]}</h4>
                    </div>
                    <div>
                        <h4>{lang === 'az' ?"Kateqoriya": "Категория"}: {data[`category_${context}`]}</h4>
                        <h4>{lang === 'az' ?"Vəziyyəti": "Cостояние"}: <span style={{color: data.status=='ugly'? '#F60100':data.status=='bad'?'#FFAD36':'#32BF00'}}>{data.status=='ugly'?status[`status_bad_${context}`]:data.status=='bad'?status[`status_normal_${context}`]:status[`status_good_${context}`]}</span></h4>
                    </div>
                </div>

                <div className={Style.text}>
                    <p>{data[`desc_${context}`]}</p>
                </div>
                <div className={Style.contact}>
                    <div><a href="https://wa.me/+994506100017"> <img src="../uploads/whatsapp.svg" alt="" width="27"/>{lang === 'az' ?"  WhatsApp-la sifariş": "Заказать через WhatsApp"}</a></div>
                    <div><a href="tel:+994506100017"> <img src="../uploads/Call.svg" alt=""/> {lang === 'az' ?"Zəng et": "Вызов"}</a></div>
                </div>
            </div>
          </div>
        <div className={Style.relationData} >
          <h1>{lang === 'az' ?"Digər BMW ehtiyyat hissələri": "Похожие продукты"}</h1>
        <Carousel responsive={responsive}>
            {data.related.map((data,index)=>(
              <div key={index}><BmwPartsCard  data={data}/></div>
            ))}
                    
                 
                    </Carousel>
        </div>
       
        </div>
    )
}

export default DetailBody
