import React from 'react'
import colombia from "../assets/colombia.png"

import { IoLogoWhatsapp, IoLogoGoogle, IoLogoYoutube, IoLogoTwitter, IoLogoFacebook } from "react-icons/io";

function Sum() {
    return (
        <div className='sticky top-0   flex h-12 bg-gradient-to-r from-blue-400  to-blue-200 '>

            <div className='w-1/3 px-5 py-3 items-center'>
                <img src={colombia} className="w-10"></img>

            </div>



            <div className=" w-1/3   items-center px-4 py-3  text-white">

                <h2 className="lg:text-base text-center text-xs font-title tracking-normal text-white ">Siguenos en nuestras redes solciales y descubre los beneficios</h2>

            </div>

            <div className='w-1/3 flex flex-row-reverse items-center text-end '>
                <a
                    href="https://api.whatsapp.com/send?phone=573114556187&text=Hola quiero informacion del servicio"
              >
                    <IoLogoWhatsapp className="text-green-600 w-10" />

                </a>
                <div><IoLogoTwitter className="text-sky-500 w-10" /></div>
                <div> <IoLogoYoutube className="text-red-600 w-10" /></div>
                <div><IoLogoFacebook className="text-blue-700 w-10" /></div>
                
                
               
                
            </div>

        </div >



    )
}

export default Sum
