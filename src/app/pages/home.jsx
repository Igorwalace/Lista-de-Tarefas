import React from 'react';
import { FaAtlas, FaCheck, FaRegCompass } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineTimer } from 'react-icons/md';
import { SiStagetimer } from 'react-icons/si';

const Home = () => {
    const arrayTarefas = [
        {
            id: 1,
            title: 'Task Completed',
            value: 'Completed',
        },
        {
            id: 4,
            title: 'Task Completed',
            value: 'Completed',
        },
        {
            id: 2,
            title: 'In Progress',
            value: 'Progress',
        },
        {
            id: 3,
            title: 'Task Won’t Do',
            value: 'To Do',
        },
    ];

    const DivTitle = () => {
        return (
            <>
                <h1 className="flex items-center gap-2 md:text-4xl">
                    <FaAtlas className="text-[#E9A23B]" size={25} />
                    My Task Board
                </h1>
                <p className="text-base ml-9">Tasks to keep organised</p>
            </>
        );
    };

    return (
        <>
            <main className="w-full flex justify-center">
                <div className="w-[600px] h-full p-4 m-2 relative">
                    <DivTitle />
                    <div className="py-4 flex flex-col justify-center items-center gap-3">
                        {arrayTarefas.map((info) => (
                            <div
                                key={info.id}
                                className={`${
                                    info.value == 'Completed'
                                        ? 'bg-[#A0ECB1]'
                                        : info.value == 'Progress'
                                        ? 'bg-[#F5D565]'
                                        : 'bg-[#F7D4D3]'
                                } p-2 rounded-lg w-full`}
                            >
                                <div className="flex justify-between items-center gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white rounded-lg p-1 text-[#A0ECB1]">
                                            <FaRegCompass size={25} />
                                        </div>
                                        <h1 className="">{info.title}</h1>
                                    </div>

                                    {info.value == 'Completed' ? (
                                        <div className="bg-[#32D657] p-1 rounded-xl">
                                            <FaCheck
                                                size={25}
                                                className="text-[#A0ECB1]"
                                            />
                                        </div>
                                    ) : info.value == 'Progress' ? (
                                        <div className="bg-[#E9A23B] p-1 rounded-xl">
                                            <SiStagetimer
                                                size={25}
                                                className="text-[#F5D565]"
                                            />
                                        </div>
                                    ) : (
                                        <div className="bg-[#DD524C] p-1 rounded-xl">
                                            <IoMdClose
                                                size={25}
                                                className="text-[#F7D4D3]"
                                            />
                                        </div>
                                    )}

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='' >Add New Task</div>
                </div>
            </main>
        </>
    );
};

export default Home;
