import React, {useState} from 'react'
import axios from 'axios';
import { Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import { useUiStore } from '../store/uiStore';

const Sign = () => {

  const [state, setState] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuthStore.getState();
  const { url } = useUiStore.getState();
  
  //form data
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    rePassword: ""
  });

  const handleChange = (e) => {
    setData({ 
      ...data, 
      [e.target.name]: e.target.value 
    });
  };

  //submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    //create url
    const endpoint = state === "Register" ? "/api/user/register" : "/api/user/login";
    const newUrl = `${url}${endpoint}`;

    const response = await axios.post(newUrl, data);

    if(response.data.success){

      setData({
        name: "",
        email: "",
        mobile: "",
        password: "",
        rePassword: ""
      })


      if(state === "Login"){
        alert("Login successful!");
        login(response.data.token, response.data.user);

      }else{
        alert("Registration successful! Please login to your account.");
        setState("Login");
      }
      

    }else{
      alert(response.data.message)
    }

  };


  return (
    <div className="min-h-screen bg-background flex flex-col">

      <div className="bg-theme h-16 flex fixed top-0 left-0 items-center w-full shadow-md px-4 md:px-8">
        <h1 className="text-xl md:text-2xl font-bold text-white"> Hire 2 Fix </h1>
      </div>

      <div className="flex flex-1 mt-20 items-center justify-center px-4">
        <div className="inset-0 bg-white/60 w-full max-w-sm px-6 py-10">

            <h2 className="text-center font-bold text-theme text-[24px] xl:text-[28px] mb-6">{state === "Register" ? "Create an Account" : "Login to Account"}</h2>

            {/* inputs */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                type="text"
                name='name'
                value={data.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required={state === "Register"}
                className={`w-full bg-white shadow-xl/10 rounded-lg px-4 py-2 text-[14px] xl:text-[19px] outline-none ${state === "Login" && "hidden"}`}
                />

                <input
                type="email"
                name='email'
                value={data.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full bg-white shadow-xl/10 rounded-lg px-4 py-2 text-[14px] xl:text-[19px] outline-none"
                />

                <input
                type="text"
                name='mobile'
                value={data.mobile}
                onChange={handleChange}
                required={state === "Register"}
                placeholder="Enter your mobile"
                className={`w-full bg-white shadow-xl/10 rounded-lg px-4 py-2 text-[14px] xl:text-[19px] outline-none ${state === "Login" && "hidden"}`}
                />

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required
                    placeholder={state === "Register" ? "Enter new password" : "Enter password"}
                    className="w-full bg-white shadow-xl/10 rounded-lg px-4 py-2 pr-12 text-[14px] xl:text-[19px] outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <div className={`relative ${state === "Login" && "hidden"}`}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name='rePassword'
                    value={data.rePassword}
                    onChange={handleChange}
                    required={state === "Register"}
                    placeholder="Re-enter password"
                    className="w-full bg-white shadow-xl/10 rounded-lg px-4 py-2 text-[14px] xl:text-[19px] outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>            

              {/* terms or forget password */}
              {state === "Register" ? 
                  <div className={`flex items-center gap-2 mt-4 text-[13px] xl:text-[16px] text-gray-600 ${state === "Login" && "hidden"}`}>
                      <input type="checkbox" required={state === "Register"} className='bg-white shadow-xl/20 outline-none' />
                      <p>
                          I agree to the{" "}
                          <span className="text-theme font-medium cursor-pointer">
                          Terms & Conditions
                          </span>
                      </p>
                  </div>
                  :
                  <p className='text-gray-600 text-end text-[13px] xl:text-[16px]'>Forgot password?</p>
          
              }
          
              {/* button */}
              <button type='submit' className="w-full mt-8 bg-theme text-white py-3 rounded-lg font-medium hover:bg-theme/90 transition">
                  {state}
              </button>

            </form>

            {/* switch login/register */}
            <p className="text-center mt-4 text-[13px] xl:text-[16px] text-gray-600">
                {state === "Register" ? "Already have an account?" : "Don't have an account?"}{" "}
                <span className="text-theme font-medium cursor-pointer" onClick={()=> setState(state === "Register" ? "Login" : "Register")}>
                {state === "Register" ? "Login" : "Register"}
                </span>
            </p>

        </div>
      </div>

    </div>
  )
}

export default Sign
