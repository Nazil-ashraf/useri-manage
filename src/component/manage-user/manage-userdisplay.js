import './manage-userdisplay.css'
import nazil from "./Nazil.jpeg";
import {useAppDispatch, useAppselector} from "../../config/store";
import manageUser, {edititem} from "../../reducer/manage-user";
import {LocationOn} from "@mui/icons-material";
export function ManageUserdisplay({item,i,setedit}){
    const colors = ['rgb(216,218,231)', 'rgb(192,195,217)', 'rgb(216,218,231)', 'rgb(192,195,217)','rgb(216,218,231)', ,'rgb(216,218,231)','rgb(192,195,217)'];
    const user= useAppselector(state => state.manageUser.user)
    const edit=useAppselector(state => state.manageUser.edit)
    const unid=useAppselector(state => state.manageUser.unid)
    console.log(unid)
    // const mystyle = {
    //     color: "rgb(79,79,109)",
    //     backgroundColor: colors[i],
    //     height: "7.5rem",
    //     display: "flex",
    //      gap: "20px",
    //     alignItems:" center",
    //     border: "1px solid lightgrey"
    //
    // };
    const dispatch= useAppDispatch()
    function onselected({id}){

        dispatch(edititem(id))
    }
       
    return(
        <div onClick={()=>{onselected(item)}} className={"user-display"} >
            <img src={nazil} alt={"Nazil"} className={"user-display--image"}/>
            <div>
                <div className={"user-display--name--wrap"}>
                    <div className={"user-display--name"}>{item.firstname}</div>
                    <div className={"user-display--name"}>{item.lastname}</div>
                </div>
                <div className={"user-display--wrap"}>
                    <LocationOn className={"user-display--icon"}/>
                    <div className={"user-display--wrap--country"}>{item.country}</div>
                </div>
            </div>
            <div className={"user-display--designation"}>{item.designation}</div>

        </div>
    )
}
 export default ManageUserdisplay