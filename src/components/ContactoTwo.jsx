import React from "react";
import { MdPhonelinkRing, MdPhone } from "react-icons/md";
import phone from "../assets/phone.png"


const ContactoTwo = () => {
    return (
        <div>
            <div className="py-12 bg-transparent transition duration-150 ease-in-out z-10 absolute  right-0 bottom-0 left-0" id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 items-center px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                   
                        <h1 className="text-gray-800  font-sans text-2xl text-center tracking-normal leading-tight mb-4">Todo el entretanimiento en un solo lugar </h1>
                        
                        
                        <div className="flex items-center justify-center w-full">
                            <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-blue-500 bg-blue-700 rounded-full text-white px-8 py-2 text-sm">Suscribirme Ahora </button>
                            
                        </div>
                        <div className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out" onclick="modalHandler()">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center py-12" id="button">
                <button className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" onclick="modalHandler(true)">
                    Conoce mas
                </button>
            </div>
        </div>
    );
};
export default ContactoTwo;
