import React, {useEffect, useState} from 'react'
import Style from '../styles/Footer.module.css'
import Link from 'next/link'
const Footer = () => {
    const [toTop, setToTop] = useState(false);
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
              
          
            <div className={Style.footerFirstLine}>
                <li>
                <Link href="/">
                <a>Əsas səhifə</a>
                </Link>
                </li>
                <li>
                <Link href="/Katalog">
                <a>Kataloq</a>
                </Link>
                </li>
                <li>
                <Link href="/avtomobiller">
                <a>Avtomobillər</a>
                </Link>
                </li>
                <li>
                <Link href="/nece-almaq">
                <a>Necə almaq</a>
                </Link>
                </li>
                <li>
                <Link href="/contact">
                <a>Əlaqə</a>
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
          <img src="../uploads/Location.svg" alt=""/> <span>Bakı şəh., Babək prs. 74</span> 
                </li>
            </ul>
            <p><span>© Bmwpartsbaku.az. Müəllif Hüquqları Qorunur.</span>
           <a href="https://jedai.az/az" target="_blank"><span>Site by  <img src="/uploads/jedai.png" style={{marginLeft:"10px"}} alt="" /></span></a> 
            </p>
        </div>
    )
}

export default Footer
