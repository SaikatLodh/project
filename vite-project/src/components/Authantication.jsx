import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import SignUp from './SignUp';
import LogIn from './LogIn';


const Authantication = () => {

  const [active, setActive] = useState("login")

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div>
      <div className='w-full h-screen bg-[#DDD0B8]'>
        <div className='w-full h-[100%] flex items-center justify-center'>
          <div className=' rounded-lg w-[400px] h-[400px] flex flex-col items-center'>
            {/* <div className='w-[100px] h-[100px] rounded-full bg-[white] flex items-center justify-center mt-[-50px]'>
              <FaUser className='text-[30px]'/>
            </div> */}
            <div className='w-full h-full flex items-center justify-center flex-col gap-3'>
              {active === "login" ? <LogIn /> : <SignUp />}
              <span>
                {active === "login" ? (
                  <>
                    Don't have an account?{" "}
                    <button onClick={handleChange}>Sign Up</button>
                  </>
                ) : (
                  <>
                    Have an account? <button onClick={handleChange}>Log in</button>
                  </>
                )}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Authantication
