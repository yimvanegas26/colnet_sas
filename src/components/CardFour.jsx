import React from 'react'
import fibra from "../assets/2fibra.png";
import traffic from "../assets/traffic.jpg";
import home from "../assets/home.jpg";
import wifi from "../assets/wifi.jpg"
import tv from "../assets/tv.jpg"

export default function CardFour() {

  return (
    <div className="pb-16 " style={{ fontFamily: '"Lato", sans-serif' }}>
      
      <dh-component>
        <section className="max-w-8xl mx-auto container bg-white pt-16">
          <div>
            <div role="contentinfo" className="flex items-center flex-col px-4">
              <p tabIndex={0} className="focus:outline-none uppercase text-base text-center text-gray-600 leading-4">Solo con ColNet</p>
              <hh1 tabIndex={0} className="focus:outline-none text-2xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4">Tienes la mejor calidad &amp; al mejor precio</hh1>
            </div>
            <div tabIndex={0} aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
              <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20 ">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute trasform transition-all hover:-translate-x-5 duration-150  text-white bottom-0 left-0 bg-blue-200 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src={fibra} className="w-16 h-16  " />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-tight text-gray-800">Tecnologia Ftth</h2>
                  <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Gracias a esta tecnologia cableamos fibra optica hasta la vivienda lo que nos garantiza la mayor mayor estabilidad para que disfrutes del mejor contenido </p>
                </div>
              </div>
              <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute trasform transition-all hover:-translate-x-5 duration-150  text-white bottom-0 left-0 bg-blue-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src={traffic} className="w-16 h-16   "  />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">Ultravelocidad</h2>
                  <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Te brindamos el mejor servicio de Internet para el hogar velocidades hasta de 300 megas para disfrutar un mundo de posibilidades. Elige la velocidad que más se adapte a tus necesidades. Disfrutá con la banda ancha de Colnet</p>
                </div>
              </div>
              <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 trasform transition-all hover:-translate-x-5 duration-150  bg-blue-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src={wifi} className="w-16 h-16   " />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">Mega Wifi</h2>
                  <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Te brindamos la mejor cobertura y estabilidad del mercado contamos con los mejores equipos para garantizarte la conexion en tu hogar</p>
                </div>
              </div>
              <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white trasform transition-all hover:-translate-x-5 duration-150 bottom-0 left-0 bg-blue-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src={tv} className="w-16 h-16   " />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">BlueTv</h2>
                  <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Adios a los comerciales encontraras el mejor contenido para ti y tu familia las 24 horas los 365 dias de la semana desde cualquier lugar y dispositivo </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </dh-component>
    
    </div>

  )
}

