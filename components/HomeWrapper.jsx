import React, { useState, useEffect,useContext} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Style from '../styles/HomeWrapper.module.css'
import { Context } from "../context/Context";
const HomeWrapper = () => {
    const [lang, setlang] = useContext(Context);
    const [allSeria, setallSeria] = useState([]);
    const [anime, setanime] = useState();
    const getSeria= async()=>{
        const res = await fetch('https://admin.bmwpartsbaku.az/public/api/seriya')
        const product= await res.json();
      
        setallSeria(product);
      }
    useEffect(() => {
        getSeria();
      }, [])
   
      const customScrol = () => {
          if (typeof window !== 'undefined') {

       if(window.pageYOffset>300&&window.pageYOffset<500){
        setanime(1);
       }
       else if(window.pageYOffset>500&&window.pageYOffset<800){
        setanime(2);
       }
       else if(window.pageYOffset>800&&window.pageYOffset<1000){
        setanime(3);
       }
       else if(window.pageYOffset>1100&&window.pageYOffset<1300){
        setanime(4);
       }
       else if(window.pageYOffset<300||window.pageYOffset>1300){
        setanime(null);
       }
  
          }
         
      }
useEffect(() => {
    window.addEventListener('scroll', customScrol);
    return () => window.removeEventListener('scroll', customScrol);
  });
    return (
        <div className="custom_wrapper" >
            <div className={Style.parentEl}  >
                <ul  >
                    {allSeria.map((data,index)=>(
                            <li key={index} style={{width:"45%", height:'234px'}} className={anime&&anime==index+1? Style.activeLi:""} >
                            <Image
                            src={`/uploads/categ${index+1}.png`}
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                        />
                        <h3>
                        <Link href={{ pathname: '/search', query: { seriya_id:data.id ,category_id:"",kuzov_id:""} }}>
                        <a>{data[`title_${lang}`]}</a>
                        </Link>
                            
                            </h3>
                        <Link href={{ pathname: '/search', query: { seriya_id:data.id ,category_id:"",kuzov_id:""} }}>
                        <a>Hamsına bax</a>
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomeWrapper
