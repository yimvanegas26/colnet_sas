import React from 'react'
import { IoLogoWhatsapp, IoLocationOutline, IoWifiOutline, IoPersonOutline, IoConstructOutline } from "react-icons/io5";
import people from "../assets/callcenter.jpg"
import TvCarousel from "../components/TvCarousel"
import videoPp from "../video/Colnet.mp4"

function Internet() {
  return (
    <div>
      <section class="text-gray-600 bg-white body-font relative">
        <div class=" px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe 
            class="lg:w-full w-auto aspect-video absolute inset-0"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameborder="0"
            src={videoPp}/>

            
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium font-title text-center">Contrata Ahora</h2>
            <p class="leading-relaxed mb-5 text-gray-600 font-text">Dejanos tus datos y un asesor de servicio se comunicara para iniciar el proceso</p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">Nombre</label>
              <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Telefono</label>
              <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">Mensaje</label>
              <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-300 rounded text-lg">Enviar</button>
          
          </div>
        </div>
      </section>
    </div>
  )
}

export default Internet