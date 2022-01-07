import {useAppDispatch, useAppselector} from "../../config/store";
import {deleteuser} from "../../reducer/user-reducer";

export function UserDisplay({item,readInput}){
    const dispatch=useAppDispatch()
    const userlist=useAppselector(state => state.userlist.userlist)
    function handledelete(item){
        dispatch(deleteuser(item))
    }
    return(
        <div className={"roles--box--wrap"}>
            <div className={"roles--wrap--text"}>{item.id}</div>
            <div className={"roles--wrap--text"}>
                <input className={"roles--wrap--text--input"} onChange={(event)=>{readInput(item.id,event)}} value={item.value}/>
            </div>

            <div className={"roles--wrap--text"}>
                <button className={"roles--wrap--text--edit"}>Edit</button>
                <button onClick={()=>handledelete(item.id)} className={"roles--wrap--text--delete"}>Delete</button>
            </div>
        </div>
)
}