import React from "react";
import logo from "../assets/https---224c97587042263946d3aab2a5f23b5e.cdn.bubble.io-f1722498010890x929019802386598100-5242448790034700865.jpg";

import { CiLocationOn } from "react-icons/ci";

function Clinics() {
    return (
        <section className='container mx-auto mb-[40px]'>
            <p className=' mb-[40px] text-[33px] pt-[20px]'>Все клиники 8</p>

            <div>
                <div className='flex bg-white rounded-2xl py-[20px] text-[14px] text-gray-600 '>
                    <div className='basis-[20%] flex items-center justify-center flex-none '>
                        <img src={logo} alt='' className='w-[90px] ' />
                    </div>
                    <div className='basis-[50%] flex-none'>
                        <p className=' text-[20px] mb-[14px]'>
                            Медицинский центр Metaclinic
                        </p>
                        <p className=' mb-[20px]'>
                            Metaclinic- полностью цифровая клиника в Казахстане,
                            предлагающая пациентам уникальное сочетание комфорта
                            и высококачественной медицинской помощи
                        </p>
                        <div className='flex items-center gap-[10px]'>
                            <CiLocationOn className='text-[25px] text-purple-500' />
                            <p>г.Астана, ул. Кабанбай батыра, 40</p>
                        </div>
                    </div>
                    <div className='basis-[30%]  flex-none  '>
                        <p className=' text-[20px] mb-[14px]'>График работы</p>
                        <div className=' text-base/8 text-[14px]'>
                            <div className='flex gap-[100px]'>
                                <p>Пн - Пт</p>
                                <p>00:00 - 23:30</p>
                            </div>
                            <div className='flex gap-[100px]'>
                                <p>Пн - Пт</p>
                                <p>00:00 - 23:30</p>
                            </div>
                            <div className='flex gap-[100px]'>
                                <p>Пн - Пт</p>
                                <p>00:00 - 23:30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Clinics;
