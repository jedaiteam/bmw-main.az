import React, {useState,useEffect} from 'react'
import Style from '../styles/Header.module.css'
import Navbar from './Navbar'
import SearchComponent from './SearchComponent';
import { useRouter } from 'next/router';


function Header() {
    const [width, setwidth] = useState(800)
    useEffect(() => {
        setwidth(window.innerWidth);
 
    }, [])


  const headerImage = require('../public/uploads/secondheader.jpg');
    const howtobuyimg = require('../public/uploads/headerhowtobuyjpeg.jpeg');
    const headerCar = require('../public/uploads/headerimagecar.jpeg');
    const headerContact =require('../public/uploads/headerimagecontact.jpeg');
    const productHeader =require('../public/uploads/headersingle.jpeg');
    const router = useRouter('../public/uploads/secondheader.jpg')

    return (
       <>
            <div className={Style.headerNavbar}
            
            style={{backgroundImage:`url(${router.pathname=='/avtomobiller'?
            headerCar: router.pathname=='/contact'?headerContact: router.pathname=='/nece-almaq'? howtobuyimg: 
            router.pathname=='/product-detail/[id]'? productHeader: headerImage})`}} 
            
            >
                <Navbar />

               {router.pathname!='/avtomobiller' && <SearchComponent />}
               {width<=900 && <SearchComponent />}
               
            </div>
       </>
    )
}

export default Header
