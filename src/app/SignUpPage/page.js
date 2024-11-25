"use client"
import { useState } from "react";
import addUsr from "../utilis/firebase";

export default function SignUpPage(){

    const [name, setName] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        try {
            addUsr({usuario:name, email:correo, pass:password, points :0})
        } catch (error) {
            console.error("Error adding document: ", error);
            setMessage("Error registering user.");
        }
    };
    
    return (
        <div>
          <h2>Registrarse</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>
            <div >
              <label>Email:</label>
              <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
            </div>
            <div >
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <button type="submit">Registarse</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      );
}