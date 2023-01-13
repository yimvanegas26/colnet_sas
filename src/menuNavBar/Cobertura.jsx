import React from 'react'
import { IoLogoWhatsapp, IoLocationOutline, IoLocationSharp, IoWifiOutline, IoPersonOutline, IoConstructOutline } from "react-icons/io5";

function Cobertura() {
  return (
    <section class="text-gray-600 body-font relative">
  <div class="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0chiquinquira+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" ></iframe>
  </div>
  <div class="container px-5 py-24 lg:mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2  bg-white rounded-lg p-8 flex flex-col text-center md:ml-auto w-80 h-50 mt-10 md:mt-0 relative z-10 shadow-md">
      <div className='text-center text-red-500 w-7 h-7 '>
      <IoLocationSharp />  
      </div>
   
      <div class="relative mb-1 lg:mb-4">
       
        <p class="mt-1text-sm">Calle 20 No 5-15</p>
      </div>
      <div class="relative lg:mb-4">
        <label for="message" class="leading-7 text-center text-sm text-gray-600">Contacto</label>
        <a
              href="https://api.whatsapp.com/send?phone=573114556187&text=Hola quiero informacion del servicio"
              class="flex items-center justify-center gap-1.5 hover:text-green-400 no-underline hover:underline sm:justify-start mt-6"

            >
              <   IoLogoWhatsapp className="text-black-700 w-7 h-7  " />

              Whatsapp
            </a>
 
      </div>
     
      <p class="text-xs text-gray-500 mt-3">Escribe y un asesor te brindara la informacion.</p>
    </div>
  </div>
</section>

  )
}

export default Cobertura