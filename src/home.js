import './home.css'
import {AssignmentInd, Groups, PersonSearch} from "@mui/icons-material";
import Roles from "./component/roles/roles";
import {useState} from "react";
import ManageUser from "./component/manage-user/manage-user";

export function Home(){
    const [open, setOpen] = useState(false);
    const [opens, setOpens] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);

    };
    const clickOpen = () => {
        setOpens(true);
    };
    const onClose = (value) => {
        setOpens(false);

    };

    return(
        <div className={"home"}>
            <div className={"home--header"}>
        <PersonSearch className={"home--header--icon"}/>
                <div className={"home--header--text"}>USER MANAGEMENT</div>
            </div>
            <div className={"home--body"}>
                <div className={"home--body--left"}>
                    <div className={"home--body--left--button"}>
                        <AssignmentInd className={'home--body--left--button--icon'}/>
                        <div className={"home--body--left--button--text"}>Manage Profile</div>
                    </div>
                    <div onClick={clickOpen} className={"home--body--left--button"}>
                        <AssignmentInd className={'home--body--left--button--icon'}/>
                        <div className={"home--body--left--button--text"}>Manage User</div>
                    </div>
{/*<Link className={"link"} to={"/roles"}>*/}
                    <div onClick={handleClickOpen} className={"home--body--left--button"}>
                        <Groups className={'home--body--left--button--icon'}/>
                        <div  className={"home--body--left--button--text"}>Role</div>

                    </div>
{/*</Link>*/}
                </div>
                <div className={"home--body--right"}>

                        <Roles handleClose={handleClose} open={open}/>
                    <ManageUser handleClose={onClose} open={opens}/>

                </div>

            </div>
        </div>
    )
}
 export default Home