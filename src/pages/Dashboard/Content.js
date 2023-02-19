import React ,{useContext, useState}from 'react'
import Scroll from 'react-scroll';
import { MessageBox } from '../../components/MessageBox';
import { TextField,Button } from '@mui/material';
import { FireBaseContext } from '../../context/FireBaseConfig';
import { Participants } from './Participants';
import { Tasks } from './Tasks';

export const Content = (props) => {
    var Element = Scroll.Element;
    // const [Messages,setMessages] = useState([]);
    const [NewMessage, setNewMessage] = useState("")
    const {Messages,sendMessage} = useContext(FireBaseContext);
    const [load,setload] = useState(false);

 const handleSendMessage=async()=>{
    setload(true);
   await sendMessage(NewMessage)
   setNewMessage("")
   setload(false);
 }
    
  return (
    <div className='bg-white h-screen text-white overscroll-auto'>
          
       
{ props.slide=='chat' &&<> <Element name="test7" className="element h-[90%]" id="containerElement" style={{
          position: 'relative',

          overflow: 'scroll',
        //   marginBottom: '100px'
        }}>
          {/* test 7 (duration and container) */}
          {Messages.length>0 && Messages.map((item,k)=>{
            return(
                <div key = {k}>
                       <Element name="firstInsideContainer" style={{
         
        }}>
          <MessageBox txt ={item.txt}  mail={item.mail} time= {item.time} by = {item.by} />
        </Element>
                </div>
            )
          })}

       


          {/* <Element name="firstInsideContainer" style={{
         
          }}>
            <MessageBox txt = "Hello alll ...blah blah blahasdxasx casas as.blah blah blahasdxasx casas .blah blah blahasdxasx casas .blah blah blahasdxasx casas .blah blah blahasdxasx casas .blah blah blahasdxasx casas .blah blah blahasdxasx casas .blah blah blahasdxasx casas .blah blah blahasdxasx casas "  by="Sabari Ganesh"  mail="k.sabarii.ganesh@gmail.com" time="2022-12-25T11:04:00.945Z"/>
          </Element>
          <Element name="firstInsideContainer" style={{
            // marginBottom: '200px'
          }}>
            <MessageBox txt = "Hello ldxasx casas "  by="Krish"  mail="k.sabarii.ganesh2.0@gmail.com" time="2022-12-25T11:04:41.945Z"/>
            
          </Element>
          <Element name="firstInsideContainer" style={{
            // marginBottom: '200px'
          }}>
                       <MessageBox txt = "Holaa casas "  by="Musk"  mail="k.sabarii.ganesh@gmail.com" time="2022-12-25T11:04:42.945Z"/>

          </Element>
          <Element name="firstInsideContainer" style={{
            // marginBottom: '200px'
          }}>
                       <MessageBox txt = "Hiiiii "  by="Ganesh K"  mail="k.sabarii.ganesh@gmail.com" time="2022-12-25T11:04:47.945Z"/>

          </Element>
          <Element name="firstInsideContainer" style={{
            // marginBottom: '200px'
          }}>
                       <MessageBox txt = "Hello alll ....once again "   by="Sabari Ganesh"  mail="k.sabarii.ganesh@gmail.com" time="2022-12-25T11:04:47.945Z"/>

          </Element>
          <Element name="firstInsideContainer" style={{
            // marginBottom: '200px'
          }}>
                       <MessageBox txt = "Hello !!!"  by="Gates"  mail="k.sabarii.ganeshdx@gmail.com" time="2022-12-25T11:04:48.945Z"/>

          </Element>
          <Element name="firstInsideContainer" style={{
            // marginBottom: '200px'
          }}>
                       <MessageBox txt = "knowledgie is power "  by="Peter parker"  mail="k.sabarii.ganeshx@gmail.com" time="2022-12-25T11:04:48.945Z"/>

          </Element>
          <Element name="firstInsideContainer" style={{
            // marginBottom: '200px'
          }}>
                       <MessageBox txt = "Hello alll ...blah blah blahasdxasx casas as.blah blah blahasdxasx casas .blah blah blahasdxasx casas .blah blah blahasdxasx casas .blah blah blahasdxasx casas .blah blah blahasdxasx casas .blah blah blahasdxasx casas .blah blah blahasdxasx casas .blah blah blahasdxasx casas "  by="Sabari Ganesh"  mail="k.sabarii.ganesh@gmail.com" time="2022-12-25T11:04:48.945Z"/>

          </Element> */}
          

          
          
        </Element>
        <div className='flex flex-row m-1 BORDER-2 border-white text-white'>
    <TextField
          id="standard-textarea"
          className='w-full m-2 text-white bg-neutral-700  p-2'
          value={NewMessage}
          onChange={(e)=>setNewMessage(e.target.value)}
          label="Message"
          
          placeholder="Chat with the community"
          multiline
          variant="standard"
        />
        <br/>
        { NewMessage.length==0&& !load&& <Button variant="contained" className='cursor-not-available'   >SEND</Button>}
        { NewMessage.length>0&& !load&&  <Button variant="contained" onClick={handleSendMessage}   >SEND</Button>}
        {load &&  <Button variant="contained" className='animated-pulse' >...</Button> }
</div></>}

{props.slide === "team" && <>

<Participants/>

</> }

{props.slide === "tasks" &&  <>
<Tasks/>
</>}









    </div>
  )
}
