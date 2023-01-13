import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { IoWifiSharp, IoTv, IoLibrarySharp, IoLocationSharp, IoLockClosed, IoHomeSharp, IoPeopleSharp, IoMapSharp } from "react-icons/io5";

import pse from "../assets/pse.jpg";
import colnetColor from "../assets/colnetcolor.png";



export default function Navigation() {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(false);
    const [deliverables, setDeliverables] = useState(false);
    const [profile, setProfile] = useState(false);


    return (
        <>
            <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"}>
                <div className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full" onClick={() => setShow(!show)} />
                <div className="w-64 absolute left-0 z-40 top-0 bg-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
                    <div className="flex flex-col justify-between h-full">
                        <div className="px-6 pt-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <svg aria-label="Home" id="logo" enableBackground="new 0 0 300 300" height={43} viewBox="0 0 300 300" width={43} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <g>
                                            <path
                                                fill="#4c51bf"
                                                d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                                            />
                                        </g>
                                    </svg>
                                    <p className="text-bold md:text2xl text-lg pl-3 text-gray-800">ColNet Telecomunicaciones S.A.S   </p>
                                </div>
                                <div id="cross" className=" text-gray-800" onClick={() => setShow(!show)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                            <ul className="f-m-m">
                                <a>
                                    <li className="text-gray-800 pt-8">
                                        <div className="flex items-center">
                                            <div className="md:w-6 md:h-6 w-5 h-5">
                                                <IoHomeSharp />
                                            </div>
                                            <p className="text-gray-800 hover:text-blue-500 ml-3 text-lg"><Link to={'/home'}>Inicio</Link></p>
                                        </div>
                                    </li>
                                </a>
                                <a>
                                    <li className="text-gray-700 pt-8">
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <div className="md:w-6 md:h-6 w-5 h-5">
                                                    <IoWifiSharp />
                                                </div>
                                                <p className="text-gray-700 ml-3 text-lg">Servicios</p>
                                            </div>
                                            <div onClick={() => setProduct(!product)}>
                                                {product ? (
                                                    <div className=" ml-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={14} height={14} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <polyline points="6 15 12 9 18 15" />
                                                        </svg>
                                                    </div>
                                                ) : (
                                                    <div className="ml-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={14} height={14} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {product ? (
                                            <div>
                                                <ul className="my-3">
                                                    <li className="text-base text-gray-800 hover:text-blue-500 py-2 px-6"> <Link to={'/internet'}>Internet</Link></li>
                                                    <li className="text-base text-gray-800 hover:text-blue-500 py-2 px-6"><Link to={'/page404'}>Television</Link></li>

                                                </ul>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </li>
                                </a>

                                <li className="text-gray-800 pt-8">
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <div className="md:w-6 md:h-6 w-5 h-5">
                                                <IoPeopleSharp />
                                            </div>
                                            <p className="text-gray-800 ml-3 text-lg">Quienes Somos</p>
                                        </div>
                                        <div onClick={() => setDeliverables(!deliverables)}>
                                            {deliverables ? (
                                                <div className=" ml-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={14} height={14} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <polyline points="6 15 12 9 18 15" />
                                                    </svg>
                                                </div>
                                            ) : (
                                                <div className="ml-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={14} height={14} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {deliverables ? (
                                        <div>
                                            <ul className="my-3">
                                                <li className="text-base text-gray-800 hover:text-blue-500  py-2 px-6"><Link to={'/crc'}>Grupo Colnet</Link></li>
                                                <li className="text-base text-gray-800 hover:text-blue-500 py-2 px-6"><Link to={'/crc'}>CRC</Link></li>
                                                <li className="text-base text-gray-800 hover:text--500 py-2 px-6"><Link to={'/habeasdata'}>Tratamiento de datos</Link></li>
                                            </ul>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </li>

                                <a>
                                    <li className="text-gray-800 pt-8">
                                        <div className="flex items-center">
                                            <div className="md:w-6 md:h-6 w-5 h-5">
                                                <IoMapSharp />
                                            </div>
                                            <p className="text-gray-800 ml-3 text-lg"><Link to={'/cobertura'}>Cobertura</Link></p>
                                        </div>
                                    </li>
                                </a>
                                <a>
                                    <li className="text-gray-800 pt-8">
                                        <div className="flex items-center">
                                            <img className="xl:w-16 xl:h-16 w-8 h-8" src={pse} />

                                            <h2 className="text-gray-800 ml-3 text-lg hover:text-blue-500">Paga tu factura</h2>


                                        </div>
                                    </li>


                                </a>
                            </ul>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-center mb-4 w-full px-6">

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <nav className="w-full mx-auto bg-white shadow   sticky top-0 z-50">
                <div className="justify-between container px-6 h-24 flex items-center lg:items-stretch mx-auto">
                    <div className="flex items-center">
                        <div className="mr-10 flex w-40 h-28 xl:w-52 xl:h-40 items-start">
                            <img src={colnetColor} />

                        </div>
                        <ul className="pr-32 xl:flex hidden items-center h-full px-40">
                            <li className="cursor-pointer h-full border-collapse xl:w-12 flex items-center border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-500  text-base tracking-normal"><Link to={'/home'}>Inicio</Link></li>
                            <li className="cursor-pointer h-full flex items-center text-base text-gry-800 mx-10 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-500 tracking-normal relative">
                                {product ? (
                                    <div className="bg-white shadow rounded py-5 w-screen px-5 left-0 mt-24 grid gap-2 grid-cols-5 -ml-4 justify-between absolute  top-0">

                                        <div className="p-6 bg-white border w-64 h-72 border-gray-200 rounded-2xl px-5 shadow-md border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-500 hover-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                                            < IoWifiSharp className="h-10 w-10" />
                                            <a href="/internet">
                                                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Banda Ancha</h5>
                                            </a>
                                            <p className="mb-1 font-normal text-gray-500 dark:text-gray-400">Elige el internet perfecto para ti</p>
                                            <a className="inline-flex items-center text-blue-600 hover:underline">
                                                <Link to={'/internet'}>Internet</Link>
                                                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                            </a>
                                        </div>

                                        <div class="p-6 bg-white border w-64 h-72 border-gray-200 rounded-2xl px-5 shadow-md border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-500 hover-shadow-2xl dark:bg-gray-800 dark:border-gray-700">

                                            <IoTv className="h-10 w-10" />
                                            <a href="/page404">
                                                <h5 class="mb-2 text-xl font-title tracking-tight text-gray-900 dark:text-white">Television</h5>
                                            </a>
                                            <p className="mb-2 font-text text-gray-500 dark:text-gray-400">Elige tus app favoritas</p>
                                            <a className=" mb-3 inline-flex items-center text-blue-600 hover:underline">
                                                <Link to={'/page404'}>Television</Link>
                                                <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                            </a>
                                        </div>






                                    </div>
                                ) : (
                                    ""
                                )}
                                Servicios
                                <span className="ml-2" onClick={() => setProduct(!product)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </span>
                            </li>
                            <li className="cursor-pointer h-full flex items-center text-base text-gray-800 tracking-normal relative border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-500">
                                {deliverables ? (
                                    <ul href="" className="bg-white  rounded-2xl font-text shadow  justify-start grid gap-3 px-10  py-5 w-screen grid-cols-5   mt-24  absolute  top-0">
                                        <div class="p-6 bg-white border w-64 h-72 border-gray-200 rounded-2xl px-5 shadow-md border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-500 hover-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                                            < IoWifiSharp className="h-10 w-10" />
                                            <a href="/page404">
                                                <h5 className="mb-2 text-xl font-title tracking-tight text-gray-900 dark:text-white">Conocenos</h5>
                                            </a>
                                            <p className="mb-2 font-text text-gray-500 dark:text-gray-400">Mision y Vision</p>
                                            <a className="inline-flex items-center text-blue-600 hover:underline">
                                                <Link to={'/crc'}>Grupo Colnet</Link>
                                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                            </a>
                                        </div>

                                        <div class="p-6 bg-white border w-64 h-72 border-gray-200 rounded-2xl px-5 shadow-md border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-500 hover-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                                            <IoLibrarySharp className="h-10 w-10" />
                                            <a href="/crc">
                                                <h5 className="mb-2 text-xl font-title tracking-tight text-gray-900 dark:text-white">Regulacion CRC</h5>
                                            </a>
                                            <p className="mb-2 font-text text-gray-500 dark:text-gray-400">Comision Regulacion de Comunicaciones</p>
                                            <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                                                <Link to={'/crc'}>CRC</Link>
                                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                            </a>
                                        </div>

                                        <div class="p-6 bg-white border w-64 h-72 border-gray-200 rounded-2xl px-5 shadow-md border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-500 hover-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                                            < IoLockClosed className="h-10 w-10" />
                                            <a href="/habeasdata">
                                                <h5 className="mb-2 text-xl font-title tracking-tight text-gray-900 dark:text-white">Tratamiento de Datos</h5>
                                            </a>
                                            <p className="mb-2 font-text text-gray-500 dark:text-gray-400">Habeas Data</p>
                                            <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                                                <Link to={'/habeasdata'}>Tratamiento de datos</Link>
                                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                            </a>
                                        </div>




                                    </ul>
                                ) : (
                                    ""
                                )}
                                Quienes Somos
                                <span className="ml-2" onClick={() => setDeliverables(!deliverables)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </span>
                            </li>

                            <li className="cursor-pointer font-title px-5 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-500 h-full w-auto flex items-center text-base text-gry-800 mr-10 tracking-normal"><Link to={'/cobertura'}>Cobertura</Link></li>

                        </ul>


                    </div>
                    <div className="h-full xl:flex hidden items-center justify-end">
                        <div className="h-full flex items-center">
                            <div className="w-32 pr-16 h-full flex items-center justify-end" />
                            <div className="w-full h-full flex items-center justify-between">


                                <h2 className="cursor-pointer h-full flex items-center text-base text-gry-800 mx-10 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-500 tracking-normal relative">Paga tu factura</h2>
                                <img className="w-16 h-16" src={pse} />








                            </div>

                        </div>
                    </div>
                    <div className="visible xl:hidden flex items-center">
                        <div>
                            <div id="menu" className="text-gray-800" onClick={() => setShow(!show)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={4} y1={6} x2={20} y2={6} />
                                    <line x1={4} y1={12} x2={20} y2={12} />
                                    <line x1={4} y1={18} x2={20} y2={18} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}

