import React from 'react'
import Navigation from '../common/Navigation'

import Footer from '../common/Footer'
import Failed404 from './Failed404'
import Sum from '../common/Sum'
import SimpleForm from '../chatbot/SimpleForm'


function Failed4042() {
  return (
    <div className="bg-gray-200 pb-10">
    <Sum/>
 
    <Navigation/>

    <SimpleForm />

   

    <div className=" mx-auto relative">
     <Failed404/>
 
    </div>

    <div className="container px-6 mx-auto relative py-10">
         
     </div>    
    

     <div className="mx-auto relative py-10 h-10">
         <Footer/>
     </div>

 </div>
  )
}

export default Failed4042
