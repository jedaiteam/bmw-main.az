import React ,{useState,useEffect, useContext} from 'react'
import Style from '../styles/BodyBanner.module.css'
import BmwPartsCard from './BmwPartsCard'
import BodyImage from './BodyImage'
import { useRouter } from 'next/router'
import { Skeleton ,Empty,Pagination} from 'antd';
import { Context } from "../context/Context";


const BodyBanner = (props) => {
    const [lang, setlang] = useContext(Context);

    const router = useRouter()

const [products, setproducts] = useState([])
const [productCount, setproductCount] = useState(null)
const [spin, setspin] = useState(0)
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}




       if(router.pathname=='/search'){
        useEffect(async ()=> {
            const  url=`https://admin.bmwpartsbaku.az/api/search?category_id=${router.query.category_id}&kuzov_id=${router.query.kuzov_id}&seriya_id=${router.query.seriya_id}`
            const res = await fetch(url);           
            const product= await res.json();
            setspin(1);
            setproducts(product.data);
            setproductCount(product.allCount)
        },[router.query]) 
        }else{
            useEffect(async ()=> {
                const   url=`https://admin.bmwpartsbaku.az/api/products`
                const res = await fetch(url);           
                const product= await res.json();
                setspin(1);
                setproducts(product.data);
                setproductCount(product.allCount)
            },[router.query]) 

       }
      

      const paginationChange = async(page,pagesize)=>{
        if(router.pathname!='/search'){
        const   url=`https://admin.bmwpartsbaku.az/api/products?page=${page}`
        const res = await fetch(url);           
        const product= await res.json();
        setproducts(product.data);
      }else{

        const  url=`https://admin.bmwpartsbaku.az/api/search?category_id=${router.query.category_id}&kuzov_id=${router.query.kuzov_id}&seriya_id=${router.query.seriya_id}&page=${page}`
        const res = await fetch(url);           
        const product= await res.json();
       
        setproducts(product.data);
        
      }
    }
    
    return (
        <>
<div className={Style.first}>
    
    <BodyImage title={lang === "az" ? "Kataloq" : "Каталог"} title2={lang === 'az' ? "BMW ehtiyat hissələri kataloq": "Каталог запчастей BMW"}/>
<div className={Style.bodyBanner}>
        
            <div>
                {spin==0?
             <>  <div style={{width:'290px',marginRight:'20px'}}> <Skeleton active  /> </div>
               <div style={{width:'290px',marginRight:'20px'}}> <Skeleton active  /> </div>
               <div style={{width:'290px',marginRight:'20px'}}> <Skeleton active  /> </div> 
               <div style={{width:'290px'}}> <Skeleton active  /> </div>
               <div style={{width:'290px',marginRight:'20px'}}> <Skeleton active  /> </div>
               <div style={{width:'290px',marginRight:'20px'}}> <Skeleton active  /> </div>
               <div style={{width:'290px',marginRight:'20px'}}> <Skeleton active  /> </div>
               <div style={{width:'290px'}}> <Skeleton active  /> </div></>:products.length<1?
              <div style={{width:'100%'}}> <div className={Style.noResult}><Empty description={false} /> <p>{lang ==='az' ? "Axtarışınıza uyğun nəticə tapılmadı" : "По вашему запросу ничего не найдено" }</p></div></div>:
                 products.map((e,index)=>(
                <BmwPartsCard key={index} data={e}/>
           ))}
            
           
            </div>
            <div style={{marginTop:"50px",display:'flex',justifyContent:'center'}}>   
       

<Pagination defaultPageSize={8} onChange={paginationChange} showSizeChanger={false} defaultCurrent={1} total={productCount&&productCount} />
            </div>
        </div>
       
</div>



        {props.type ==="kataloq" &&
        <div style={{width:"100%",display:'flex',flexDirection:"column",alignItems:"center",marginBottom:"50px",marginTop:"50px"}}>
              <p style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>Elektron BMW ehtiyat hissələri Baku kataloqu, BMW avtomobilləri üçün ən geniş ehtiyat hissələri ehtiva edir. Kataloqdakı hər bir detal ətraflı bir təsvirlə müşayiət olunur: BMW ehtiyat hissələri Bakıda onlayn mağazamız, hətta avtomobil dünyasında yeni başlayanlar üçün komponentlərin, aksesuarların, istehlak materiallarının seçimi və satın alınması çətin olmayacaq şəkildə hazırlanmışdır. </p>
              <p style={{width:"80%", fontSize:"23px", textAlign:"justify"}}> Hər bir BMW sahibi bilir ki, bu avtomobil heyrətamiz texniki imkanlara və sürücülük zövqünə sahibdir. Ancaq avtombilin problemsiz işləməsinin əsas şərti, markanın orijinal ehtiyat hissələrinin istifadəsi ilə vaxtında təmir edilməsidir.  </p>
              <p style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>İşlənmiş BMW hissələrini BMW ölüxanasından, istehsalçıdan almaq, davamlı və qüsursuz bir avtomobil xidmətinin lehinə bir seçim etmək deməkdir. Kataloqumuzda BMW-nin yüksək keyfiyyətli və təhlükəsiz işləməsi üçün lazım olan hər ehtiyat hissəsini tapa bilərsiniz. </p>
              <p style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>İnternet mağazamız əsasında tətbiq olunan rahat bir axtarış sistemi, BMW ölüxanasında ehtiyat hissələri müstəqil olaraq onlayn olaraq seçib sifariş verməyinizə imkan verir. Təsvirləri və qiymətləri olan BMW ehtiyat hissələri kataloqu, avtomobil sahibinin sözün əsl mənasında evdən çıxmadan avtomobili üçün lazım olan komponentləri satın ala biləcəyi bütün lazımi məlumatları ehtiva edir. </p>
              <p style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>Lazımi BMW ehtiyat hissələri tapmadınızsa və ya seçimdə çətinlik çəkirsinizsə, şəxsi menecerinizlə əlaqə saxlayın: mütəxəssislərimiz yaranan problemi dərhal həll edəcəklər. </p>
        </div>}
</>
    )
}

export default BodyBanner
