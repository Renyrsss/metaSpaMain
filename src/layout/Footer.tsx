import React from "react";
import logo from "../assets/logo_black.svg";

function Footer() {
    return (
        <div className='flex justify-between px-[40px] py-[20px] text-base/7 '>
            <div className='text-gray-500 text-[15px]'>
                <img src={logo} alt='' className=' w-[150px] mb-[20px]' />
                <p>Астана, р-н Есиль, ул. Мангилик ел 37</p>
                <p>info@metaclinic.kz</p>
                <p>8 777 777 77 77</p>
            </div>
            <div className='flex justify-between gap-[200px] text-[14px]'>
                <div>
                    <p className=' text-gray-500'>Пациентам</p>
                    <p>Все клиники</p>
                    <p>Все специалисты</p>
                </div>
                <div>
                    <p className=' text-gray-500'>Пациентам</p>
                    <p>Все клиники</p>
                    <p>Все специалисты</p>
                </div>
                <div>
                    <p className=' text-gray-500'>Пациентам</p>
                    <p>Все клиники</p>
                    <p>Все специалисты</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
