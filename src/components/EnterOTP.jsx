import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";

export function EnterOTP({phoneno}) {
  const [Otp, setOtp] = useState(["","","",""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  function handleChange(e, index) {
    let value = e.target.value;

    
    if (!/^\d$/.test(value)) return;
    
    const newOtp = [...Otp];
    newOtp[index] = value;
       console.log(newOtp);
    setOtp(newOtp);

    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  }
  function handleBackSpace(e, index) {
    if (e.key === 'Backspace') {
      const newOtp = [...Otp];

      if (Otp[index] !== "") {
        // Clear the current box
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // Move back and clear the previous box
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs[index - 1].current.focus();
      }
    }
}
  function handleBackendCall() {
     let copy = Otp;
     let val = copy.join("");
     fetch('http://localhost:3000/authenticate',{
        headers:{
            phoneno:phoneno,
            otp:val
        }
     }).then(async function(res){
        const value = await res.json();
        alert(value.message)
     })
     
  }
  useEffect(()=>{
    inputRefs[0].current.focus()
  },[])
  return (
    <div
      style={{
        width: "350px",
        height: "400px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            color: "gray",
            marginTop: "5px",
            marginBottom: "5px",
            textAlign: "center",
          }}
        >
          Login via OTP
        </h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          {inputRefs.map((ref, index) => (
            <input
              type="text"
              name=""
              id=""
              placeholder="0"
              ref={ref}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleBackSpace(e,index)}
              maxLength="1"
              style={{
                border: "1px solid gray",
                borderRadius: "20px",
                fontSize: "20px",
                padding: "10px",
                width: "100%",
                marginTop: "10px",
                marginBottom: "10px",
                marginRight: "5px",
              }}
            />
          ))}
        </div>
        <Button handleCall={handleBackendCall}>Login</Button>
      </div>
    </div>
  );
}
