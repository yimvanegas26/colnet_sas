import React, { useState } from "react";
import { Link } from 'react-router-dom';
import cedula from "../assets/ej_cedula.png";
import colombia from "../assets/colombiah.png";
import hello from "../assets/login.gif";
import service from "../assets/earth.gif";
import wifi from "../assets/wifi.gif";

function Requiere() {
    return (
        <section className="">
             <div className="mt-5 bg-white mx-auto container">
                <div className="flex flex-col lg:items-center py-10 justify-center w-full">
                    <h1 className=" font-title text-center lg:text-5xl tracking-tighter md:leading-snug f-f-l  text-gray-800 text-2xl md:text-4xl">¿Que Necesitas? </h1>
        
                </div>
            </div>
            <div className="flex bg-white flex-wrap mx-auto md:flex-nowrap lp-12 lg:px-80  lg:py-20">

                <a href="">
                    <div className="flex w-full lg:h-full py-8 ">
                        <div className="relative bg-white border-b-4 border-transparent leading-[4rem] hover:border-collapse hover:text-blue-500 flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform shadow-2xl hover:shadow-blue-500 rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                            <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={hello} alt="blog" />
                            <div className="px-6 py-8">
                                <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                                    <span className="">Documento de Identidad</span>
                                </h4>
                                <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Foto o Fotocopia del documento de identificacion CC (Cédula de Ciudadanía) CE(Cédula de Extranjería) de la persona que tendra la titularidad de la cuenta y tomara en solicitud nuestros servicios</p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div class="flex w-full h full lg:px-36 py-8">
                        <div class="relative items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white  hover:shadow-blue-500 shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                            <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={wifi} alt="blog" />
                            <div class="px-6 py-8">
                                <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
                                    <span class="">Recibo Publico</span>
                                </h4>
                                <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Foto o Fotocopia de un recibo publico donde estara instalado el servicio. Recuerda debe ser legible y completo esto nos ayudara a enviarte tus facturas fisicas sin problema recuerda desde nuestra app púedes consultar y realizar el pago </p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="" >
                    <div class="py-8 flex w-full h-full">
                        <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl hover:shadow-blue-500 rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                            <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={service} alt="blog" />
                            <div class="px-6 py-8">
                                <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
                                    <span class="">Costo</span>
                                </h4>
                                <p class="mt-4 text-base font-normal text-gray-500 leading-relax">No importa la distancia o el lugar todas las instalaciones tienen el mismo costo y el primer mes de tu servicio es gratis continua en  <a 
                                className="underline decoration-blue-500/30" >Terminos y Condiciones</a> y conoce nuestras politicas de servicio</p>
                            </div>
                        </div>
                    </div>
                </a>

            </div>
        </section>

    )
}

export default Requiere
