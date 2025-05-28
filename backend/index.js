const express = require('express')
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
const map = new Map();
app.get('/login',(req,res)=>{

     const phoneNo = req.headers.phoneno;
   
     
     if(phoneNo.length < 10 || phoneNo.length > 10){
       return res.status(411).json({
            message:'invalid Phone Number!'
        })
     }
     const randomFourDigitCode = generateCode();
     map.set(phoneNo,randomFourDigitCode)
    return res.status(200).json({
        OTP:randomFourDigitCode,
        message:'OTP has sended to you number!'
     })
})
app.get('/authenticate',(req,res)=>{
    const phoneNo = req.headers.phoneno;
    const OTP = req.headers.otp;
    
    if(map.get(phoneNo) !== OTP){
       return res.status(411).json({
            message:"Invalid OTP!"
        })
    }
    map.delete(phoneNo);
    return res.status(200).json({
        message:'Login successfull!'
    })
})
app.listen(3000);

function generateCode(){
    let firstDigit = Math.floor(Math.random()*10)
    let secondDigit = Math.floor(Math.random()*10)
    let thirdDigit = Math.floor(Math.random()*10)
    let fourthDigit = Math.floor(Math.random()*10)
    return `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`;
}