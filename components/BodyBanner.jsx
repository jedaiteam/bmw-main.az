import React ,{useState,useEffect} from 'react'
import Style from '../styles/BodyBanner.module.css'
import BmwPartsCard from './BmwPartsCard'
import BodyImage from './BodyImage'
import { useRouter } from 'next/router'
import { Skeleton ,Empty,Pagination} from 'antd';


const BodyBanner = () => {
    const router = useRouter()

const [products, setproducts] = useState([])
const [productCount, setproductCount] = useState(null)
const [spin, setspin] = useState(0)
console.log('spin'+spin);
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
<div className={Style.first}>
    
    <BodyImage title="Kataloq"/>
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
              <div style={{width:'100%'}}> <Empty description={false} /></div>:
                 products.map((e,index)=>(
                <BmwPartsCard key={index} data={e}/>
           ))}
            
           
            </div>
            <div style={{marginTop:"50px",display:'flex',justifyContent:'center'}}>   
       

<Pagination defaultPageSize={8} onChange={paginationChange} showSizeChanger={false} defaultCurrent={1} total={productCount&&productCount} />
            </div>
        </div>
       
</div>
    )
}

export default BodyBanner
