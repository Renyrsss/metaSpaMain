import React from "react";
import { Link, NavLink } from "react-router";

function Navigation() {
    const links = [
        { link: "Предстоящие", to: "future" },
        { link: "Завершённые", to: "past" },
        { link: "Отменённые", to: "cancel" },
    ];
    return (
        <div className='flex gap-[20px] my-[30px] '>
            {links.map((item) => {
                return (
                    <NavLink
                        className={({ isActive }) =>
                            ` text-black py-[5px] px-[10px] rounded-2xl border-gray-200 border-1 ${
                                isActive ? "text-white bg-purple-500" : ""
                            }`
                        }
                        key={item.link}
                        to={item.to}>
                        {item.link}
                    </NavLink>
                );
            })}
        </div>
    );
}

export default Navigation;
