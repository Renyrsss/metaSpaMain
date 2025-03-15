import React from "react";
import { CiSearch } from "react-icons/ci";

function SignToDoctor() {
    const data = [
        "Дежурный терапевт",
        "Дежурный педиатр",
        "Дежурный гинеколог",
        "Эндокринолог",
        "Гинеколог",
        "Педиатр",
        "Гастроэнтеролог",
        "Терапевт",
        "Кардиолог",
        "Ветеринар",
        "Маммолог",
    ];
    return (
        <div className=' mt-[40px] container mx-auto mb-[40px]'>
            <p className='text-[25px] mb-[25px]'>Записаться к специалисту</p>
            <div className='flex bg-white items-center py-[15px] px-[10px] text-[20px] rounded-2xl mb-[40px]'>
                <CiSearch className=' mr-[10px] text-gray-400' />
                <input
                    type='text'
                    placeholder='Поиск по спецальности'
                    className=' outline-0 w-full'
                />
            </div>

            <div>
                <ul className=' rounded-[15px] bg-white text-[20px]'>
                    {data.map((item) => {
                        return (
                            <li className=' cursor-pointer  border-b-[1px] border-b-gray-300  py-[15px] px-[20px] duration-300  hover:bg-purple-400 hover:text-white hover:rounded-[15px] '>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SignToDoctor;
