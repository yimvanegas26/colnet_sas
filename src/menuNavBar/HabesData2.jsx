import React from 'react'
import Footer from '../common/Footer'
import Navigation from '../common/Navigation'
import Precios from './Precios'
import TvCarousel from "../components/TvCarousel";
import Cobertura from './Cobertura';
import HabeasData from './HabeasData';
import Sum from '../common/Sum';
import Video from '../components/Video';
import SimpleForm from "../chatbot/SimpleForm";

export default function HabeasData2() {
  return (
    <div className="bg-gray-200 pb-10">
                <Sum/>
               <Navigation/>

              

               <SimpleForm/>

               <div className=" mx-auto relative ">
                <Video/>
            
               </div>

               <div className="container px-6 mx-auto relative py-10">
                <HabeasData/>
            
               </div>
               

                <div className="mx-auto relative h-10 py-20">
                    <Footer/>
                </div>

            </div>

    
    

  )
}
