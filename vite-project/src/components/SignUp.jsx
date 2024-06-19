import React, { useContext, useState } from 'react'
import myContext from '../context/data/myContext'
import { auth, fireDB } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'







const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

   const navigate = useNavigate()

    const signup = async () => {
     
        

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);
            localStorage.setItem('user',JSON.stringify(users));
            toast.success('Signin Successfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            // console.log(users)

            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time : Timestamp.now()
            }

            const userRef = collection(fireDB, "users")
            await addDoc(userRef, user);

            navigate("/")

            setName("");
            setEmail("");
            setPassword("");
            
           
            
            
        } catch (error) {
            console.log(error)
            toast.error('Sigin Failed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            
        }
    }


    return (
        <div>
            <div className='w-full h-full flex items-center justify-center'>
                <div action="" className='flex gap-6 flex-col items-center'>
                    <input type="text" className='w-[300px] border-[2px] border-[black] bg-[transparent] px-3 py-2 placeholder:text-[black] font-semibold rounded-lg' placeholder='Name' value={name}  onChange={(e) => setName(e.target.value)} />
                    <input type="email" className='w-[300px] border-[2px] border-[black] bg-[transparent] px-3 py-2 placeholder:text-[black] font-semibold rounded-lg' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className='w-[300px] border-[2px] border-[black] bg-[transparent] px-3 py-2 placeholder:text-[black] font-semibold rounded-lg' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button className='w-[100px] h-[30px] border-[2px] border-[black] font-semibold rounded-lg' onClick={signup}>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp
