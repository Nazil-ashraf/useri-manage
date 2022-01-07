// import './home.css'
import {AssignmentInd, Groups, PersonSearch} from "@mui/icons-material";
import Roles from "../component/roles/roles";


export function Roleslink(){
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
                    <div className={"home--body--left--button"}>
                        <AssignmentInd className={'home--body--left--button--icon'}/>
                        <div className={"home--body--left--button--text"}>Manage User</div>
                    </div>
                    <div className={"home--body--left--button"}>
                        <Groups className={'home--body--left--button--icon'}/>
                        <div className={"home--body--left--button--text"}>Role</div>
                    </div>
                </div>
                <div className={"home--body--right"}>
<Roles/>
                </div>

            </div>
        </div>
    )
}
export default Roleslink