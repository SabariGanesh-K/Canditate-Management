import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export const Tasks = () => {
    const rows = [{name:'Deploy backend',assign:['Sabari K','Elon Musk'],due:'December 31,2022',status:'In Progress'},
    {name:'Deploy middleware',assign:['Elon Musk'],due:'December 30,2022',status:'Done'}]
  return (  
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Task</TableCell>
          <TableCell align="center">Assign</TableCell>
          <TableCell align="center">Due</TableCell>
          <TableCell align="center">Status</TableCell>
        
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row,id) => (
          <TableRow
            key={id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.assign.map((item)=>{
                
                return(
                    <div className='text-center'>{item}</div>
                )
            })}</TableCell>
            <TableCell align="center">{row.due}</TableCell>
            <TableCell align="center">{row.status} </TableCell>
        
          </TableRow>
        ))}
      </TableBody>

      
    </Table>
  </TableContainer>
  )
}
