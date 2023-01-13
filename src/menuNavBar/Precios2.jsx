import React from 'react'
import Footer from '../common/Footer'
import Navigation from '../common/Navigation'
import Precios from './Precios'
import TvCarousel from "../components/TvCarousel";

export default function Precios2() {
  return (
    <div className="bg-gray-200 pb-10">
               <Navigation/>

               <div className="container px-6 mx-auto relative py-10">
                <TvCarousel/>
               </div>

               <div className="container px-6 mx-auto relative py-10">
                <Precios/>
            
               </div>
               

                <div className="mx-auto relative py-10">
                    <Footer/>
                </div>

            </div>

    
    

  )
}
