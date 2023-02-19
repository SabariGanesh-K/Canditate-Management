import React,{useContext, useEffect, useState} from 'react'
import { Header } from '../Home/Header'
import { Alert, Button, Snackbar, TextField } from '@mui/material'
import uuid from 'react-uuid';
import { redirect } from "react-router-dom";
import { FireBaseContext } from '../../context/FireBaseConfig';
export const RegisterEntity = () => {
    const [EntityName, setEntityName] = useState("");
    const [EntityWebsite, setEntityWebsite] = useState("");
    const [EntityMail, setEntityMail] = useState("")
    const [Skills, setSkills] = useState(["webdev"]);
    const [newSkill, setNewSkill] = useState("");
    const [AdminName, setAdminName] = useState("");
    const [AdminMail, setAdminMail] = useState("");
    const [AdminRole, setAdminRole] = useState("");
    const [AdminSalary, setAdminSalary] = useState("");
    const [open, setOpen] = useState(false);
    const [EntityClipOpen, setEntityClipOpen] = useState(false);
    const [uuid_generated, setuuid_generated] = useState("")
    const [CreateEntityLoading, setCreateEntityLoading] = useState(false)
    const {createEntity} = useContext(FireBaseContext)
    useEffect(() => {
        let tmp = uuid()
        setuuid_generated(tmp);
    
     
    }, [])
  
   const handleCreateEntity = async() =>{
      setCreateEntityLoading(true);
      await createEntity(uuid_generated,EntityName,EntityWebsite, EntityMail,AdminName,AdminRole,AdminMail,AdminSalary);
      setCreateEntityLoading(false);
      redirect('/dashboard')
      
   }
    const handleCopyEntity = () =>{
        setEntityClipOpen(true);
        navigator.clipboard.writeText(uuid_generated)
    }
    const handleEntityClipClose = () =>{
        setEntityClipOpen(false);
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
  return (
    <div>
 
    <div className='bg-white '>
    <Header/>
      <br/><br/>
      <div className='text-slate-900 font-extrabold text-2xl sm:text-3xl lg:text-3xl tracking-tight text-center '>
      REGISTER : ENTITY

  </div>
  <br/><br/>
  <div className='flex flex-row justify-center'>
    <div className='flex flex-col justify-between w-5/6 bg-primary-4 p-5'>
    <TextField
          id="standard-textarea"
          value={EntityName}
          onChange={(e)=>setEntityName(e.target.value)}
          label="Organization"
          placeholder="Organization registered Name"
          multiline
          variant="standard"
        />
        <br/><br/>
        <TextField
          id="standard-textarea"
          value={EntityMail}
          onChange={(e)=>setEntityMail(e.target.value)}
          label="Organization mail"
          placeholder="Organization email Id"
          multiline
          variant="standard"
        />
        <br/><br/>
        <TextField
          id="standard-textarea"
          value={EntityWebsite}
          onChange={(e)=>setEntityWebsite(e.target.value)}
          label=" Organization website"
          placeholder="Link to your website"
          multiline
          variant="standard"
        />
        <br/><br/>
        <div onClick={ handleCopyEntity} className='bg-slate-900 p-2 text-white rounded-full cursor-pointer hover:animate-pulse   font-mono text-xl'>{uuid_generated}</div>

        <br/><br/>
        <TextField
          id="standard-textarea"
          value={AdminName}
          onChange={(e)=>setAdminName(e.target.value)}
          label="Admin name"
          placeholder="Admin name"
          multiline
          variant="standard"
        />
        <br/><br/>
        <TextField
          id="standard-textarea"
          value={AdminMail}
          onChange={(e)=>setAdminMail(e.target.value)}
          label="Admin Mail Id"
          placeholder="Admin's mail id (organization mail preferred)"
          multiline
          variant="standard"
        />
        <br/><br/>
        <TextField
          id="standard-textarea"
          value={AdminRole}
          onChange={(e)=>setAdminRole(e.target.value)}
          label="Admin Designation"
          placeholder="Admin's role / dept in organization"
          multiline
          variant="standard"
        />
        <br/><br/>
        <TextField
          id="standard-textarea"
          value={AdminSalary}
          onChange={(e)=>setAdminSalary(e.target.value)}
          label="Admin Pay"
          placeholder="Admin's pay (Approximate)"
          multiline
          variant="standard"
        />
        <br/><br/>
        {/* <div className='flex flex-row justify-evenly flex-wrap w-full'>
        {Skills.map((item,k)=>{
return(
<div  className='bg-primary-4 p-2 rounded-lg flex flex-row  mt-2 cursor-pointer' key = {k}>{item}  <div  onClick={()=>handleRemove(item)} className='ml-2 hover:text-black  text-red-800 font-bold'>X</div>    </div>
)
        })}



</div>
<br/> */}
{/* <div className='flex flex-row justify-center flex-wrap'>
<TextField  value={newSkill}  onChange={(e)=>setNewSkill(e.target.value)} id="outlined-basic" label="New skill" variant="outlined" />
<Button variant="text"  onClick={handleAdd} >ADD</Button>
</div>
<br/><br/> */}
{ CreateEntityLoading ? <Button variant="contained" className='cursor-not-allowed'>Registering...</Button> : <Button onClick={handleCreateEntity} className='cursor-pointer' variant="contained">
  STAKE AND REGISTER ENTITY
</Button>}
    </div>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Skill already exist!
        </Alert>
      </Snackbar>
      <Snackbar open={EntityClipOpen} autoHideDuration={3000} onClose={handleEntityClipClose}>
        <Alert onClose={handleEntityClipClose} severity="success" sx={{ width: '100%' }}>
          Entity Id copied to clipboard !!
        </Alert>
      </Snackbar>
    </div>

<br/><br/>


        </div>
        </div>


  )
}
