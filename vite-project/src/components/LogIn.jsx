import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';






const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const isLoading = useSelector((state) => state.user.isLoading);

  const signin = async (e) => {

    e.preventDefault()

    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem('user', JSON.stringify(result));
     
      navigate("/")
      setEmail("")
      setPassword("")

    } catch (error) {
     

    }
  }


  return (
    <div>
      <div>
        <div className='w-full h-full flex items-center justify-center'>

          <form action="" className='flex gap-6 flex-col items-center'>

            <input type="email" className='w-[300px] border-[2px] border-[black] bg-[transparent] px-3 py-2 placeholder:text-[black] font-semibold rounded-lg' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className='w-[300px] border-[2px] border-[black] bg-[transparent] px-3 py-2 placeholder:text-[black] font-semibold rounded-lg' placeholder='password' value={password}  onChange={(e) => setPassword(e.target.value)} />

            <button className='w-[100px] h-[30px] border-[2px] border-[black] font-semibold rounded-lg' onClick={signin}>Log in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn
