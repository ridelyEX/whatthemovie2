"use client"
import { useState } from "react";
import { methods as auth } from "../utilis/firebase";
import { useRouter } from 'next/navigation';
import '../styles/UserPages.css';

export default function SignUpPage(){
    const router = useRouter();
    const [name, setName] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        await auth.addUsr({usuario:name, email:correo, pass:password, points :0})
        router.push('/LoginPage');
    };
    
    return (
        <div className="user-page">
          <div className="user-grid">
            <div className="user-card">
              <h1>Registrarse</h1>
              <form onSubmit={handleSubmit}>
                <div className="user-inpbut">
                  <label>Name:</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="user-inpbut">
                  <label>Email:</label>
                  <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
                </div>
                <div className="user-inpbut">
                  <label>Password:</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type="submit">Registarse</button>
              </form>
            </div>
          </div>
        </div>
      );
}