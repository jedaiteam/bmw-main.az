import React ,{useContext} from 'react'
import Style from '../styles/BmwPartsCard.module.css'
import Link from 'next/link'
import { Context } from "../context/Context";
const BmwPartsCard = ({data}) => {
    const [lang, setlang] = useContext(Context);

   
    return (
        <Link href={`/product-detail/${data.id}`}>
        <a className={Style.links}> 
        <div className={Style.partCards} >
        <div style={{background:`url(https://admin.bmwpartsbaku.az//${data.mainimage})`}}>
            
        </div>
                     <div>
                <p>{data[`title_${lang}`]}</p>
                <p className={Style.mustBorder}>{data.price} ₼</p>
                    </div>   
        </div>
        </a>
                </Link>
    )
}

export default BmwPartsCard
