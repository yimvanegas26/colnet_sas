import React from 'react';


import Carousel from "./Carousel";
import CardTwo from "./CardTwo"

import CardFour from "./CardFour";
import Footer from "../common/Footer";
import Navigation from "../common/Navigation";
import Pagos from "./Pagos";
import Planes from "./Planes";
import TvCarousel from "./TvCarousel";
import SimpleForm from "../chatbot/SimpleForm";

import Sum from '../common/Sum';
import Atencion from './Atencion';


export default function Home() {

    return (
        <>
  <div className="bg-white   pb-10  ">
                <Sum/>
               <Navigation/>

               <SimpleForm /> 
         

                <Carousel className=" mx-auto py-8">
                    <Pagos />
                </Carousel>
                <div className="container px-6 mx-auto relative py-10">
                    <CardTwo/>
                </div>
                <div className="mx-auto relative">
                    <Planes />
                </div>
                
              
                <div className="container px-6 mx-auto relative py-10">
                    <CardFour/>
                </div>

               

                <div className="mx-auto relative py-10 h-10">
                    <Footer/>
                </div>

            </div>

    </>
    );
}


