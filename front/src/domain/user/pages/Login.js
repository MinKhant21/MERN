import React, { useState } from 'react'
import { useNavigate } from'react-router-dom';
import useSignIn from '../hooks/useSignIn';
export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  let {SignIn,messages} = useSignIn()
  const navigator = useNavigate();
  const HandleSubmit = async  () => {
    let result = await SignIn({email,password})
    console.log(result);
    if(!result) {
      setEmail("");
      setPassword("");
      navigator("/login")
    }else{
      navigator("/")
    }
  }
  return (
    <div>
      <h1>login</h1>
      {messages && <h1>{messages}</h1>}
      <input type="email" className=' border ' onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" className=' border ' onChange={(e)=>setPassword(e.target.value)} />
      <input type="submit" onClick={HandleSubmit} />
    </div>
  )
}
