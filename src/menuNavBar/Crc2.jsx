import React from 'react'
import Footer from '../common/Footer'
import Navigation from '../common/Navigation'
import Precios from './Precios'
import TvCarousel from "../components/TvCarousel";
import Crc from './Crc';
import Sum from '../common/Sum';
import SimpleForm from "../chatbot/SimpleForm";

export default function Crc2() {
  return (
    <div className="bg-gray-200 pb-10">
               <Sum/>
               <Navigation/>
               <SimpleForm/>

               <div className="mx-auto relative">
                <Crc/>
               </div>

              
               

                <div className="mx-auto relative h-10">
                    <Footer/>
                </div>

            </div>

    
    

  )
}