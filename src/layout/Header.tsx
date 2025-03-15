import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo_black.svg";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
    let style: string = "";
    const links = [
        { link: "Специалисты", to: "/" },
        { link: "Клиники", to: "/Clinic" },
        { link: " Мои Консультации", to: "/consultation" },
    ];
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
                                <li className='px-[30px] pb-[5px] border-b-[1px] border-b-gray-300'>
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
                    <div className='flex items-center gap-[10px]'>
                        <p className=' bg-purple-100  p-[10px] rounded-[100%] '>
                            AM
                        </p>
                        <IoIosArrowDown className='text-[20px] text-gray-400' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
