import React from 'react'
import { Routes, Route} from "react-router-dom";

import { RegisterEntity } from './Registerations/RegisterEntity';
import { AddProposal } from './Registerations/AddProposal';

import { GeneralDisputes } from './Registerations/GeneralDisputes';
import { RegisterFreelance } from './Registerations/RegisterFreelance';
import { Home } from './Home/Home';
export const Landing = () => {
  return (
    <div>


    <Routes>
                <Route path="/home" element={<Home />} />
             
              </Routes>
    
        </div>
  )
}
