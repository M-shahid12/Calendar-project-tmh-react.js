import React,{useState} from 'react'

function Register() {
    const [name, setName]=useState("");
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");
   function SingUp(){
            document.write(name,password,email)
    }
  return (
    <div>
      <h1>Register</h1>
      <input type="text" value={name} onChange={(e)=>setName (e.target.value)} placeholder='Name' />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}placeholder='Email' />
      <button onClick={SingUp}>Sign In</button>
    </div>
  )
}

export default Register
