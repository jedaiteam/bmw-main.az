import React from 'react'
import Style from '../styles/BodyBanner.module.css'
import Link from 'next/link'
const BodyImage = ({title,seria}) => {
    return (
        <div>
          <div className={Style.bkEffect}>
                <ul className={Style.quickLink}>
                    <li>
                    <Link href="/">
                    <a>Əsas səhifə</a>
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

    <p className={Style.text}>{title}</p>

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
