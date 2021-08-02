import React, {useContext} from 'react'
import Style from '../styles/BodyBanner.module.css'
import Link from 'next/link'
import { Context } from "../context/Context";


const BodyImage = ({title,seria}) => {
    const [lang, setlang] = useContext(Context);

    return (
        <div>
          <div className={Style.bkEffect}>
                <ul className={Style.quickLink}>
                    <li>
                    <Link href="/">
                    <a>{lang === "az" ? "Əsas səhifə" : "Главная страница"}</a>
                    </Link>
                    </li>
                    { seria&&    
   <>
                           <li>|</li>
    <li> <Link href={{ pathname: '/search',  query: { seriya_id:seria[0]==7?4:seria[0]==5?3:1 ,category_id:"",kuzov_id:""} }}>
    <a>{seria}</a>
                    </Link></li>
   </>
                    
                    }

                    <li>|</li>
                    <li>
    <span>{title}</span>
                    </li>
                </ul>
           
                <div className={Style.headerTitle}>
                <h3>
                <span>
                <img src="../uploads/bmw.svg" width={60} alt=""/>
                </span>

    <h1 className={Style.text}>{title}</h1>

                <span>
                <img src="../uploads/bmw.svg" width={60} alt=""/>
                </span>
                </h3>
                </div>
            </div>
    
        </div>
    )
}

export default BodyImage
