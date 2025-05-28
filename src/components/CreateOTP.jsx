import {Button} from './Button'
export function CreateOTP({setCreateOrLogin,setPhoneNo,phoneNo}){
    function handleBackendCall(){
      fetch('http://localhost:3000/login',{
        headers:{
            phoneno:phoneNo,
        }
     }).then(async function(res){
        const value = await res.json();
        alert(value.message)
     })
      setCreateOrLogin(false)
    }
    return <div style={{
        width:'350px',
        height:'400px',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        padding:'10px',
        border:'1px solid black',
        borderRadius:'20px'
    }}>
       <div style={{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        padding:'10px'
       }} >
         <h1 style={{
            fontSize:'30px',
            color:"gray",
            marginTop:'5px',
            marginBottom:'5px',
            textAlign:'center'
        }}>Login via OTP</h1>
        <input type="text" name="" id="" placeholder="Enter Phone Number" onChange={(e)=> setPhoneNo(e.target.value)} style={{
            border:'1px solid gray',
            borderRadius:'20px',
            fontSize:'20px',
            padding:'10px',
            width:'100%',
            marginTop:'10px',
            marginBottom:'10px'
        }}/>
        <Button handleCall={handleBackendCall}>Submit</Button>
       </div>
    </div>
}