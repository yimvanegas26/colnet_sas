import React from 'react'
import Footer from '../common/Footer'
import Navigation from '../common/Navigation'

import Sum from '../common/Sum';
import SimpleForm from "../chatbot/SimpleForm";
import Requiere from '../components/Requiere';
import Planes from '../components/Planes';
import Contact from '../menuNavBar/Contact';

export default function Contact2() {
  return (
    <div className="bg-gray-200 pb-10">
               <Sum/>
               <Navigation/>
               <SimpleForm/>

               <div className="  relative ">
                <Contact/>
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
