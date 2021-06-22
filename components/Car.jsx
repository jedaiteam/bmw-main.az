import React ,{useContext} from 'react'
import Style from '../styles/Car.module.css'
import Image from 'next/image'
import moment from 'moment'
import { Context } from "../context/Context";

const Car = ({kuza,setvis,setModalIndex, index}) => {
   
    const [lang, setlang] = useContext(Context);
    moment.locale(lang)
    function image(){
        return  `https://admin.bmwpartsbaku.az/public/${kuza.mainimage}`
    }
    return (
  <>
            <div onClick={()=>{setvis(true),setModalIndex(index)}}>
            <div className={Style.imageCars}>
            <img 
                    src={`https://admin.bmwpartsbaku.az/public/${kuza.mainimage}`}
                    alt="Picture of the author"
                    height='201'
                    width= "350.35"
                   style={{ objectFit:"cover", borderRadius:"4px 4px 0 0"}}
                   
                  
                />
            </div>


            <div className={Style.content}>
          <h3>{kuza.model}</h3>
             {/*    <p>Kuza nömrəsi:  {kuza.model}</p> */}
                <p>{kuza.year}</p>
            {/*     <p>Alınma tarixi: {moment(kuza.purchase_date).format('LL') } </p>
                <p>Hansı ölkədən gətirilib: {kuza.country}</p> */}



            </div>

           </div>

   
           
     </> 
    )
}

export default Car
