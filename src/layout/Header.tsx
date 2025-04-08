import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo_black.svg";
import { IoIosArrowDown } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import vars from "../store/vars";

import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { logout } from "../utils/auth";

const Header = observer(() => {
    const navigate = useNavigate();
    const links = [
        { link: "Специалисты", to: "/" },
        { link: "Клиники", to: "/Clinic" },
        { link: " Мои Консультации", to: "/consultation" },
    ];

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                vars.close();
            }
        };

        if (vars.isOpen) {
            document.addEventListener("mousedown", handleClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    function showModal(): void {
        console.log("closed");

        vars.toggle();
    }
    return (
        <div className='container mx-auto'>
            <div className=' flex justify-between py-[20px] items-center'>
                <div>
                    <img src={logo} alt='' className='w-[150px]' />
                </div>
                <nav>
                    <ul className='flex   text-[18px]'>
                        {links.map((item) => {
                            return (
                                <li
                                    key={item.link}
                                    className='px-[30px] pb-[5px] border-b-[1px] border-b-gray-300'>
                                    <NavLink
                                        to={item.to}
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? " text-purple-500"
                                                : isPending
                                                ? "pending"
                                                : ""
                                        }>
                                        {item.link}
                                    </NavLink>
                                </li>
                            );
                        })}
                        {/* <li className=' px-[30px] border-b-[1px] border-b-gray-300'>
                            <NavLink
                                to='/Clinic'
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? " text-purple-500"
                                        : isPending
                                        ? "pending"
                                        : ""
                                }>
                                Клиники
                            </NavLink>
                        </li>
                        <li className=' px-[30px] border-b-[1px] border-b-gray-300'>
                            <NavLink
                                to='/consultation'
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? " text-purple-500"
                                        : isPending
                                        ? "pending"
                                        : ""
                                }>
                                Мои Консультации
                            </NavLink>
                        </li> */}
                    </ul>
                </nav>
                <div>
                    <div className='flex items-center gap-[10px] relative'>
                        <p className=' bg-purple-100  p-[10px] rounded-[100%] '>
                            AM
                        </p>
                        <div className='cursor-pointer '>
                            <IoIosArrowDown
                                onClick={(e) => showModal()}
                                className='text-[20px] text-gray-400 '
                            />
                        </div>
                        {vars.isOpen ? (
                            <div className=' absolute top-[70px] left-0 bg-white rounded-2xl py-[35px]  px-[10px] translate-x-[-25%]'>
                                <p
                                    onClick={handleLogout}
                                    className='flex items-center gap-[10px] cursor-pointer pr-[50px]'>
                                    <CiLogin className='text-[25px]  text-red-500 font-bold' />
                                    <span>Выйти</span>
                                </p>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Header;
