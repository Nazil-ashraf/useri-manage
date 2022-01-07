import {createSlice} from "@reduxjs/toolkit";
import {userSlice} from "./user-reducer";

const initialState ={
   user:[],
    edit:[],
    unid:null,



}
export const manageUserSlice=createSlice({
    name: 'manageuser',
    initialState: initialState,

    reducers: {
      addinput(state,action){
              // const arr=[...state.user]
              // arr.push(action.payload)
              // return{...state,user:arr}
          // if(!state.edit) {
              return {...state, user: [...state.user, {id: action.payload.id, ...action.payload.inputs}]}
          // }else{
          //     updateTodo(action.payload.inputs,state.edit.id,state.user)

          // }
      },
        editinput(state,action){
            // return {...state, edit: [...state.edit, action.payload]}
            // return {...state, edit: [...state.edit, action.payload]}
           return{...state,edit:action.payload}
            // return {...state, edit: {...state.edit,...action.payload}}
        },
      edititem(state,action){
          const findtodo=state.user.find((todo)=> todo.id ===action.payload);
           return{...state,edit: findtodo,unid:findtodo.id}
      },
        editsave(state,action){
            // //   let unid=state.unid
            // const editinputs=action.payload
            //   const user=state.user.splice(state.unid,1,{editinputs});
            // // return{...state,user: {Ns}}
            // state.user=user


            for (let i = state.user.length; i > state.unid; i--) {
                state.user[i] = state.user[i - 1];
            }
            state.user[state.unid] = action.payload;
// insert the element at the index

  const n= state.user.filter((item=>
      item.id !== state.unid
  ))

            state.user=n
  //        state.user= [...state.user,action.payload]
         //    state.user= [
         //        state.user.concat(action.payload)
         //    ]

                // return   {...state, user: [...state.user, n,action.payload]}

         //    state, user: [...state.user, {...action.payload}]
  //           return{...state,edit:n}
        }
    },
})

function updateTodo(input,ids,user){
    return user.map((todo)=>
        todo.id=== ids ? {input,ids} : todo
    )


}
export const {addinput,edititem,editinput,editsave}= manageUserSlice.actions
export default manageUserSlice.reducer