import React, { useState } from "react";
import logo from "../assets/vrchi 1.svg";
import { IoIosArrowForward } from "react-icons/io";
import { FiAlertTriangle } from "react-icons/fi";

import ModalDoctor from "./ModalDoctor";

import vars from "../store/vars";

import { observer } from "mobx-react-lite";

const OnlineConsultEmergency = observer(() => {
    const [openModal, setOpenModal] = useState(false);

    function open() {
        setOpenModal(!openModal);
    }
    return (
        <>
            <section className=' container m-auto'>
                <h1 className=' text-[33px] font-bold mb-[14px] pt-[25px]'>
                    Онлайн Консультации
                </h1>
                <div className=' text-[25px] text-orange-300 mb-[20px] flex items-center gap-[10px]'>
                    <FiAlertTriangle />
                    <p>все Консультации проходят на сайте в Онлайн формате </p>
                </div>
                <div className='flex justify-between tracking-wide  px-[25px] py-[10px] bg-linear-to-t from-purple-500 to-purple-400 rounded-[20px] text-white '>
                    <div>
                        <p className=' text-[35px] font-bold my-[20px]  '>
                            Врачи ответят в течение 10 мин
                        </p>
                        <p className=' opacity-65 text-[25px] mb-[35px]'>
                            Средний стаж {">"} 10 лет
                        </p>
                        <button
                            onClick={vars.showEmergencyModalFunc}
                            className=' cursor-pointer bg-white text-purple-400 block flex gap-[5px] items-center p-[15px] rounded-[15px] text-[20px]'>
                            <p className=''>Скорее записаться</p>{" "}
                            <p>
                                <IoIosArrowForward className=' bg-purple-400 rounded-[100%] p-[5px] text-white text-[25px] text-center' />
                            </p>
                        </button>
                    </div>
                    <img src={logo} alt='' />
                </div>
            </section>
            <ModalDoctor />
        </>
    );
});

export default OnlineConsultEmergency;
