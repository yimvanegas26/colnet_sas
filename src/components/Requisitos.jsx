import React from 'react'
import cedula1 from "../assets/cedula.png";
import recibo from "../assets/RECIBO-EBSA.png";

function Requisitos() {
    return (

        <section className="px-4 py-24 mx-auto max-w-6xl">


            <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-4 md:gap-y-32 gap-x-10 md:gap-x-24">


                <div>
                    <h2 className="mb-4 font-title tracking-tight text-justify text-2xl lg:text-6xl   f-f-l  text-black md:leading-tight sm:text-left md:text-4xl">Para Contratar Nuestros Servicios solo Necesitas</h2>
                    <p className="mb-5 text-base text-center font-press-one text-gray-600 sm:text-left md:text-lg">
                        Foto o Fotocopia de un recibo publico donde estara instalado el servicio. Recuerda debe ser legible y completo esto nos ayudara a enviarte tus facturas fisicas sin problema.

                    </p>
                    <a href='./pdf' target="_blank" class="mt-3 text-blue-500 inline-flex items-center text-base underline underline-offset-8">Leer mas
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
                <div className="py-4 rounded-2xl    ">
                    <img className=" shadow-none hover:shadow-2xl trasform transition-all hover:translate-x-5 duration-150  hover:shadow-blue-500  py-4 " src={recibo}></img>
                </div>
            </div>
            <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
                <div className="order-none md:order-2">
                    <h2 className="mb-4 text-2xl tracking-tight text-center text-black   lg:text-6xl  md:leading-snug f-f-l font-title sm:text-left md:text-4xl">Documento de Identidad</h2>
                    <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
                        Foto o Fotocopia del documento de identificacion CC (Cédula de Ciudadanía) CE(Cédula de Extranjería) de la persona que tendra la titularidad de la cuenta y tomara en solicitud nuestros servicios
                    </p>
                    <a href='./pdf' target="_blank" class="mt-3 text-blue-500 inline-flex tetx-base items-center underline underline-offset-8">Leer mas
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                
                </div>
                <div className=" py-48 ">
                    <img className=" shadow-none hover:shadow-2xl trasform transition-all hover:translate-x-5 duration-150  hover:shadow-blue-500  py-4 " src={cedula1}></img>
                </div>
            </div>
        </section>

    )
}

export default Requisitos