import { Link } from 'react-router-dom';


const Planes = () => (
    <div>
        <section className="px-2 xl:px-0 bg-blue-50/95 rounded-2xl ">
            <div className="mt-5 mx-auto container">
                <div className="flex flex-col lg:items-center text-center justify-center py-16 w-full">
                    <h1 className=" font-title lg:text-5xl tracking-tighter xl:lg-text-center md:leading-snug f-f-l  text-gray-800 text-3xl md:text-4xl">Elige el Internet Perfecto </h1>
                    <p className="mt-2.5 lg:w-1/2 lg:text-center text-2xl  lg:text-2xl leading-7 md:leading-10 f-f-r py-4 font-text">Colnet te brinda la mejor velocidad de internet a los mejores precios </p>
                </div>
            </div>

            <div class="relative py-8 w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div>
                    <div class=" relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 rounded-xl">
                        <div class="relative flex flex-col p-8 shadow-none rounded-2xl hover:shadow-2xl hover:shadow-blue-500/95 bg-white ">
                            <div class="flex-1">
                                <h3 class="text-xl font-semibold text-neutral-600">Basico</h3>
                                <p class="flex items-baseline mt-4 text-neutral-600">
                                    <span class="text-5xl font-extrabold tracking-tight">$40.000</span>
                                    <span class="ml-1 text-xl font-semibold">/mensuales</span>
                                </p>
                                <p class="mt-6 text-gray-500 text-center">Especial para ti </p>


                                <ul role="list" class="pt-6 mt-6 space-y-6 border-t">
                                    <span class="text-lg font-semibold text-neutral-600">Beneficios</span>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-neutral-600">20 50 70 Megas </span>
                                    </li>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-neutral-600">Soporte Tecnico 24/7</span>
                                    </li>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-neutral-600">Precio Fijo Mensual</span>
                                    </li>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-neutral-600">Sin Clausula de permanencia</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-6 rounded-lg">
                            <a href="/contact" type="highlight" class="w-full items-center block px-10 py-3.5 text-base font-medium text-center hover:bg-blue-500 hover:text-white  text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Contratar</a>
                            </div>
                        </div>

                        <div class="shadow-none hover:shadow-xl hover:shadow-blue-300/95     relative flex flex-col p-8 bg-blue-500 rounded-2xl ">
                            <div class="relative flex-1">
                                <h3 class="text-xl font-semibold text-white">Familiar</h3>

                                <p class="flex items-baseline mt-4 text-white">
                                    <span class="text-5xl font-extrabold tracking-tight">$90.000</span>
                                    <span class="ml-1 text-xl font-semibold">/mensuales</span>
                                </p>
                                <p class="mt-6 text-white text-solitud text-center">Especial para tu familia.</p>


                                <ul role="list" class="pt-6 mt-6 space-y-6 border-t">
                                    <span class="text-lg font-semibold text-white">Beneficios</span>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-white">100 150 200 Megas</span>
                                    </li>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-white">Soporte Tecnico 24/7</span>
                                    </li>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-white">Precio Fijo Mensual </span>
                                    </li>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-white">Sin Clausula de permanencia</span>
                                    </li>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-white">Servicio de Mega Wifi</span>
                                    </li>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-white"> APP Favoritas</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="z-50 mt-6 rounded-lg">
                            <a href="/contact" type="highlight" class="w-full items-center block px-10 py-3.5 text-base font-medium text-center hover:bg-blue-500 hover:text-white  text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Contratar</a>
                            </div>
                        </div>

                        <div class="shadow-none hover:shadow-2xl hover:shadow-blue-500/95 relative flex flex-col p-8 rounded-2xl bg-white ">
                            <div class="flex-1">
                                <h3 class="text-xl font-semibold text-neutral-600">Avanzado</h3>
                                <p class="flex items-baseline mt-4 text-neutral-600">
                                    <span class="text-5xl font-extrabold tracking-tight">$150.000</span>
                                    <span class="ml-1 text-xl font-semibold">/mensual</span>
                                </p>
                                <p class="mt-6 text-gray-500 text-center">Especial para empresas y negocios</p>


                                <ul role="list" class="pt-6 mt-6 space-y-6 border-t">
                                    <span class="text-lg font-semibold text-neutral-600">Beneficios</span>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-neutral-600">200 250 300 Megas</span>
                                    </li>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-neutral-600">Velocidad Simetrica</span>
                                    </li>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-neutral-600">Sopote tecnico personalizado</span>
                                    </li>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-neutral-600">APP Favoritas </span>
                                    </li>

                                    <li class="flex">
                                        <div class="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg class="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-neutral-600">Servicio de Mega Wifi</span>
                                    </li>

                         
                                </ul>
                            </div>

                            <div class="mt-6 rounded-lg">
                                <a href="/contact" type="highlight" class="w-full items-center block px-10 py-3.5 text-base font-medium text-center hover:bg-blue-500 hover:text-white  text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Contratar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <style>
            {` 
            .checkbox:checked {
                right: 0;
                background-color: #4338ca;
            }
            `}
        </style>
    </div>
);
export default Planes;