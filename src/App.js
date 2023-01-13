
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Pdf from "./pdf/Pdf";
import Pdf2 from "./pdf/Pdf2";
import Pdf3 from "./pdf/Pdf3";
import Pdf4 from "./pdf/Pdf4";
import Pdf6 from "./pdf/Pdf6";
import Pdf7 from "./pdf/Pdf7";
import Pdf8 from "./pdf/Pdf8";


import Cobertura2 from "./menuNavBar/Cobertura2";
import Crc2 from "./menuNavBar/Crc2";
import HabeasData2 from "./menuNavBar/HabesData2";
import Precios2 from "./menuNavBar/Precios2";
import Internet2 from "./menuNavBar/Internet2";
import Pdf5 from "./pdf/Pdf5";
import Failed404 from "./components/Failed404";
import Failed4042 from "./components/Failed4042";
import Internet from "./menuNavBar/Contact";
import Contact2 from "./menuNavBar/Contact2";


export default function App() {
    const [user, setUser] = React.useState(null);


    return (
        <>
        <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/precios" element={<Precios2 />} />
          <Route path="/internet" element={<Internet2 />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cobertura" element={<Cobertura2 />} />
          <Route path="/habeasdata" element={<HabeasData2/>} />
          <Route path="/crc" element={<Crc2/>} />
          <Route path="/pdf" element={<Pdf/>} />
          <Route path="/pdf2" element={<Pdf2/>} />
          <Route path="/pdf3" element={<Pdf3/>} />
          <Route path="/pdf4" element={<Pdf4/>} />
          <Route path="/pdf5" element={<Pdf5/>} />
          <Route path="/pdf6" element={<Pdf6/>} />
          <Route path="/pdf7" element={<Pdf7/>} />
          <Route path="/pdf8" element={<Pdf8/>} />
          <Route path="/page404" element={<Failed4042/>} />
          <Route path="/contact" element={<Contact2/>} />

          
            </Routes>

            </BrowserRouter>
        </>
    );
}
