import { useState } from "react";
import Button from "../../components/Button";
import Input from "./Input";
import LockPersonIcon from '@mui/icons-material/LockPerson';
import LogoutIcon from '@mui/icons-material/Logout';

export default function RegisterPage() {
  const [inputs,setInputs]= useState({
      name:"",email:"", password:""
    })
  
    function handleName(e) {
      const newValue = {...inputs,name:e.target.value}
      setInputs(newValue)
    }
    function handleEmail(e) {
      const newValue = {...inputs,email:e.target.value}
      setInputs(newValue)
    }
    function handlePassword(e) {
      const newValue = {...inputs,password:e.target.value}
      setInputs(newValue)
    }
    function handleSubmit(e){
      e.preventDefault()
      console.log(inputs)
    }

  return (
    <div className="fixed w-full h-screen bg-black/60 top-0 z-200 flex justify-center items-center">
      <div 
        className="bg-white/98
          w-9/10 md:w-5/7 lg:w-4/10 h-5/7 py-10 px-5 md:px-15
          lg:px-20 flex flex-col justify-around items-center
          rounded-2xl gap-5 shadow-sm shadow-mist-450 text-center
        "
      >
        <h1 className="font-bold text-2xl">< LockPersonIcon fontSize="large" /></h1>
        <h1 className="font-bold text-2xl">Security Your Appointment</h1>
        <p className="font-medium text-lg text-gray-600">please login or create new account to book appointment </p>
        <Input type="text" name="name" value={inputs} handle={handleName} className="w-full py-3 mt-3" />
        <Input type="email" name="email" value={inputs} handle={handleEmail} className="w-full py-3" />
        <Input type="password" name="password" value={inputs} handle={handlePassword} className="w-full py-3 mb-3" />
        <Button onClick={handleSubmit} className="bg-black px-10 py-3 w-full">
          continue
        </Button>
        <a href="" className=" font-bold text-lg">Login</a>
      </div>
    </div>
  );
}
