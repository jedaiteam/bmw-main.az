import React from 'react'
import Footer from './footer'
import Navbar from './Navbar'
import Header from './Header'

function Layout({children}) {
    return (
        <div>
         <Header/>
            {children}
            
           <Footer/>
        </div>
    )
}

export default Layout