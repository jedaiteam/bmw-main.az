import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import Style from '../styles/CustomError.module.css'
import Image from 'next/image'
const Custom404 = () => {
    return (
        <div>
            <div className={Style.customNav}>
                <Navbar/>
            </div>
            <div className={Style.body}>
            <Image
                    src="/uploads/NotFOund.png"
                    alt="Picture of the author"
                    width={820}
                    height={492}
                />
            </div>
            <Footer/>
        </div>
    )
}

export default Custom404
