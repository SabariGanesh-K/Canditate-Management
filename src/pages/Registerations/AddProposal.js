import React,{useState} from 'react'
import { Header } from '../Home/Header';
import { TextField,Button,Snackbar,Alert } from '@mui/material';
export const AddProposal = () => {
    const [ProjName, setProjName] = useState("");
    const [Budget, setBudget] = useState(0);
    const [TimeNeeded, setTimeNeeded] = useState("");
    const [PdfLink, setPdfLink] = useState("");
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
    
      <div className='bg-black '>
      <Header/>
        <br/><br/>
        <div className='text-slate-900 font-extrabold text-2xl sm:text-3xl lg:text-3xl tracking-tight text-center '>
        PROPOSE : OUTSOURCE PROJECTS

    </div>
    <br/><br/><br/>
    <div className='flex flex-row justify-center'>
    <div className='flex flex-col justify-between w-5/6 bg-primary-4 p-5'>
    <TextField
          id="standard-textarea"
          value={ProjName}
          onChange={(e)=>setProjName(e.target.value)}
          label=" Project name"
          placeholder="Project name"
          multiline
          variant="standard"
        />
        <br/><br/>
         <TextField
          id="standard-textarea"
          type="number"
          label="Budget(in ETH)"
          value={Budget}
          onChange={(e)=>setBudget(e.target.value)}
          placeholder="Budget(in ETH)"
          multiline
          variant="standard"
        />
         <br/><br/>
         <TextField
          id="standard-textarea"
          label="Time needed"
          value={TimeNeeded}
          onChange={(e)=>setTimeNeeded(e.target.value)}
          placeholder="Time needed (in Days)"
          multiline
          variant="standard"
        />
                 <br/><br/>
         <TextField
          id="standard-textarea"
          label="Task Documentation "
          value={PdfLink}
          onChange={(e)=>setPdfLink(e.target.value)}
          placeholder="Tasks Documentation PDF link"
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
    <Button variant="contained">
  PROPOSE
</Button>
</div>
    </div>
  )
}
