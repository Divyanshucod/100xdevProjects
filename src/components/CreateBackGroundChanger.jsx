import { useState } from "react"

export function CreateBackGroundChanger(){ 
    const [backGroundColor,setBackGroundColor] = useState('white')
    return <div style={{
        backgroundColor:backGroundColor,
        height:'100vh',
        width:'100vw',
        display:'flex',
        alignItems:'end'
    }}>
        <div style={{
            padding:'10px',
            display:"flex",
            justifyContent:'space-around',
            boxShadow:'2px -3px 4px gray',
            width:'100%'
        }}>
            <Button color={"green"} text={"Green"} setBackGroundColor={setBackGroundColor}/>
            <Button color={"yellow"} text={"Yellow"} setBackGroundColor={setBackGroundColor}/>
            <Button color={"red"} text={"Red"} setBackGroundColor={setBackGroundColor}/>
            <Button color={"blue"} text={"Blue"} setBackGroundColor={setBackGroundColor}/>
            <Button color={"gray"} text={"Gray"} setBackGroundColor={setBackGroundColor}/>
        </div>
    </div>
}

function Button({color,text,setBackGroundColor}){
    return <button style={{
        backgroundColor:color,
        padding:'5px'
    }} onClick={()=> setBackGroundColor(color)}>{text}</button>
}