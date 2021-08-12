import React, {useContext} from 'react'
import Layout from '../components/Layout'
import BodyImage from '../components/BodyImage'
import Style from '../styles/Contact.module.css'
import Image from 'next/image'
import Head from 'next/head'
import { DatePicker } from 'antd';
import { Context } from "../context/Context";

const contact = () => {
  const [lang, setlang] = useContext(Context);

    return (
      
        <Layout>
               <Head>
        <title>BMW e39 ehtiyyat hisseleri. e36 ehtiyat hisseleri. BMW parts </title>
        <meta name="description" content="BMW işlənmiş ehtiyat hissələrinin satışı. BMW e39 ehtiyyat hisseleri. BMW e36 ehtiyat hisseleri.  BMW e60 ehtiyat hisseleri. BMW parts Baku əlaqə. BMW hissə satış "/>
        <meta name="keywords" content="bmw e39 ehtiyat hisseleri, bmw e36 ehtiyat hisseleri, bmw e60 ehtiyat hisseleri "/>

        <link rel="icon" href="../uploads/bmw.svg" />
      </Head>
          <BodyImage title={lang === 'az' ? "Əlaqə": "Контакт"}/>
          
          <div className="custom_wrapper">
            <div className={Style.container}>
            <div className={Style.containerLeft}>

            
<div className={Style.parentEl}>
      <div>

      <p>
            <span><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.73791 4.09067C2.13332 3.43598 4.31187 1.05471 5.86652 1.12659C6.33125 1.1651 6.74205 1.44624 7.07583 1.7723C7.84224 2.5207 10.0362 5.35127 10.1607 5.94691C10.4637 7.40776 8.72291 8.24987 9.25567 9.72228C10.6139 13.0458 12.9542 15.386 16.2792 16.7429C17.7504 17.2756 18.5925 15.5349 20.0535 15.8391C20.6479 15.9637 23.4799 18.1575 24.2283 18.9239C24.5531 19.2564 24.8355 19.6684 24.874 20.1331C24.9318 21.7699 22.4028 23.9791 21.9098 24.2615C20.7467 25.0934 19.2293 25.0793 17.3794 24.2192C12.2173 22.0715 3.96782 13.9778 1.78028 8.62087C0.943261 6.78132 0.885491 5.25371 1.73791 4.09067Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span>
            <a href="tel:+994 55 771 12 25">+994 55 771 12 25</a>
        </p>
       
        <p>  <span><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.73791 4.09067C2.13332 3.43598 4.31187 1.05471 5.86652 1.12659C6.33125 1.1651 6.74205 1.44624 7.07583 1.7723C7.84224 2.5207 10.0362 5.35127 10.1607 5.94691C10.4637 7.40776 8.72291 8.24987 9.25567 9.72228C10.6139 13.0458 12.9542 15.386 16.2792 16.7429C17.7504 17.2756 18.5925 15.5349 20.0535 15.8391C20.6479 15.9637 23.4799 18.1575 24.2283 18.9239C24.5531 19.2564 24.8355 19.6684 24.874 20.1331C24.9318 21.7699 22.4028 23.9791 21.9098 24.2615C20.7467 25.0934 19.2293 25.0793 17.3794 24.2192C12.2173 22.0715 3.96782 13.9778 1.78028 8.62087C0.943261 6.78132 0.885491 5.25371 1.73791 4.09067Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span>
          
         <a href="tel:+994 50 610 00 17"> +994 50 610 00 17</a></p>

        <p><span><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.73791 4.09067C2.13332 3.43598 4.31187 1.05471 5.86652 1.12659C6.33125 1.1651 6.74205 1.44624 7.07583 1.7723C7.84224 2.5207 10.0362 5.35127 10.1607 5.94691C10.4637 7.40776 8.72291 8.24987 9.25567 9.72228C10.6139 13.0458 12.9542 15.386 16.2792 16.7429C17.7504 17.2756 18.5925 15.5349 20.0535 15.8391C20.6479 15.9637 23.4799 18.1575 24.2283 18.9239C24.5531 19.2564 24.8355 19.6684 24.874 20.1331C24.9318 21.7699 22.4028 23.9791 21.9098 24.2615C20.7467 25.0934 19.2293 25.0793 17.3794 24.2192C12.2173 22.0715 3.96782 13.9778 1.78028 8.62087C0.943261 6.78132 0.885491 5.25371 1.73791 4.09067Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span><a href="tel:+994 77 251 55 55">+994 77 251 55 55</a></p>


        
  </div>

    <div>
        
                <p>
                  <span><img  src="../uploads/email.png" alt="bmw e39 ehtiyat hisseleri" width={30}/></span>
                  <a href="mailto:info@bmwpartsbaku.az">info@bmwpartsbaku.az</a>
                </p>


                        
  <p>
      <span>
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 1C6.60721 1 1 6.60721 1 13.5C1 15.8514 1.65337 18.1341 2.89279 20.1163C2.39904 21.8462 1.50721 25.1183 1.4976 25.1524C1.45144 25.3216 1.50096 25.5024 1.6274 25.624C1.75385 25.7457 1.93654 25.7889 2.10288 25.738L7.05769 24.2139C8.99856 25.3832 11.2212 26 13.5 26C20.3928 26 26 20.3928 26 13.5C26 6.60721 20.3928 1 13.5 1ZM13.5 25.0385C11.3274 25.0385 9.21106 24.4312 7.37933 23.2832C7.30192 23.2346 7.21298 23.2101 7.12404 23.2101C7.07644 23.2101 7.02885 23.2173 6.98269 23.2313L2.65625 24.563C2.97404 23.4029 3.54519 21.3279 3.87644 20.1736C3.9149 20.0399 3.89327 19.8957 3.81779 19.7788C2.60337 17.9101 1.96154 15.7389 1.96154 13.5C1.96154 7.13798 7.13798 1.96154 13.5 1.96154C19.862 1.96154 25.0385 7.13798 25.0385 13.5C25.0385 19.862 19.862 25.0385 13.5 25.0385Z" fill="black" stroke="black" stroke-width="0.4"/>
    <path d="M21.7951 16.3834C20.8707 15.9192 20.0835 15.4537 19.5092 15.114C19.0705 14.855 18.7536 14.6679 18.5212 14.5624C17.8718 14.2694 17.3795 14.4764 17.1922 14.6476C17.1687 14.6688 17.1477 14.6919 17.1297 14.7164C16.4552 15.6316 15.5743 16.507 15.3165 16.5541C15.0185 16.512 13.6239 15.7951 12.2379 14.7513C10.8228 13.6848 9.93247 12.6636 9.80178 11.968C10.7096 11.1229 11.0366 10.5913 11.0366 9.98625C11.0366 9.36265 9.42822 6.75914 9.13729 6.49603C8.84536 6.23246 8.18788 6.19125 7.18289 6.3724C7.08625 6.39006 6.99711 6.43308 6.92701 6.49603C6.80533 6.60608 3.9581 9.23132 5.31111 12.4131C6.79632 15.9052 10.6085 19.9642 15.4687 20.6235C16.021 20.6983 16.5388 20.7354 17.0235 20.7354C19.8827 20.7354 21.5702 19.4343 22.0454 16.8535C22.081 16.6646 21.9804 16.4762 21.7951 16.3834ZM15.6174 19.7278C10.4778 19.0308 7.24047 14.4257 6.246 12.088C5.25953 9.76932 7.07874 7.702 7.53541 7.23465C7.90696 7.17759 8.29804 7.15359 8.46129 7.17668C8.80229 7.60554 9.98305 9.62305 10.0351 9.98625C10.0351 10.224 9.9495 10.555 8.92998 11.4775C8.83584 11.5622 8.78326 11.6772 8.78326 11.7977C8.78326 14.1689 14.3135 17.4585 15.2929 17.4585C16.1447 17.4585 17.2553 16.1638 17.8878 15.3201C17.9243 15.3214 17.9859 15.3327 18.0736 15.3726C18.2538 15.4546 18.5663 15.6389 18.9614 15.8726C19.4831 16.181 20.1762 16.5903 20.9944 17.0147C20.6228 18.6314 19.5843 20.2667 15.6174 19.7278Z" fill="black" stroke="black" stroke-width="0.4"/>
    </svg>

      </span>
        <a href="tel: +994 50 308 28 53"> 
        +994 50 308 28 53 
        </a>
      </p>  
      <p>
          <span><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.47461 13.4232C5.49322 7.94576 9.94864 3.52051 15.4261 3.53912C20.9035 3.55773 25.3287 8.01315 25.3101 13.4906V13.6029C25.2427 17.1634 23.2547 20.4543 20.8174 23.0264C19.4235 24.4739 17.8669 25.7554 16.1786 26.8453C15.7272 27.2358 15.0576 27.2358 14.6061 26.8453C12.0893 25.2071 9.8804 23.1389 8.08041 20.7351C6.4761 18.639 5.56524 16.0949 5.47461 13.4569L5.47461 13.4232Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="15.3915" cy="13.6161" r="3.17862" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </span>
        <span className={Style.address}>{lang === 'az' ?" Bakı şəh., Babək prs. 74": "Город Баку, проспект Бабека. 74"}</span>
    </p>  
    
    </div>
 </div>
 <div className={Style.imageDivMobile}>
<img
                    src="/uploads/contact.jpg"
                    alt="bmw e36 ehtiyat hisseleri"
                    
              
                />
</div>

</div>


<div className={Style.imageDiv}>
<img src="/uploads/contact.jpg" alt="bmw e60 ehtiyat hisseleri " width={450} height={450}/>
</div>
            </div>

          </div>
 <div >
 <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.3254061955283!2d49.92692787200793!3d40.39443111411448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063238be19485%3A0xa66f290025d0c6c5!2z0J3QuNC30LDQvNC40L3RgdC60LjQuSDRgNCw0LnQvtC9LCDQkdCw0LrRgywg0JDQt9C10YDQsdCw0LnQtNC20LDQvQ!5e0!3m2!1sru!2s!4v1622743622828!5m2!1sru!2s" width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
 </div>

    <ul style={{width:"100%",display:'flex',flexDirection:"column",alignItems:"center",marginBottom:"50px",marginTop:"50px",rowGap:"15px"}}>
        <li style={{width:"80%", fontSize:"23px", textAlign:"justify"}}>BMW E39 ehtiyat hissələri, BMW E36 ehtiyat hissələri, BMW E60 ehtiyat hissələri və digər BMW avomobilləri üçün original,  keyfiyyətli ehtiyat hissələri yalnız bizdə. İşlənmiş ehtiyat hissələri ilə bağlı hər hansı sualınız varsa, bizimlə əlaqə saxlayın.  </li>
        <li style={{width:"80%", fontSize:"23px", textAlign:"justify"}}> BMW maşnları üçün nəzərdə tutulmuş işlənmiş ehtiyat hissələrinə saytımızda və ya bir başa  mağazamızda nəzər yetirə bilərsiniz. Məhsullar arasında BMW E60 ehtiyat hissələri, BMW E36 ehtiyat hissələri, BMW E39 ehtiyat hissələri və digərləri mövcuddur.  </li>
    </ul>
        </Layout>
    )
}

export default contact
