import './manage-user.css'
import {Dialog} from "@mui/material";
import nazil from "../manage-user/Nazil.jpeg";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppselector} from "../../config/store";
import manageUser, {addinput, editinput, editsave} from "../../reducer/manage-user";
import ManageUserdisplay from "./manage-userdisplay";
export function ManageUser({handleClose,open}){
    const [inputs,setInputs]=useState({gender:'',date:'',designation:'',email:'',language:'',country:'',phone:'',firstname:'',lastname:'',address:''})
    const [editinputs,seteditInputs]=useState({gender:'',date:'',designation:'',email:'',language:'',country:'',phone:'',firstname:'',lastname:'',address:''})
    const[id,setid]=useState(1)
    const[display,setdisplay]=useState([])
    const [opencart,setopencart]=useState(false)



  const dispatch=useAppDispatch()
    const user= useAppselector(state => state.manageUser.user)
    const userlist=useAppselector(state => state.userlist.userlist)
    const edit=useAppselector(state => state.manageUser.edit)
    const unid=useAppselector(state => state.manageUser.unid)
    // const [edittodo,setedittodo]=useState(null)
    // console.log(edit)

    function readinputgender(event){
        setInputs({...inputs,gender:event.target.value})
        seteditInputs({...editinputs,gender:event.target.value})


    }
    function readlanguage(event){
        setInputs({...inputs,language:event.target.value})
        seteditInputs({...editinputs,language:event.target.value})



    }
    function readdate(event){
        setInputs({...inputs,date:event.target.value})
        seteditInputs({...editinputs,date:event.target.value})


    }

    function readdesignation(event){
        setInputs({...inputs,designation:event.target.value})
        seteditInputs({...editinputs,designation:event.target.value})


    }
    function reademail(event){
        setInputs({...inputs,email:event.target.value})
        seteditInputs({...editinputs,email:event.target.value})


    }
    function readcountry(event){
        setInputs({...inputs,country:event.target.value})
        seteditInputs({...editinputs,country:event.target.value})
    }


    function readphone(event){
        setInputs({...inputs,phone:event.target.value})
        seteditInputs({...editinputs,phone:event.target.value})


    }
    function readfirstname(event){
        setInputs({...inputs,firstname:event.target.value})
        seteditInputs({...editinputs,firstname:event.target.value})



    }
    function readlastname(event){
        setInputs({...inputs,lastname:event.target.value})
        seteditInputs({...editinputs,lastname:event.target.value})

    }
    function readaddress(event){
        setInputs({...inputs,address:event.target.value})
        seteditInputs({...editinputs,address:event.target.value})
    }
    function readrole(event){
        setInputs({...inputs,role:event.target.value})
        seteditInputs({...editinputs,role:event.target.value})
    }

  //   const update=(title,id)=>{
  //       const newtodo=user.map((todo)=>
  //           todo.id=== id ? {title,id}: todo
  //       )
  //       setedittodo('')
  //       return{...user,newtodo}
  //   }
    function  submit(){

            dispatch(addinput({id, inputs}))
            setid(id + 1)
        setInputs({date: ''})




    }
    function  onsubmit(){

        dispatch(editinput({editinputs}))


    }
 //
 function onsave(){
        dispatch(editsave(editinputs))
     // const s= user.splice(unid,1,edit)
     // return s
 }


// console.log(editinputs)
//     console.log(edit)
//
//
//     console.log(user)

    return(
        <Dialog className={"home--body--rights"} open={open} onClose={handleClose}   PaperProps={{
            style: {
                minHeight: "80vh",
                minWidth: "70vw",

            }
        }}
        >
            <div onClick={ ()=>{setopencart(true)}}className={"container"}>
             <div className={"container--text"}>Users</div>
                <div className={"container--line"}></div>
                <button onClick={submit}  className={"container--add"}>Add New User</button>
                <div className={"container--wrap"}>
                    <div className={"container--wrap--left"}>


                            ` {user.map((item,i)=><ManageUserdisplay  item={item} i={i} key={i} />)}
                    </div>
                    {opencart&&
                    <div className={"container--wrap--right"}>

                        <div className={"container--wrap--right--wrap"}>
                        <img src={nazil} alt={"Nazil"} className={"container--wrap--right--image"}/>
                        <div className={"container--wrap--right--grid"}>
                        <div   className={"container--wrap--right--grid--text"}>Gender</div>
                            <select value={edit.gender}  onClick={readinputgender} className={"container--wrap--right--grid--input"}>
                                <option className={"container--wrap--right--grid--input--option"}>Female</option>
                                <option className={"container--wrap--right--grid--input--option"}>Male</option>
                            </select>
                            <div  className={"container--wrap--right--grid--text"}>Date Of Birth</div>
                            <input value={inputs.date}  onChange={readdate}
                                className={"container--wrap--right--grid--input"}></input>
                            <div  className={"container--wrap--right--grid--text"}>Designation</div>
                            <input value={edit.designation} type={"text"} onChange={readdesignation}className={"container--wrap--right--grid--input"}></input>
                            <div  className={"container--wrap--right--grid--text"}>Email</div>
                            <input value={edit.edit} type={"email"} onChange={reademail} className={"container--wrap--right--grid--input--email"}></input>
                        </div>
                        <div className={"container--wrap--right--grid--right"}>
                            <div className={"container--wrap--right--grid--text"}>Language</div>
                            <select value={edit.language} onClick={readlanguage} className={"container--wrap--right--grid--input"}>
                                <option className={"container--wrap--right--grid--input--option"}>German</option>
                                <option className={"container--wrap--right--grid--input--option"}>French</option>
                                <option className={"container--wrap--right--grid--input--option"}>malayalam</option>
                                <option className={"container--wrap--right--grid--input--option"}>English</option>
                            </select>
                            <div className={"container--wrap--right--grid--text"}>Country</div>
                            <input value={edit.country} type={"text"} onChange={readcountry}className={"container--wrap--right--grid--input"}></input>
                            <div className={"container--wrap--right--grid--text"}>Phone</div>
                            <input type={'tel'} value={edit.phone} onChange={readphone} className={"container--wrap--right--grid--input"}></input>

                        </div>

                        </div>
                        <div className={"container--wrap--right--role"}>
                       <div className={"container--wrap--right--role-admin"}>Role  | </div>
                        <select onClick={readrole} className={"container--wrap--right--role--select"}>{userlist.map(role=>  <option>{role.value} </option>   )}</select>
                        </div>
                        <div className={"container--wrap--right--grid--down"}>
                            <div className={"container--wrap--right--grid--text"}>First Name</div>
                            <div className={"container--wrap--right--grid--text"}>Last Name</div>
                            <input value={edit.firstname} onChange={readfirstname}className={"container--wrap--right--grid--input"}></input>
                            <input value={edit.lastname} onChange={readlastname} className={"container--wrap--right--grid--input"}></input>
                            <div className={"container--wrap--right--grid--text"}>Address</div>

                        </div>
                        <input value={edit.address} onChange={readaddress}className={"container--wrap--right--grid--input--address"}/>
                        <div className={"container--wrap--right--buttons"}>
                            <button onClick={onsubmit}  className={"container--wrap--right--buttons--edit"}>Edit</button>
                            <button onClick={onsave} className={"container--wrap--right--buttons--delete"}>Save</button>
                        </div>

                    </div>
                    }
                </div>


            </div>

        </Dialog>
    )
}
export default ManageUser