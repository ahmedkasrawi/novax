import { useState } from "react";
import Button from "../../components/Button";
import Input from "./Input";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/auth";
export default function LoginPage() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const {user,addUser}= useAuth()
  
  function handleEmail(e) {
    const newValue = { ...inputs, email: e.target.value };
    setInputs(newValue);
  }
  function handlePassword(e) {
    const newValue = { ...inputs, password: e.target.value };
    setInputs(newValue);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!user) {
      addUser(inputs);
    }
  }

  return (
    <div className="fixed w-full h-screen bg-black/60 top-0 z-100 flex justify-center items-center">
      <Link to={"/home"}>
        <Button className="absolute bottom-0 left-5 z-200 text-white">
          Back to home
        </Button>
      </Link>
      <div
        className="bg-white/98
          w-9/10 md:w-5/7 lg:w-4/10 h-5/7 py-10 px-5 md:px-15
          lg:px-20 flex flex-col justify-between items-center
          rounded-2xl gap-0 shadow-sm shadow-mist-450 text-center
        "
      >
        <h1 className="font-bold text-2xl">
          <LockPersonIcon fontSize="large" />
        </h1>
        <h1 className="font-bold text-2xl">Security Your Appointment</h1>
        <p className="font-medium text-lg text-gray-600">
          please login or create new account to book appointment{" "}
        </p>
        <Input
          type="email"
          name="email"
          value={inputs.email}
          handle={handleEmail}
          className="w-full py-3"
        />
        <Input
          type="password"
          name="password"
          value={inputs.password}
          handle={handlePassword}
          className="w-full py-3 mb-3"
        />
        <a className="text-red-500">forget password</a>
        <Button
          onClick={handleSubmit}
          className="bg-black text-white px-10 py-3 w-full"
        >
          Login
        </Button>
        <div>
          you don't have account{" "}
          <a  className="text-sky-500 font-bold">
            create account
          </a>
        </div>
      </div>
    </div>
  );
}
