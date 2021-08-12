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
       
          console.log(page,pagesize);
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
    
    <BodyImage title={lang === "az" ? "BMW ehtiyat hissələri kataloq" : "Каталог запчастей BMW"}/>
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
        <div style={{width:"100%",display:'flex',flexDirection:"column",alignItems:"center"}}>
              <p style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>BMW avtomobiliniz sizi hər gün təsir edici performansla sevindirməyə hazırdır. BMW ehtiyat hissələrinin bir -birinə mükəmməl nisbəti avtomobilin maksimum performansını təmin edir. Bu səbəbdən həmişə Orijinal BMW işlənmiş ehtiyat hissələri seçməyinizi tövsiyə edirik: Maksimum performans yalnız avtomobil hissələri müəyyən xüsusiyyətlərə tam uyğun gəldikdə əldə edilə bilər.  </p>
              <p style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>Eyni ciddi istehsal standartları, BMW avtomobillərinə tətbiq edildiyi kimi, Orijinal işlənmiş BMW hissələri üçün də tətbiq olunur - dizayndan keyfiyyətə nəzarətə qədər. Hər original BMW ehtiyat  hissəsindəki dəqiqlik və yüksək keyfiyyətli iş, avtomobilinizin bütün komponentlərinin bir -biri ilə mükəmməl bir şəkildə işləməsini təmin edərək, optimal dinamikanı, ən yüksək təhlükəsizlik və etibarlılığı təmin edir. </p>
              <p style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>bmwpartsbaku.az olaraq sizə ən keyfiyyətli BMW işlənmiş ehtiyat hissələri təklif edirik. Onlayn mağazamızın kataloqunda BMW avtomobiliniz üçün geniş çeşiddə və münasib qiymətə təqdim olunan BMW işlənmiş ehtiyat hissələri əldə edə bilərsiniz.  </p>
              <p style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>Satış qrupumuz, maşınınız üçün ən uyğun aksesuarların seçilməsində sizə kömək etməyə hazırdır. Və əgər indi Bakıda BMW üçün ucuz avtomobil hissələri almağı planlaşdırırsınızsa, burada sizə lazım olan hər şeyi tapa bilərsiniz.  </p>
              <p style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>Mağazamızın çeşidinə əfsanəvi Alman markasının avtomobili üçün ən yaxşı  BMW hissələri, komponentləri daxildir. Buna görə də hər bir məhsul vahidinin keyfiyyətinə, orijinallığına görə müştərilərimiz qarşısında məsuliyyət daşıyırıq. </p>
              <p style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>Avtomobiliniz üçün ən keyfiyyətli BMW ehtiyat hissələri və avadanlıqlar almalısınız. Bölmənin performansı birbaşa hər cür hissələrdən, istehlak materiallarından, komponentlərdən asılıdır. Köhnəlmiş hissələrin dəyişdirilməsi təkcə avtomobilin mükəmməl xidmətinin deyil, həm də yolda təhlükəsizliyinizin təminatıdır. </p>
              <p style={{width:"80%", fontSize:"23px", textAlign:"justify", marginBottom:"50px"}}>Avtomobilin xidmət qabiliyyətinə və öz rifahına diqqət yetirən ciddi motoristlər BMW işlənmiş ehtiyat hissələrini Bakıda yalnız orijinal komponentləri olan sübut edilmiş pərakəndə satış yerlərində alırlar. Bu yerlərdən biri də onlayn mağazamızdır. </p>
        </div>}
</>
    )
}

export default BodyBanner
