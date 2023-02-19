import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react'
var relativeTime = require('dayjs/plugin/relativeTime')

import { FireBaseContext } from '../context/FireBaseConfig'
export const MessageBox = (props) => {
    // dayjs.extend(rel)
    dayjs.extend(relativeTime)
    let timwe = dayjs(props.time).fromNow()
    const {usermail} = useContext(FireBaseContext);
    const[dir,setdir] = useState('start')
    useEffect(()=>{
        if(props.mail===usermail){
            setdir('end')
            // alert("true")
        }
    },[])
          
  return (
    <div className={`flex flex-row justify-${dir}`}>
    <div className='w-3/5 p-1 m-1  bg-blue-400 rounded-2xl'>
        <div className='text-start font-bold'>{props.by}</div>
        <div>{props.txt}</div>
   <div className='text-end animate-pulse'>{timwe}</div>
    </div>
    </div>
  )
}
