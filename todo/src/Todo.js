import { useState } from "react";
import {useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";

import { updateTask,completeTask,delTask,addTask,redoTask } from "./todosclice";
const Todo=()=>{
  const [mytask,setMyask]=useState("");
  const [edData,setEddata]=useState("");
  const [edid,setEdid]=useState("");
  const dispatch=useDispatch();
    const mydata=useSelector((state)=>state.todo.task)
  const handleSubmit=()=>{
    dispatch(addTask({id:Date.now(),work:mytask,status:"pending"}))
  }
  const del=(myid)=>{
    dispatch(delTask(myid));
  }
  const complete=(myid)=>{
    dispatch(completeTask(myid))
  }

  const redotask=(myid)=>{
    dispatch(redoTask(myid))
  }
  const editTask=(myid)=>{
    
    for(var i=0;i<mydata.length;i++)
    {
      if(mydata[i].id==myid)
      {
          setEddata(mydata[i].work);
         setEdid(myid)
      }
    }
  }
  const handlsub=()=>{
    dispatch(updateTask({newData:edData,newId:edid}));
  }
  var sno=0;
  const ans=mydata.map((key)=>{
    sno++;
    return(
        <tr bgcolor="white">
            <td>{sno}</td>
            <td>{key.status=="complete"?(<>
            <span style={{color:"red"}}><strike>{key.work}</strike></span>
            </>):(
              <>
              {key.work};
              </>
            )}</td>
            <td><button onClick={()=>{del(key.id)}}>delete</button></td>
            <td><button onClick={()=>{complete(key.id)}}>complete</button></td>
            <td><button onClick={()=>{redotask(key.id)}}>redo task</button></td>
            <td><button onClick={()=>{editTask(key.id)}}>edit</button></td>
        </tr>
    );
  })
    return(
        <>
        <center>
        <div className="todo">
        <h1>Todo Task</h1>
     
       <input type="text" className="inputtex" value={mytask} onChange={(e)=>{setMyask(e.target.value)}} />
        <button onClick={handleSubmit}>+</button>
        <table border="1" bgcolor="pink">
          <tr>
            <th>sno</th>
          <th>work</th>
            <th>delete</th>
            <th>complete</th>
            <th>redo</th>

          </tr>
         {ans}
        </table>
        <input type="text" value={edData} id="edit" onChange={(e)=>{setEddata(e.target.value)}}/>
    
        <button onClick={handlsub}>Editsave</button>

        </div>
        </center>
        </>
    );
}
export default Todo;