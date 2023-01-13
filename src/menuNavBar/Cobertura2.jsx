import React from 'react'
import Footer from '../common/Footer'
import Navigation from '../common/Navigation'
import Precios from './Precios'
import TvCarousel from "../components/TvCarousel";
import Cobertura from './Cobertura';
import Coments from '../components/Coments';
import Sum from '../common/Sum';
import SimpleForm from "../chatbot/SimpleForm";
import Requiere from '../components/Requiere';
import Contact from "./Contact"

export default function Cobertura2() {
  return (
    <div className="bg-blue-100/90 pb-10">
               <Sum/>
            
               <Navigation/>

               <SimpleForm />

              

               <div className=" mx-auto relative">
                <Cobertura/>
            
               </div>
               
               <div className=" mx-auto relative">
                <Requiere/>
            
               </div>

               <div className='mx-auto relativa'>
                <Contact/>
               </div>


               <div className="  mx-auto relative">
                    <Coments/>
                </div>    
               

                <div className="mx-auto relative h-10">
                    <Footer/>
                </div>

            </div>

    
    

  )
}
