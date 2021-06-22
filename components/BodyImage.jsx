import React from 'react'
import Style from '../styles/BodyBanner.module.css'
import Link from 'next/link'
const BodyImage = ({title}) => {
    return (
        <div>
          <div className={Style.bkEffect}>
                <ul className={Style.quickLink}>
                    <li>
                    <Link href="/">
                    <a>Əsas səhifə</a>
                    </Link>
                    </li>
                    <li>|</li>
                    <li>
    <span>{title}</span>
                    </li>
                </ul>
           
                <div className={Style.headerTitle}>
                <h3>
                <span><svg width="65" height="31" viewBox="0 0 65 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 31H33L16 0H0L16 31Z" fill="#017BEA"/>
                <path d="M32 31H49L32 0H16L32 31Z" fill="#512DAB"/>
                <path d="M48 31H65L48 0H32L48 31Z" fill="#F60100"/>
                </svg>
                </span>

    <p className={Style.text}>{title}</p>

                <span><svg width="65" height="31" viewBox="0 0 65 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H33L16 31H0L16 0Z" fill="#017BEA"/>
                <path d="M32 0H49L32 31H16L32 0Z" fill="#512DAB"/>
                <path d="M48 0H65L48 31H32L48 0Z" fill="#F60100"/>
                </svg>
                </span>
                </h3>
                </div>
            </div>
    
        </div>
    )
}

export default BodyImage
