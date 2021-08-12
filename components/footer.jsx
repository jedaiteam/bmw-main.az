import React, {useEffect, useState ,useContext} from 'react'
import Style from '../styles/Footer.module.css'
import Link from 'next/link'
import { Context } from "../context/Context";


const Footer = () => {
    const [toTop, setToTop] = useState(false);
  const [lang, setlang] = useContext(Context);


    const customScrol = () => {
        if (typeof window !== 'undefined') {

       

            if(window.pageYOffset>400){
                setToTop(true)
               }
               else{
                   setToTop(false)
               }
        }
       
    }
    const scrollTop = ()=>{
   
            window.scrollTo({top:0,behavior:"smooth"})
        
    }
    useEffect(() => {
        window.addEventListener('scroll', customScrol);
        return () => window.removeEventListener('scroll', customScrol);
      });

    return (
        <div className={Style.footerArea}>
         { toTop&& <div className={Style.ScrollToTop} onClick={scrollTop}>   </div>}  
              <div className={Style.footerWp}>
               <a href="https://wa.me/+994506100017" target="_blank"> <img src="/uploads/whatsapp.svg" alt="" width={25}/></a>  
              </div>
          
            <div className={Style.footerFirstLine}>
                <li>
                <Link href="/">
                <a> {lang === 'az' ? "Əsas səhifə": "Главная"}</a>
                </Link>
                </li>
                <li>
                <Link href="/kataloq">
                <a> {lang === 'az' ? "Kataloq": "Каталог"}</a>
                </Link>
                </li>
                <li>
                <Link href="/avtomobiller">
                <a>{lang === 'az' ? "Avtomobillər": "Автомобили"}</a>
                </Link>
                </li>
            
                <li>
                <Link href="/contact">
                <a>{lang === 'az' ? "Əlaqə": "Контакт"}</a>
                </Link>
                </li>
                
            </div>




            <ul className={Style.footerFirstLine}>
                <li>
                <img src="../uploads/whatsapp.svg" alt="" width="19"/>  <a href="tel:+994 50 308 28 53">+994 50 308 28 53 </a> 
                </li>
                <li>
                <img src="../uploads/Call.svg" alt="" width="19"/>  <a href="tel:+994 55 771 12 25">+994 55 771 12 25</a> 
                </li>
                <li>
                <img src="../uploads/Call.svg" alt="" width="19"/> <a href="tel:+994 50 610 00 17">+994 50 610 00 17</a>
                </li>
                <li>
                <img src="../uploads/Call.svg" alt="" width="19"/> <a href="tel:+994 77 251 55 55">+994 77 251 55 55</a>
                </li>
                <li>
          <img src="../uploads/Location.svg" alt=""/> <span>{lang === 'az' ?" Bakı şəh., Babək prs. 74": "Город Баку, проспект Бабека. 74"}</span> 
                </li>
            </ul>
            <p><span>© 2021 {lang === 'az' ? "BMW Parts Baku. Müəllif Hüquqları Qorunur": "BMW Parts Baku. Все права защищены"}.</span>
           <a href="https://jedai.az/az/saytlarin-hazirlanmasi" target="_blank"><span>Site by  <img src="/uploads/jedai.png" style={{marginLeft:"10px"}} alt="" /></span></a> 
            </p>
        </div>
    )
}

export default Footer
