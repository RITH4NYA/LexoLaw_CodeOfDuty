import React from "react";
import { Routes, Route } from "react-router-dom";
import Lexo from "../src/Component/Home";
import OurServices from "./Component/Service";
import LawyerServices from "../src/Component/Lawyers";   
import Documents from "../src/Component/Documents";
import GeminiAIChat from "./Component/Ai";
import LawyerPage from "./Component/LawyerPage";
import About from "./Component/About";
import Criminal from "./Component/CriminalPage";
import Coperate from "./Component/Co-operate";
import Constitute from "./Component/Constitutional"
import Divorce from "./Component/DivorceLaw"
import Employment from "./Component/Employement";
import Labour from "./Component/Labour";
import Estate from "./Component/Esatate";
import Immigration from "./Component/Immigration"
import Tax from "./Component/Tax"
import { Signup } from "./Component/SignUP";
import BondAgreementForm from "./Component/Bond";

const App = () => {
  return (
   
      <Routes>
        <Route path="/lexo" element={<Lexo/>} />
        <Route path="/Service" element={<OurServices/>}/>
        <Route path="/lawyer" element={<LawyerServices/>}/>
        <Route path="/Document" element={<Documents/>}/>
        <Route path="/ai" element={<GeminiAIChat/>} />
        <Route path="/LawPage" element={<LawyerPage/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/lawyers" element={<Criminal/>}/>
        <Route path="/Cop" element={<Coperate/>}/>
        <Route path="/Con" element={<Constitute/>}/>
        <Route path="/Div" element={<Divorce/>}/>
        <Route path="/Em" element={<Employment/>}/>
        <Route path="/lab" element={<Labour/>}/>
        <Route path="/Est" element={<Estate/>}/>
        <Route path="/Imm" element={<Immigration/>}/>
        <Route path="/Tax" element={<Tax/>}/>
        <Route path="/Sig" element={<Signup/>}/>
        <Route path="/Bond" element={<BondAgreementForm/>}/>
        
        

        
        {/* Add more routes here if needed */}
      </Routes>
    
  );
};

export default App;