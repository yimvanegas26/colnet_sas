
import { useState } from "react";
import { Link } from 'react-router-dom';
import colombia from "../assets/colombia.png";
import colnetLogo from "../assets/colnetcolor.png";
import colnetBlack from "../assets/colnetBlack.png";

import { VscBook, VscLaw, VscHome, VscGlobe , VscRadioTower,VscCallIncoming } from "react-icons/vsc";
import { IoLogoWhatsapp,  IoLocationOutline, IoWifiOutline, IoPersonOutline, IoConstructOutline}  from "react-icons/io5";



export default function Footer() {

    const [mode, setMode] = useState("auto");
    return (

        <footer id="footer" className="relative px-40  py-5  bg-gradient-to-r from-blue-100 to-blue-400 pt-24 rounded-2xl">
            <nav class="grid  gap-12 mb-24 md:grid-cols-2 lg:grid-cols-4">

                <div>
                    <p class="mb-4 text-base font-medium px-8 text-primary">Link de Interes</p>
                    
                    <a
                        class="flex items-start lg:justify-start hover:text-white no-underline hover:underline gap-1.5 sm:justify-start mt-6"

                    >
                        < IoPersonOutline className="text-black-700 w-7 h-7  " />

                        <Link to={"/precios"} className="font-pres-one text-black-700 text-lg  ">Quienes Somos</Link>
                    </a>
                    <a
                        class="flex items-center justify-center hover:text-white no-underline hover:underline gap-1.5 sm:justify-start mt-6"

                    >
                        < IoWifiOutline className="text-black-700 w-7 h-7  " />

                        <Link to={"/internet"} className="font-pres-one text-black-700 text-lg  ">Planes</Link>
                    </a>
                    <a
                        class="flex items-center justify-center hover:text-white no-underline hover:underline gap-1.5 sm:justify-start mt-6"

                    >
                        <  IoLocationOutline className="text-black-700 w-7 h-7  " />

                        <Link to={"/cobertura"} className="font-pres-one text-black-700 text-lg  ">Cobertura</Link>
                    </a>
                    <a   href="https://api.whatsapp.com/send?phone=573114556187&text=Hola Presento falla con el servicio"
                        class="flex items-center justify-center gap-1.5 sm:justify-start hover:text-white no-underline hover:underline mt-6"

                    >
                        <  IoConstructOutline className="text-black-700 w-7 h-7 " />
                        Soporte Tecnico
                    </a>

            
                    
                   

                </div>
                <div>
                    <p class="mb-4 text-base font-medium px-8 text-primary">Contáctanos</p>
                    <a
                        class="flex items-center justify-center hover:text-white no-underline hover:underline gap-1.5 sm:justify-start mt-6"

                    >
                        <  VscCallIncoming className="text-black-700 w-7 h-7  " />

                        <Link to={"/home"} className="font-pres-one text-black-700 text-lg  ">01 80005224445 (+608)5765181</Link>
                    </a>

                    <a
                        href="https://api.whatsapp.com/send?phone=573114556187&text=Hola quiero informacion del servicio"
                        class="flex items-center justify-center gap-1.5 hover:text-green-400 no-underline hover:underline sm:justify-start mt-6"

                    >
                        <   IoLogoWhatsapp className="text-black-700 w-7 h-7  " />

                        3114556187
                    </a>

                   
                    <a
                        class="flex items-center justify-center hover:text-white no-underline hover:underline gap-1.5 sm:justify-start mt-6"

                    >
                        <  VscRadioTower className="text-black-700 w-7 h-7 " />

                        <Link to={"/home"} className="font-pres-one text-black-700 text-lg  ">contacto@col-net.com.co</Link>
                    </a>

                    <a
                        class="flex items-center justify-center gap-1.5 hover:text-white no-underline hover:underline sm:justify-start mt-6"

                    >
                        < VscGlobe className="text-black-700 w-7 h-7  " />

                        <Link to={"/home"} className="font-pres-one text-black-700 text-lg  ">www.col-net.com.co</Link>
                    </a>

                </div>
                <div>
                    <p class="mb-4 text-base font-medium px-8 text-primary">Marco Legal</p>


                    <a
                        class="flex items-center  hover:text-white no-underline hover:underline justify-center gap-1.5 sm:justify-start mt-6"
                    >
                        < VscBook className="text-black-700 w-7 h-7 " />

                        <Link to={"/habeasdata"} className="font-pres-one text-black-700 text-lg  ">Tratamiento de Datos</Link>
                    </a>
                    <a
                        class="flex items-center hover:text-white no-underline hover:underline justify-center gap-1.5 sm:justify-start mt-6"
                    >
                        < VscLaw className="text-black-700 w-7 h-7 hover:text-white no-underline hover:underline " />

                        <Link to={"/crc"} className="font-pres-one text-black-700 text-lg  ">Regulaciones Sector TIC</Link>
                    </a>


                </div>

                

                <div className="w-full lg:w-1/2 px-3 flex flex-col justify-between">
                    <div className="relative w-36 items-end">
                        <img src={colombia} />
                          



                    </div>

                    <div className="relative w-40  py-8 items-end">
                    <img src={colnetBlack} /> 

                    </div>
                </div>


            </nav>

            <hr class="my-6   border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="flex flex-col items-center  px-1 py-1 justify-between md:flex-row">
                <a href="/" title="Colnet " class="mb-4 md:mb-0 w-40 h-40">
                    <img src={colnetLogo} />
                    <span class="sr-only"></span>
                </a>
                <p class="text-sm text-center text-gray-600 md:text-left">© 2022 ColNet Telecomunicaciones S.A.S  All Rights Reserved</p>
            </div>
        </footer>


    );
}

