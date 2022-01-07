import {createSlice} from "@reduxjs/toolkit";

const initialState ={
   userlist:[],
}
export const userSlice=createSlice({
    name: 'user',
    initialState: initialState,

    reducers: {
        adduser(state,action){
            return {...state,userlist:[...state.userlist,{id:action.payload.ids}]}
        },
        updateTodo(state,action) {
            const updatedlist = updates([...state.userlist], action.payload)
            return {...state, userlist: updatedlist}
        },
        deleteuser(state,action){
            // return{...state,todolist: state.todolist.filter(item => item.id !== action.payload)}
            const deleteitem= state.userlist.filter((item) => item.id !== action.payload)
            console.log(deleteitem)
            return {...state,userlist: deleteitem}

        },
    },
})
function updates(list,todo){
    const index=list.indexOf(todo)
    list.splice(index,1,todo)
    return list
}
export const {adduser,updateTodo,deleteuser}= userSlice.actions

export default userSlice.reducer