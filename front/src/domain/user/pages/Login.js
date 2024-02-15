import React, { useState } from 'react'

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const HandleSubmit = () => {
    console.log(email,password);
  }
  return (
    <div>
      <h1>login</h1>
      <input type="email" className=' border ' onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" className=' border ' onChange={(e)=>setPassword(e.target.value)} />
      <input type="submit" onClick={HandleSubmit} />
    </div>
  )
}
