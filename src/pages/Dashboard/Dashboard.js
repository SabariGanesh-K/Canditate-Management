import { Button, ButtonGroup } from '@mui/material'
import React, { useContext, useState } from 'react'
import { FireBaseContext } from '../../context/FireBaseConfig'
import { Header } from '../Home/Header'
import { Content } from './Content'
import { grey } from '@mui/material/colors';
export const Dashboard = () => {
  const colo = grey[50];
    const {registerError,loggedIn} = useContext(FireBaseContext);
    const [slide,setslide] = useState("chat");
  return (
    <div className='overflow-y-hidden min-h-screen'>
    <div  className='bg-[#6d62ff] '>
<Header/>
{ (!registerError && loggedIn)&& <div className='flex flex-row '>
<ButtonGroup
        orientation="vertical"
        color='inherit'
        className='text-white'
        aria-label="vertical outlined   button group"
      >
         <Button contained onClick={()=>setslide("chat")} key="one">Dashboard</Button>
  <Button onClick={()=>setslide("team")} key="two">Participants</Button>
  <Button  key="three">Info</Button>
  <Button onClick={()=>setslide("tasks")}  key = "four">Tasks</Button>
  <Button key = "five">Announcements</Button>

  

      </ButtonGroup>
 
<div className='w-[80%] bg-black '>
    <Content slide = {slide} setslide = {setslide}/>
    </div>
</div>}

{registerError && loggedIn   &&  
<div>No Entity available.Contact admin for more.</div>
}

    </div>
    </div>
  )
}
