import { FiAlertTriangle } from "react-icons/fi";

import { MdOutlineClose } from "react-icons/md";

import terImg from "../assets/image 36.svg";

import { GrCircleAlert } from "react-icons/gr";
import { useState } from "react";

function ModalDoctor({ openModal }) {
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => setIsOpen(false);
    const data = [
        {
            name: "Терапевт",
            decription:
                "Разобраться со здоровьем и получить рекомендации по лечению",
            price1: "15 минут - 1000тг",
            price2: "30 минут - 2000тг",
        },
        {
            name: "Педиатр",
            decription:
                "Разобраться со здоровьем и получить рекомендации по лечению",
            price1: "15 минут - 1100тг",
            price2: "30 минут - 2100тг",
        },
    ];
    return (
        <>
            {isOpen && (
                <div className=' duration-300'>
                    <div className='fixed bg-black opacity-40 w-full h-full top-0 left-0'></div>
                    <div className=' fixed top-[50%] left-[50%] translate-[-50%] container m-auto bg-white w-[600px] p-[20px] rounded-2xl'>
                        <div className='flex justify-between items-center'>
                            <h1 className=' text-[25px] font-bold mb-[14px]'>
                                Онлайн Консультации
                            </h1>
                            <div
                                onClick={closeModal}
                                className=' cursor-pointer'>
                                <MdOutlineClose className='text-[35px]' />
                            </div>
                        </div>
                        <div className=' text-[20px] text-orange-300 mb-[20px] flex items-center gap-[10px]'>
                            <FiAlertTriangle />
                            <p>
                                все Консультации проходят на сайте в Онлайн
                                формате{" "}
                            </p>
                        </div>

                        <div className='flex flex-1/2 justify-between mb-[20px]'>
                            <div>
                                <div className='flex justify-between mb-[20px] bg-purple-200 rounded-2xl px-[10px] items-end'>
                                    <p className='mb-[20px] text-[25px] text-gray-800'>
                                        терапевт
                                    </p>
                                    <img src={terImg} alt='' />
                                </div>
                                <div>
                                    <p className='mb-[15px]'>
                                        <input
                                            id={data[0].price2}
                                            type='radio'
                                            className='mr-[10px] w-4 h-4 '
                                            name='register'
                                        />{" "}
                                        <label htmlFor={data[0].price2}>
                                            {data[0].price2}
                                        </label>
                                    </p>

                                    <p className='mb-[15px]'>
                                        <input
                                            id={data[0].price2}
                                            type='radio'
                                            className='mr-[10px] w-4 h-4 '
                                            name='register'
                                        />{" "}
                                        <label htmlFor={data[0].price2}>
                                            {data[0].price2}
                                        </label>
                                    </p>
                                    <button className=' cursor-pointer w-full bg-purple-500 hover:bg-purple-600 transition duration-300 text-white  py-[10px] px-[55px] rounded-[10px] '>
                                        Записаться
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between mb-[20px] bg-purple-200 rounded-2xl px-[10px] items-end'>
                                    <p className='mb-[20px] text-[25px] text-gray-800'>
                                        терапевт
                                    </p>
                                    <img src={terImg} alt='' />
                                </div>
                                <div>
                                    <p className='mb-[15px]'>
                                        <input
                                            id={data[0].price2}
                                            type='radio'
                                            className='mr-[10px] w-4 h-4 '
                                            name='register'
                                        />{" "}
                                        <label htmlFor={data[0].price2}>
                                            {data[0].price2}
                                        </label>
                                    </p>

                                    <p className='mb-[15px]'>
                                        <input
                                            id={data[0].price2}
                                            type='radio'
                                            className='mr-[10px] w-4 h-4 '
                                            name='register'
                                        />{" "}
                                        <label htmlFor={data[0].price2}>
                                            {data[0].price2}
                                        </label>
                                    </p>
                                    <button className=' cursor-pointer w-full bg-purple-500 hover:bg-purple-600 transition duration-300 text-white  py-[10px] px-[55px] rounded-[10px] '>
                                        Записаться
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-purple-100 rounded-[10px] p-[15px]'>
                            <div className='flex items-center gap-[10px] mb-[20px]'>
                                <GrCircleAlert className='text-[20px]' />
                                <p>
                                    На консультации дежурного врача вы можете
                                    получить:
                                </p>
                            </div>
                            <ol className=' font-light text-[14px] '>
                                <li>1. Оперативный ответ на ваш вопрос;</li>
                                <li>2. Расшифровка результатов анализов;</li>
                                <li>
                                    3. Помощь в выборе подходящего узкого
                                    специалиста;
                                </li>
                                <li>
                                    4. Рекомендации по дальнейшему обследованию.
                                </li>
                                <li>5. Второе мнение по вашему случаю</li>
                            </ol>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ModalDoctor;
