import React, { useState, useEffect,useContext} from 'react';
import Style from '../styles/SearchComponent.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Select } from 'antd';
import { Context } from "../context/Context";
function SearchComponent() {
    const [lang, setlang] = useContext(Context);
    const [allSeria, setallSeria] = useState([]);
    const [allCate, setallCate] = useState([]);
    const [allkuzov, setallKuzov] = useState([]);

    const [search, setsearch] = useState({seria:"",kuzov:"",category:""});


const  handleSeria = async(value)=>{

    setsearch({...search,seria:value});
    const res = await fetch(`https://admin.bmwpartsbaku.az/api/kuzov/${value}`)
    const product= await res.json();
  
    setallKuzov(product);
}
const handleKuza= async(value)=>{
    setsearch({...search,kuzov:value});
    /* console.log(`selected ${value}`); */
  }

  function handleCategory(value) {
    setsearch({...search,category:value});
/*     console.log(`selected ${value}`); */
  }

  const getSeria= async()=>{
    const res = await fetch('https://admin.bmwpartsbaku.az/public/api/seriya')
    const product= await res.json();
  
    setallSeria(product);
  }

  const getCate= async()=>{
    const res = await fetch('https://admin.bmwpartsbaku.az/public/api/category')
    const product= await res.json();
  
    setallCate(product);
  }
  const [mobilclick, setmobilclick] = useState(true)
  useEffect(() => {
    getSeria();
    getCate();
  }, [])

const router = useRouter()

    return (
      <>
      <div className={Style.mobileSearch} onClick={()=>{setmobilclick(!mobilclick)}}>
          <Image
          src="/uploads/search.svg"   
          alt=""
          width={41}
          height={32}
          objectFit='contain'
      />
          </div>
      <div className={mobilclick? Style.searchAreaNone:""}>
       <div className={Style.searchArea}>
<span className={Style.mobileExt} onClick={()=>{setmobilclick(!mobilclick)}}>
<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.981369" y="29.9785" width="41" height="3" transform="rotate(-45.1606 0.981369 29.9785)" fill="#512DAB"/>
<rect x="3.06499" y="0.943604" width="41" height="3" transform="rotate(45 3.06499 0.943604)" fill="#512DAB"/>
</svg>

</span>




            <div className="logo_small">
            <img
        src="/uploads/2.svg"
        alt="Picture of the author"
        width={114}
        height={83}
      />
       


            </div>

<form action="">
               <div>
         

<Select defaultValue="Seriya nömrəsi"  className={Style.CustomSelect} onChange={handleSeria}>
    {allSeria.map((data,index)=>(
         <Select.Option key={index} value={data.id}>{data[`title_${lang}`]}</Select.Option>
    ))}
   
      
</Select>

               </div>
               <div>
                


<Select defaultValue="Kuza nömrəsi"  className={Style.CustomSelect} onChange={handleKuza}>
 
     {allkuzov.map((data,index)=>(
  <Select.Option key={index} value={data.id}>{data.title}</Select.Option>
     ))}
    
</Select>
               </div>
               <div>
               <Select defaultValue="Kateqoriya"  className={Style.CustomSelect} onChange={handleCategory}>
                   {allCate.map((data,index)=>(
          <Select.Option key={index} value={data.id}>{data[`title_${lang}`]}</Select.Option>
                   ))}
      
             {/*    <Select.Option value="Kuza nömrəsi2">Kuza nömrəsi</Select.Option>
                <Select.Option value="Kuza nömrəsi3">Kuza nömrəsi</Select.Option>
                <Select.Option value="Kuza nömrəsi4">Kuza nömrəsi</Select.Option> */}
              
            </Select>
               </div>
               <div>
                  <button type="button" onClick={()=>{
                      router.push({
                          pathname:'/search',
                          query:{seriya_id:search.seria,category_id:search.category,kuzov_id:search.kuzov},
                          
                      });
                      setmobilclick(!mobilclick)
                  }}>
                    <p>
                    Axtar
                    </p>
                <img
                   src="/uploads/Search.svg"
                   alt="Picture of the author"
                   width={39.5}
                   height={39.6}
                />
                  </button>
               </div>
           </form>
        </div>
      </div>

 </>
    )
}

export default SearchComponent
