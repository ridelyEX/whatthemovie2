"use client"
import { useRouter } from "next/navigation"; 
import { methods as auth } from "../utilis/firebase";
import { useState } from "react";

export default function LoginPage(){
    const router = useRouter();
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        const ver=await auth.checkUsr({email:correo, pass:password})
        if(ver){
            router.push('/MainPage');
        }else{
            console.log("ta mal el usr")
        }
    };
    
    return (
        <div>
          <h2>Inicia Sesion</h2>
          <form onSubmit={handleSubmit}>
            <div >
              <label>Email:</label>
              <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
            </div>
            <div >
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <button type="submit">Iniciar sesion</button>
          </form>
        </div>
      );
}