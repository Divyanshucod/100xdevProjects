import { useState } from "react";
import {CreateOTP} from './CreateOTP'
import {EnterOTP} from './EnterOTP'

export function Login(){
    const [createOrLogin,setCreateOrLogin] = useState(true)
    const [phoneNo,setPhoneNo] = useState("")
    return <div style={{
        width:'100vw',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
        {createOrLogin ? <CreateOTP setCreateOrLogin={setCreateOrLogin} phoneNo={phoneNo} setPhoneNo={setPhoneNo}/> : <EnterOTP setCreateOrLogin={setCreateOrLogin} phoneno={phoneNo}/>}
    </div>
 }