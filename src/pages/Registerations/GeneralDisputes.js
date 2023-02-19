import React, { useState } from 'react'
import { Header } from '../Home/Header';
import { Snackbar,Alert,Button,TextField } from '@mui/material';
export const GeneralDisputes = () => {
    const [AddressClipOpen,setAddressClipOpen] = useState(false);
    const [disputes,SetDisuptes] = useState([{title:"Inactive responses",by:'0x5c1a4F5AE38D4199868D53ad28B1095930a1485D',desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",evidence:'https://faucet.fantom.network',yes:0,no:1},
    {title:"Inactive responses",by:'0x5c1a4F5AE38D4199868D53ad28B1095930a1485D',desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",evidence:'https://faucet.fantom.network',yes:0,no:1},
    {title:"Inactive responses",by:'0x5c1a4F5AE38D4199868D53ad28B1095930a1485D',desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",evidence:'https://faucet.fantom.network',yes:0,no:1},
    
])
const [NewDisputeTitle, setNewDisputeTitle] = useState("");
const [NewDisputeDesc, setNewDisputeDesc] = useState("");
const [NewDisputeEvid,setNewDisputeEvid] = useState("");
const [AddDisputeOpen, setAddDisputeOpen] = useState(false)
const handleCopyAddress = (item) =>{
    setAddressClipOpen(true);
    navigator.clipboard.writeText(item);
}
const handleAddressClipClose = () =>{
    setAddressClipOpen(false);
}
  return (
    <div className='bg-black '>
<Header/>
<br/><br/>

<div className='text-slate-900 font-extrabold text-2xl sm:text-3xl lg:text-3xl tracking-tight text-center '>
        DISPUTES

    </div>
<br/><br/>
{!AddDisputeOpen&&<div className='flex flex-row justify-center'>
<Button variant="contained" onClick={()=>setAddDisputeOpen(true) } >Add a Dispute</Button>
</div>}
{AddDisputeOpen&&<div className='flex flex-row justify-end'>
<Button variant="contained" onClick={()=>setAddDisputeOpen(false) } >Close</Button>
</div>}

<br/><br/>
{ AddDisputeOpen && <div className='flex flex-row justify-center'>  <div className='flex flex-col w-5/6 border border-slate-900 p-1'>
  <TextField
          id="standard-textarea"
          value={NewDisputeTitle}
          onChange={(e)=>setNewDisputeTitle(e.target.value)}
          label=" Title"
          placeholder="Enter Dispute title"
          multiline
          variant="standard"
        />
        <br/><br/>
         <TextField
          id="standard-textarea"
          label="Dispute statement"
          value={NewDisputeDesc}
          onChange={(e)=>setNewDisputeDesc(e.target.value)}
          placeholder="Describe your issue / problem statement"
          multiline
          variant="standard"
        />
         <br/><br/>
         <TextField
          id="standard-textarea"
          label="Evidence"
          value={NewDisputeEvid}
          onChange={(e)=>setNewDisputeEvid(e.target.value)}
          placeholder="Enter a link to show evidence "
          multiline
          variant="standard"
        />
        <br/>
        <Button variant="contained">
  ADD DISPUTE
</Button>
</div> </div> }
<br/><br/>
    {disputes.map((item,k)=>{



        
 return(  
    <div className='flex flex-row justify-center mt-2 '> <div key={k} className='w-5/6 border border-slate-800 bg-primary-4 rounded-lg'>
    <div className='text-black font-mono text-2xl'>{item.title}</div>
  <div className='flex flex-row justify-center'> <div className='text-gray-600 font-mono text-xl'>by  </div>  <div onClick={ ()=>handleCopyAddress(item.by)} className='hover:bg-slate-900 p-2 text-black font-bold hover:text-white rounded-full cursor-pointer hover:animate-pulse  font-mono text-sm'>{item.by.slice(0, 6)}...{item.by.slice(39)}</div></div> 
  <div className='text-gray-600  font-mono text-xl'>{item.desc}  </div>
  <Button color="secondary">View Evidence</Button>

<div className='flex flex-row justify-evenly'>
  
<div className='flex flex-row justify-center'>
    <Button variant="contained" color="primary">
  FOR
</Button>
<div className='text-xl ml-1 '>{item.yes} </div>
</div>
<div className='flex flex-row justify-center'>

<Button variant="contained" color="primary">
  AGAINST
</Button>
<div className='text-xl ml-1 '>{item.no}</div>

</div>

</div>
<br/>
</div>
</div>)
    })}
  




    <Snackbar open={AddressClipOpen} autoHideDuration={3000} onClose={handleAddressClipClose}>
        <Alert onClose={handleAddressClipClose} severity="success" sx={{ width: '100%' }}>
          Member Address copied to clipboard !!
        </Alert>
      </Snackbar>

    </div>
  )
}
