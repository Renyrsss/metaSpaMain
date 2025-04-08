// src/pages/Login.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";
import logo from "../assets/logo_black.svg";

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const token = await login(username, password);
            console.log("Токен:", token);
            navigate("/");
        } catch (error) {
            setError("Неверный логин или пароль");
        }
    };

    return (
        <div className=' bg-linear-to-bl from-violet-600 to-fuchsia-400 absolute top-0 left-0 w-full h-full'>
            <div className=' container mx-auto flex justify-between gap-[50px]  relative top-[50%] translate-y-[-50%] '>
                <div className='text-white pr-[100px]'>
                    <p className='text-[33px] mb-[50px]'>
                        Join to metaClinic with us
                    </p>
                    <p className='mb-[40px]'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Debitis dolorem atque eligendi omnis ex doloribus
                        magni ut possimus consequatur dolore incidunt odio
                        molestiae reiciendis esse perferendis quia quas,
                        accusamus ipsum.
                    </p>
                    <div>
                        <img
                            className='bg-white p-[10px] rounded-[9px]'
                            src={logo}
                            alt='logo'
                        />
                    </div>
                </div>
                <div className=' basis-[50%] bg-white  py-[60px] px-[50px] rounded-2xl '>
                    <h2 className='text-[25px] my-[20px]'>
                        Авторизация на плафторму Meta Clinic
                    </h2>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <input
                            className='bg-gray-200 p-[10px] rounded-[9px] mb-[20px]'
                            type='text'
                            placeholder='Имя пользователя'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            className='bg-gray-200 p-[10px] rounded-[9px] mb-[20px] '
                            type='password'
                            placeholder='Пароль'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div>
                            <button
                                className='mb-[20px] inline-block cursor-pointer  bg-purple-500 hover:bg-purple-600 transition duration-300 text-white  py-[10px] px-[55px] rounded-[10px]'
                                type='submit'>
                                Войти
                            </button>
                        </div>
                    </form>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Login;
