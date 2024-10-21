import React, { useState } from 'react';

export default function Login({handleLogin}){
    document.title = "Login";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submithandler = (e)=>{
        e.preventDefault();
        handleLogin(email, password);
        setPassword("");
        setEmail("");
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className='w-96 m-auto border-[1px] border-zinc-700 rounded-lg p-4'>
                <h4 className="text-lg font-medium flex justify-center mb-4">Login Page</h4>
                <form onSubmit={(e)=>submithandler(e)} className="flex flex-col justify-center items-center gap-4">
                    <input
                        required
                        className="outline-none w-full rounded-full px-4 py-2 border-[1px] border-emerald-500 bg-transparent"
                        type="email"
                        placeholder="Enter Email"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        />
                    <input
                        required
                        className="outline-none w-full rounded-full px-4 py-2 border-[1px] border-emerald-500 bg-transparent"
                        type="password"
                        placeholder="Enter Password"
                        onChange={e=>setPassword(e.target.value)}
                        value={password}
                    />
                    <button className="bg-emerald-500 rounded-full px-4 py-1.5 ">Login</button>
                </form>
            </div>
        </div>
    )
}