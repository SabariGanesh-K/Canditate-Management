import React,{useState} from 'react'
import { Header } from '../Home/Header'
import { Alert, Button, Snackbar, TextField } from '@mui/material'
import { NavLink } from 'react-router-dom'
export const RegisterFreelance = () => {
  const [Name, setName] = useState("")
  const [Prev1, setPrev1] = useState("")
  const [Prev2, setPrev2] = useState("")
  const [Skills, setSkills] = useState(["webdev"]);
  const [newSkill, setNewSkill] = useState("")
  const [open, setOpen] = useState(false);
  const handleRemove = (toBeRemoved) =>{
    
    let tmp = [];
    for (var i=0;i<Skills.length;i++){
      if(Skills[i]!==toBeRemoved){
        tmp.push(Skills[i]);
      }
    }
    setSkills(tmp);
    console.log(tmp)
  }

  const handleAdd = () =>{
    for (var i=0;i<Skills.length;i++){
      if(Skills[i].toLowerCase()===newSkill.toLowerCase()){
        setOpen(true);
        setNewSkill("");
        return
      }
    }
    let tmp  =Skills;
    tmp.push(newSkill);
    setSkills(tmp);
    setNewSkill("");
    return;

  }
  const handleClose = () => {
   setOpen(false);
  };
  return (
    <div>
 
      <div className='bg-black'>
      <Header/>
        <br/><br/>
        <div className='text-slate-900 font-extrabold text-2xl sm:text-3xl lg:text-3xl tracking-tight text-center '>
        SIGNUP : FREELANCER

    </div>
    <br/><br/><br/>
    <div className='flex flex-row justify-center'>
    <div className='flex flex-col justify-between w-5/6 bg-primary-4 p-5'>
    <TextField
          id="standard-textarea"
          value={Name}
          onChange={(e)=>setName(e.target.value)}
          label=" Name"
          placeholder="Your Name"
          multiline
          variant="standard"
        />
        <br/><br/>
         <TextField
          id="standard-textarea"
          label="Previous work 1"
          value={Prev1}
          onChange={(e)=>setPrev1(e.target.value)}
          placeholder="Enter any 1 previous work"
          multiline
          variant="standard"
        />
         <br/><br/>
         <TextField
          id="standard-textarea"
          label="Previous work 2"
          value={Prev2}
          onChange={(e)=>setPrev2(e.target.value)}
          placeholder="Enter another previous work"
          multiline
          variant="standard"
        />

        <br/><br/>
        <div className='flex flex-row justify-evenly flex-wrap w-full'>
        {Skills.map((item,k)=>{
return(
<div  className='bg-primary-4 p-2 rounded-lg flex flex-row  mt-2 cursor-pointer' key = {k}>{item}  <div  onClick={()=>handleRemove(item)} className='ml-2 hover:text-black  text-red-800 font-bold'>X</div>    </div>
)
        })}



</div>
<br/>
<div className='flex flex-row justify-center flex-wrap'>
<TextField  value={newSkill}  onChange={(e)=>setNewSkill(e.target.value)} id="outlined-basic" label="New skill" variant="outlined" />
<Button variant="text"  onClick={handleAdd} >ADD</Button>
</div>
    </div>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Skill already exist!
        </Alert>
      </Snackbar>
    </div>

<br/><br/>
  <NavLink to ="/community"> <Button variant="contained">
  REGISTER
</Button></NavLink> 
</div>
    </div>
  )
}
