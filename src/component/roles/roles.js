import './roles.css'
import {useState} from "react";
import {useAppDispatch, useAppselector} from "../../config/store";
import {adduser, updateTodo} from "../../reducer/user-reducer";
import {UserDisplay} from "./user-display";
import {Dialog, DialogContent} from "@mui/material";
export function Roles({handleClose,open}){
    const [input,setInput]=useState()
    const [ids,setids]=useState(1)
    const dispatch=useAppDispatch()
    const userlist=useAppselector(state => state.userlist.userlist)
    function handleadd(){
        dispatch(adduser({ids}))
        setids(ids+1)
    }
    function readInput(id,event){
        setInput({value: event.target.value})
        dispatch(updateTodo({value:event.target.value,id:id}))
    }

    console.log(userlist)
    return(
        <Dialog className={"home--body--rights"} open={open} onClose={handleClose}   PaperProps={{
            style: {
                minHeight: "80vh",
                minWidth: "70vw",

            }
        }}
        >

   <div className={"roles"}>
            <div className={"roles--text"}>Roles Management</div>
            <div className={"roles--line"}></div>
            <button onClick={handleadd} className={"roles--add-button"}>Add Role</button>
            <div className={"roles--wrap"}>
                <div className={"roles--wrap--text"}>No</div>
                <div className={"roles--wrap--text"}>Name</div>
                <div className={"roles--wrap--text"}>Action</div>
            </div>
            <div className={"roles--box"}>
                {userlist.map(item=> <UserDisplay item={item} readInput={readInput}/>

                )}
            </div>
   </div>


         </Dialog>
    )
}
 export default Roles