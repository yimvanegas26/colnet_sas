import React from 'react'
import Footer from '../common/Footer'
import Navigation from '../common/Navigation'
import Precios from './Precios'
import Carousel from "../components/Carousel";
import Internet from './Contact';
import Requisitos from '../components/Requisitos';
import Sum from '../common/Sum';
import SimpleForm from "../chatbot/SimpleForm";
import Requiere from '../components/Requiere';
import Planes from '../components/Planes';
import Comision from '../components/Comision';

export default function Internet2() {
  return (
    <div className="bg-blue-100/90  pb-10">
               <Sum/>
               <Navigation/>
               <SimpleForm/>

               <div className="  relative ">
                <Comision/>
               </div>

               <div className="  mx-auto relative">
                <Requiere/>
            
               </div>

               <div className="  relative">
                <Planes/>
            
               </div>

               
            
              


                  
               

                <div className="  mx-auto relative h-10 ">
                    <Footer/>
                </div>

            </div>

    
    

  )
}
