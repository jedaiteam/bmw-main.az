import React from 'react'
import Style from '../styles/HowtoBuy.module.css'
import Image from 'next/image'

const HowToBuy = () => {
    return (
        <div className='custom_wrapper'>
            <div className={Style.parentElement}>
                <div className={Style.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                     </p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                     </p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                     </p>
                </div>

                <div>
                <img
                    src="/uploads/howtobuy.png"
                    alt="Picture of the author"
                   
                />
                </div>
            </div>
        </div>
    )
}

export default HowToBuy
