import {configureStore} from "@reduxjs/toolkit";
import reducer from "../reducer";
import {useSelector,useDispatch} from "react-redux";


const store= configureStore({reducer})

const getStore=()=>{
    return store
}

export const useAppselector =useSelector
export const useAppDispatch =()=> useDispatch()
export default getStore