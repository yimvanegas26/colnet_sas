import React from "react";
import familia from "../assets/familia.jpg";
import soporte from "../assets/soporte.jpg";


export default function CardTwo() {
    return (
        <>
            <div className="md:mx-auto md:container  px-4">
                <div className="pt-10 md:pt-40">
                    <div className="container mx-auto ">
                        <div className="flex flex-wrap items-center pb-12">
                            <div className=" md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                <div className="py-2 text-color">
                                    <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-title">Mas velocidad por menos precio</h1>
                                    <h2 className="text-lg lg:text-2xl lg:leading-7 md:leading-10 f-f-r font-text py-10 md:py-8">Llegamos a cambiar las reglas del servicio solo con Colnet manejas velocidades desde 20 hasta 300 megas por nuestra super red en fibra optica directamente instalada en su domicilio para que disfrute de la mejor velocidad por el precio justo </h2>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                        <a href="/cobertura" target="_blank" class="  mt-3 text-blue-500 hover:text-blue-800 inline-flex text-base items-center underline underline-offset-8"> Contratar
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="transition delay-700 duration-300 ease-in-out lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center shadow-2xl shadow-blue-300 hover:shadow-blue-500/95">
                                <img className="absolute trasform transition-all hover:translate-x-5 duration-150 w-full h-full inset-0 object-cover object-center rounded-md" src={familia} alt />
                                <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                                    <div className="flex items-center justify-between w-full sm:w-full mb-8">
                                        <div className="flex items-center">
                                            <div className="p-4 bg-yellow-200 rounded-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1={9} y1={15} x2={15} y2={9} />
                                                    <circle cx="9.5" cy="9.5" r=".5" />
                                                    <circle cx="14.5" cy="14.5" r=".5" />
                                                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                                                </svg>
                                            </div>
                                            <div className="ml-6">
                                                <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">2,330</h3>
                                                <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">Clientes Afiliados</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pl-3 text-green-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="3 17 9 11 13 15 21 7" />
                                                    <polyline points="14 7 21 7 21 14" />
                                                </svg>
                                                <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">7.2%</p>
                                            </div>
                                            <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">Incremento</p>
                                        </div>
                                    </div>
                                    <div className="relative mb-3">
                                        <hr className="h-1 rounded-sm bg-gray-200" />
                                        <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-blue-500" />
                                    </div>
                                    <h4 className="text-base text-center text-gray-600 font-normal tracking-normal leading-5">Gracias por ser parte de Colnet</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-32 pt-16">
                    <div className="mx-auto">
                        <div className="flex flex-wrap flex-row-reverse items-center">
                            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                <div className="py-2 text-color">
                                    <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-title">Sin excusas soporte Tecnico 24/7 </h1>
                                    <h2 className="text-lg lg:text-2xl leading-7 md:leading-10 f-f-r py-8 font-text">Para nosotros eres prioridad por eso puedes contactarnos por nuestros medios de atencion para solucionar la falla somos el equipo de soporte mas rapido y eficiente de colombia</h2>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">

                                        <a href="https://api.whatsapp.com/send?phone=573114556187&text=Hola quiero informacion del servicio" target="_blank" class="mt-3 text-blue-500 text-base hover:text-blue-800  inline-flex items-center underline underline-offset-8">Agenda una visita Tecnica
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-full mb-8 w-full relative h-96 flex items-center justify-center shadow-2xl shadow-blue-500">
                                <img className="absolute trasform transition-all hover:translate-x-5 duration-150 w-full h-full inset-0 object-cover object-center rounded-md" src={soporte} />

                                <div className="  p-6 relative bg-white shadow rounded w-10/12 -mb-72">

                                    <div>
                                        <h2 className="font-bold text-center text-base py-2">Descarga nuestra App y reporta tu falla</h2>

                                    </div>

                                    <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                        <a href="#" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                                            <div className="text-left">
                                                <div className="mb-1 text-xs">Descargala en la</div>
                                                <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                                            </div>
                                        </a>
                                        <a href="#" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                                            <div className="text-left">
                                                <div className="mb-1 text-xs">Descargala ya en</div>
                                                <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                                            </div>
                                        </a>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


