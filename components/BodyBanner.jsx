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
    
    <BodyImage title={lang === "az" ? "Kataloq" : "??????????????"} title2={lang === 'az' ? "BMW ehtiyat hiss??l??ri kataloq": "?????????????? ?????????????????? BMW"}/>
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
              <div style={{width:'100%'}}> <div className={Style.noResult}><Empty description={false} /> <p>{lang ==='az' ? "Axtar??????n??za uy??un n??tic?? tap??lmad??" : "???? ???????????? ?????????????? ???????????? ???? ??????????????" }</p></div></div>:
                 products.map((e,index)=>(
                <BmwPartsCard key={index} data={e}/>
           ))}
            
           
            </div>
            <div style={{marginTop:"50px",display:'flex',justifyContent:'center'}}>   
       

<Pagination defaultPageSize={20} onChange={paginationChange} showSizeChanger={false} defaultCurrent={1} total={productCount&&productCount} />
            </div>
        </div>
       
</div>



        {props.type ==="kataloq" &&
        <ul style={{width:"100%",display:'flex',flexDirection:"column",alignItems:"center",marginBottom:"50px",marginTop:"50px",rowGap:"15px"}}>
              <li style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>Elektron BMW ehtiyat hiss??l??ri Baku kataloqu, BMW avtomobill??ri ??????n ??n geni?? ehtiyat hiss??l??ri ehtiva edir. Kataloqdak?? h??r bir detal ??trafl?? bir t??svirl?? m????ayi??t olunur: BMW ehtiyat hiss??l??ri Bak??da onlayn ma??azam??z, h??tta avtomobil d??nyas??nda yeni ba??layanlar ??????n komponentl??rin, aksesuarlar??n, istehlak materiallar??n??n se??imi v?? sat??n al??nmas?? ????tin olmayacaq ????kild?? haz??rlanm????d??r. </li>
              <li style={{width:"80%", fontSize:"23px", textAlign:"justify"}}> H??r bir BMW sahibi bilir ki, bu avtomobil heyr??tamiz texniki imkanlara v?? s??r??c??l??k z??vq??n?? sahibdir. Ancaq avtombilin problemsiz i??l??m??sinin ??sas ????rti, markan??n orijinal ehtiyat hiss??l??rinin istifad??si il?? vaxt??nda t??mir edilm??sidir.  </li>
              <li style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>????l??nmi?? BMW hiss??l??rini BMW ??l??xanas??ndan, istehsal????dan almaq, davaml?? v?? q??sursuz bir avtomobil xidm??tinin lehin?? bir se??im etm??k dem??kdir. Kataloqumuzda BMW-nin y??ks??k keyfiyy??tli v?? t??hl??k??siz i??l??m??si ??????n laz??m olan h??r ehtiyat hiss??sini tapa bil??rsiniz. </li>
              <li style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>??nternet ma??azam??z ??sas??nda t??tbiq olunan rahat bir axtar???? sistemi, BMW ??l??xanas??nda ehtiyat hiss??l??ri m??st??qil olaraq onlayn olaraq se??ib sifari?? verm??yiniz?? imkan verir. T??svirl??ri v?? qiym??tl??ri olan BMW ehtiyat hiss??l??ri kataloqu, avtomobil sahibinin s??z??n ??sl m??nas??nda evd??n ????xmadan avtomobili ??????n laz??m olan komponentl??ri sat??n ala bil??c??yi b??t??n laz??mi m??lumatlar?? ehtiva edir. </li>
              <li style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>Laz??mi BMW ehtiyat hiss??l??ri tapmad??n??zsa v?? ya se??imd?? ????tinlik ????kirsinizs??, ????xsi menecerinizl?? ??laq?? saxlay??n: m??t??x??ssisl??rimiz yaranan problemi d??rhal h??ll ed??c??kl??r. </li>
        </ul>}
</>
    )
}

export default BodyBanner
