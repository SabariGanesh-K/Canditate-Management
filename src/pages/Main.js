import React from 'react'
import { Routes, Route} from "react-router-dom";

import { RegisterEntity } from './Registerations/RegisterEntity';
import { AddProposal } from './Registerations/AddProposal';

import { GeneralDisputes } from './Registerations/GeneralDisputes';
import { RegisterFreelance } from './Registerations/RegisterFreelance';
import { Home } from './Home/Home';
import { Dashboard } from './Dashboard/Dashboard';

export const Main = () => {
  return (
    <div>


<Routes>
            <Route path="/home" element={<Home />} />
           <Route path = "/addfreelancer" element = {<RegisterFreelance/>}/>
           <Route path = "/propose" element = {<AddProposal/>}/>
           <Route path = "/addentity" element = {<RegisterEntity/>}/>
           <Route path = "/dashboard" element = {<Dashboard/>}/>
       
     
        
           <Route path = "/disputes" element = {<GeneralDisputes/>} />
            <Route path="*" element={<Home />} />
          </Routes>

    </div>
  )
}
