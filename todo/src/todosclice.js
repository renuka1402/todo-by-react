import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:
    {
      task:[],
    },
    reducers:
    {
      addTask:(state,action)=>{
        state.task.push(action.payload);
      },
      delTask:(state,action)=>{
        state.task=state.task.filter(key=>key.id!==action.payload);
      },
      completeTask:(state,action)=>{
         for(var i=0;i<state.task.length;i++)
         if(state.task[i].id==action.payload)
         {
          state.task[i].status="complete";
         }
      },
      redoTask:(state,action)=>{
        for(var i=0;i<state.task.length;i++)
        {
          if(state.task[i].id==action.payload)
          {
            state.task[i].status="pending";
          }
        }
      },
      updateTask:(state,action)=>{
        for(var i=0;i<state.task.length;i++)
        {
          if(state.task[i].id==action.payload.newId);
          {
            state.task[i].work=action.payload.newData;
          }
        }
      }

    }
})
export const { addTask,delTask,completeTask,redoTask,updateTask}=todoSlice.actions;
export default todoSlice.reducer;