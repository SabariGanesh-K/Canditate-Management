import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../Home/Header'

export const Dashboard = () => {
  const [PrevProjs,setPrevProjs]= useState([{title:"Megacapital",budget:"2",duration:"7",skills:["webdev","reactjs","alchemy","NFTs"]},
  {title:"FundAllocater",budget:"3",duration:"7",skills:["webdev","nextjs","moralis","De-fi"]},
  {title:"METAwerse",budget:"1",duration:"3",skills:["nextjs","reactjs","moralis","DE-FI"]},
  {title:"Akanshverse",budget:"5",duration:"10",skills:["appdev","react-native","walletconnect","Aeternity"]}]);
  return (
    <div>

<div className='bg-black '>
<Header/>
<br/><br/>
<div className='text-slate-900 font-extrabold text-2xl sm:text-3xl lg:text-3xl tracking-tight text-center '>
        Dashboard

    </div>
<br/>
<div className='flex flex-row justify-evenly'>
<NavLink to = "/entity"><button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Your Entity 🚀</button></NavLink>
<NavLink to = "/disputes"><button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">View Community Disputes ⚠️</button></NavLink>
</div>

<br/><br/>
    <div className='flex flex-row justify-center flex-wrap'>
      {PrevProjs.map((item,k)=>{
        return(
          <div  key = {k} className='w-5/6 border border-slate-800'>
          <div className='text-black font-mono text-2xl'>{item.title}</div>
          <div className='text-gray-600 font-mono text-xl'>{item.budget} ETH in {item.duration} Days</div>
          
          <div className='flex flex-row m-3 p-3 flex-wrap w-full'>
          {item.skills.map((item,k)=>{
          return(
          <div  className='bg-primary-4 p-2 ml-3 rounded-lg flex flex-row  mt-2 cursor-pointer' key = {k}>{item.toLowerCase()}    </div>
          )
                  })}
                  </div>
              </div>
        )
      })}
   


    </div>
    <br/><br/>

</div>


    </div>
  )
}
