import React, { useContext, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FireBaseContext } from '../../context/FireBaseConfig';
import { Alert, Button, Modal, Snackbar, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
export const Participants = () => {
//     const rows = [{name:"Sabari Ganesh ",mail:'k.sabarii.ganesh@gmail.com',admin:true,role:'Board',salary:90000,priority:1},
//     {name:"Elon Musk ",mail:'k.sabarii.ganesh4.0@gmail.com',admin:false,role:'Backend',salary:40000,priority:2}
// ]
const [open, setOpen] = React.useState(false);
const [MemberName, setMemberName] = useState("");
const [MemberMail, setMemberMail] = useState("");
const [MemberRole, setMemberRole] = useState("");
const [MemberSalary, setMemberSalary] = useState("");
const [addLoading,setAddLoading] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const [EntityClipOpen, setEntityClipOpen] = useState(false);
const {entityId,EmployeesList,addMember} = useContext(FireBaseContext);
const rows = EmployeesList;
const handleCopyEntity = () =>{
    setEntityClipOpen(true);
    navigator.clipboard.writeText(entityId)
}
const handleEntityClipClose = () =>{
    setEntityClipOpen(false);
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'black',
  color:'white',
  border: '2px solid white',
  borderRadius:'2xl',
  boxShadow: 24,
  p: 4,
};
const handleAddMember = async() =>{
  setAddLoading(true);
  await addMember(MemberName,MemberMail,MemberRole,MemberSalary);
  setMemberName("");
  setMemberMail("")
  setMemberRole("")
  setMemberSalary("")
  setAddLoading(false);


}
  return (
    <div className='text-white'>

<div>Team Info   </div>
<div onClick={ handleCopyEntity} className='bg-slate-900 p-2 text-white rounded-full cursor-pointer hover:animate-pulse   font-mono text-xl'>{entityId}</div>

  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">MailID</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Rating</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.mail}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right">3.5</TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
<br/><br/>
    <button onClick={handleOpen} className='border-white-2 border-2 p-2 hover:bg-white  hover:text-black'>  + Add members</button>
   
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography className='bg-black p-1 rounded-sm text-center' id="modal-modal-title" variant="h6" component="h1">
      Enter details of Member
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <TextField
          id="standard-textarea"
          value={MemberName}
          onChange={(e)=>setMemberName(e.target.value)}
          label="Member name"
          placeholder="Member name"
          multiline
          variant="standard"
          className='w-full  bg-white'
        />
        <br/><br/>
        <TextField
          id="standard-textarea"
          value={MemberMail}
          onChange={(e)=>setMemberMail(e.target.value)}
          label="Member Mail Id"
          placeholder="Member's mail id (organization mail preferred)"
          multiline
          variant="standard"
          className='w-full  bg-white'
        />
        <br/><br/>
        <TextField
          id="standard-textarea"
          value={MemberRole}
          onChange={(e)=>setMemberRole(e.target.value)}
          label="Member Designation"
          placeholder="Member's role / dept in organization"
          multiline
          variant="standard"
          className='w-full  bg-white'
        />
        <br/><br/>
        <TextField
          id="standard-textarea"
          value={MemberSalary}
          onChange={(e)=>setMemberSalary(e.target.value)}
          label="Member Pay"
          placeholder="Member's pay (Approximate)"
          multiline
          variant="standard"
          className='w-full  bg-white'
        />
        <br/><br/>
    </Typography>
    <div className='flex flex-row justify-center'>
    { addLoading? <Button  className = 'cursor-not-allowed' type='outlines'>ADDING..</Button>  : <Button onClick={handleAddMember} className='cursor-pointer' type='outlines'>ADD MEMBER</Button>}
    </div>
  </Box>
</Modal>
    <Snackbar open={EntityClipOpen} autoHideDuration={3000} onClose={handleEntityClipClose}>
        <Alert onClose={handleEntityClipClose} severity="success" sx={{ width: '100%' }}>
          Entity Id copied to clipboard !!
        </Alert>
      </Snackbar>
    </div>
  )
}
