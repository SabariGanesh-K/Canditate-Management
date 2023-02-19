

import React, { useState } from 'react'
import { useEffect } from 'react';
import { createContext } from 'react';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    deleteDoc,
    setDoc,
    orderBy,
    doc,
    getDoc,
    onSnapshot,
  } from "firebase/firestore";
  import { Timestamp } from 'firebase/firestore';
  import { serverTimestamp } from 'firebase/firestore';
  import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export  const FireBaseContext =  createContext();
export const FirebaseProvider = ({children})=>{
  const [InitialLoading,setInitalLoading] = useState(true)
    const [loggedIn,setLoggedIn] = useState(false);
    const [userName,setUserName] = useState("")
    const [usermail,setusermail] = useState("");
    const [userData,setUserData] = useState([{mail:"k.sabarii.ganesh@gmail.com",name:"Sabari Ganesh ",admin:true}]); 
    const [Messages,setMessages] = useState([]);
    const [EmployeesList, setEmployeesList] = useState([])
    const [entityId,setEntityId] = useState("");
    const [isAdmin,setIsAdmin] = useState(false);
    const [registerError,setRegisterError] = useState(false);
    const compName = "Valley"
 

    const firebaseConfig = {
      apiKey: process.env.REACT_APP_API_KEY ,
      authDomain: "pxp-management.firebaseapp.com",
      projectId: "pxp-management",
      storageBucket: "pxp-management.appspot.com",
      messagingSenderId: "321655550102",
      appId: "1:321655550102:web:ae2097a315e39abcb052b7",
      measurementId: "G-HEENLGHF4X"
    };
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);      
   
      const auth = getAuth(app);
  const   db = getFirestore(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, loading] = useAuthState(auth);

  const sendMessage = async(msg) =>{
        let tt = new Date();
    await addDoc(collection(db, "entity",entityId.toString(),"messages"), {
        txt:msg,
        mail:user.email,
        by: userName,
        time:tt.toString(),
        type:"text",
        servertime:tt.getTime()

      });
  }
///
  const createEntity = async(uuid,entityname,entitywebsite,entitymail,adminname,admindesig,adminmail,adminsalary) =>{
    
    //add doc with uuid in entity with entityname,website and admin nname,mail
    await setDoc(doc(db,"entity",uuid.toString()),{
      entityname:entityname,
      entitywebsite:entitywebsite,
      ownermail:adminmail,
      ownername:adminname,
    })
    
    //create collection  employees
    await addDoc(collection(db, "entity", uuid.toString(), "employees"), {
      name: adminname,
      mail:entitymail

    });

    //add doc with admin:true,prioirty:1,adminname,mail,rolw
    await setDoc(doc(db,"entity",uuid.toString(),"employees",adminmail.toString()),{
      admin:true,
      mail:adminmail,
      name:adminname,
      priority:1,
      role:admindesig,
      salary:adminsalary
      
    })
    let tt = new Date();
    //create message colelction with test data
    await addDoc(collection(db, "entity", uuid.toString(), "messages"), {
      by:adminname,
      mail:adminmail,
      servertime: tt.getTime(),
      time:tt.toString(),
      txt:"Group was created."



    });
    //create a doc in client colelction with admin:true,entityid,mail,name
    await setDoc(doc(db,"client",adminmail), {
      name: adminname,
      mail:adminmail,
      entityId:uuid.toString(),
      admin:true,
      


    });

  }

  const addMember = async(name,mail,role,salary)=>{
    if(true){
      //check if user registered
      EmployeesList.map((item)=>{
        if(item.mail === mail){
          return;
        }
        
      })
//create a doc in client colelction with admin:true,entityid,mail,name
await setDoc(doc(db,"client",mail), {
  name: name,
  mail:mail,
  entityId:entityId,
  admin:false,


});

      //add doc to employees with admin:false,prioirty:2,adminname,mail,role
      await setDoc(doc(db, "entity", entityId.toString(), "employees",mail), {
        admin:false,
        mail:mail,
        name:name,
        priority:2,
        role:role,
        salary:salary
  
  
      });
    }
  }

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(
        collection(db, "client"),
        where("mail", "==", user.email)
      );
      const docs = await getDocs(q);
      console.log(docs.docs.data);
      if (docs.docs.length === 0) {
        setRegisterError(true);
        const out = await signOut();
        // await signOut();
      } else {
        setusermail(user.email);
        
        setRegisterError(false);
        docs.forEach((item)=>{
          setEntityId(item.data().entityId);
          setUserName(item.data().name);
          setIsAdmin(item.data().admin)
        })
        setLoggedIn(true);
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  

    useEffect(()=>{
        const getUserEntityData = async () => {
            //fetch entityid - if empty setregister error

            //get entitymembers
            //get entitytasks
            let entity = "";
            if(!registerError   ){
              try {
                console.log(user.email)
                const q = query(
                  collection(db, "client"),
                  where("mail", "==", user.email)
                );
                const docs = await getDocs(q);
                console.log("dddd",docs);
                console.log("donyyee");
                if (docs.docs.length === 0) {
                  setRegisterError(true);
                  // const out = await signOut();
                  // await signOut();
                } else {
                  console.log("donyyee",docs.size);
                  setusermail(user.email);
                  // setUserName()
                  setLoggedIn(true);
                  setRegisterError(false);
                  // let dat = docs.docs.data;
                  // setEntityId(dat.entityId);
                  docs.forEach((item)=>{
                    setEntityId(item.data().entityId);
                    setUserName(item.data().name);
                    entity=item.data().entityId;
                    setIsAdmin(item.data().admin);
                    // setUserData(item.data())
                  })
                  const q = query(
                    collection(db, "entity",entity.toString(),"employees")
                  );
                  const docss = await getDocs(q);
                  let tmp=[];
                  docss.forEach((item)=>{
                    tmp.push(item.data());
                  })
                  setEmployeesList(tmp);




          
                }
              } catch (err) {
                console.error(err);
                alert(err.message);
              }
            }

          }

          

          const getMessages = async() =>{
            if(!registerError && user && entityId.length>0 ){
                
                const colRef = collection(db, "entity",entityId.toString(),"messages");
                //real time update
                const q = query( collection(db, "entity",entityId.toString(),"messages"),orderBy('servertime'));
                // const docs = await getDocs(q);
                // docs.forEach((doc)=>{
                //     // setMessages((prev) => [...prev, doc.data()]);
                //     console.log(doc.data())
                // })
                
   
                onSnapshot(q ,(snapshot) => {
                    setMessages([]);
                    snapshot.docs.forEach((doc) => {
                        setMessages((prev) => [...prev, doc.data()])
                        console.log("onsnapshot", doc.data());
                    })
                })
               console.log("done")
              }
                  
          }
          // getMessages()
          if (loading) {
            return;
          }
          if (user) {
            console.log("yes")
            getUserEntityData();
            getMessages();
            setInitalLoading(false)
          }
          
   
     
    },[user, loading,entityId]);
  
    return(
        <FireBaseContext.Provider value = {{loggedIn,createEntity,usermail,userName,addMember,entityId,Messages,sendMessage,EmployeesList,signInWithGoogle,registerError,db}} >{children}</FireBaseContext.Provider>
    )
}