'use client';
import { IoMdAdd, IoMdClose } from 'react-icons/io';
import DivTitle from './componentes/divTitle';
import ListaDasTarefas from './componentes/listaDasTarefas';
import { useState } from 'react';
import { RiTimer2Line } from 'react-icons/ri';
import { CgMoreO } from 'react-icons/cg';
import { GiBlackBook, GiClaymoreExplosive } from 'react-icons/gi';
import { SiFreedesktopdotorg } from 'react-icons/si';
import { FaCheck } from 'react-icons/fa';

const Home = () => {
    const [modalNewTask, setModalNewTask] = useState(false);
    const handleModalNewtask = () => {
        setModalNewTask(true);
    };
    return (
        <>
            <main className="w-full flex justify-center">
                <div className="w-[600px] h-full p-4 m-2 relative">
                    <DivTitle />
                    <ListaDasTarefas />
                    <div
                        className="bg-[#F5E8D5] w-full rounded-xl p-2 cursor-pointer mt-2"
                        onClick={handleModalNewtask}
                    >
                        <div className="flex gap-3 items-center ">
                            <div className="bg-[#E9A23B] rounded-xl p-1 text-[#E3E8EF]">
                                <IoMdAdd size={25} />
                            </div>
                            <h1>Add New Task</h1>
                        </div>
                    </div>
                </div>
            </main>
            {modalNewTask && (
                <div className="fixed top-0 right-0 bottom-0 left-0 bg-[rgb(0,0,0,0.5)]">
                    <div
                        className="absolute top-2 left-2 right-2 bottom-2 bg-white md:w-3/6 w-full h-full rounded-xl p-4"
                    >
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl">Task details</h1>
                            <div
                                className="bg-[#DD524C] cursor-pointer rounded-md"  
                                onClick={() => setModalNewTask(false)}
                            >
                                <IoMdClose
                                    size={35}
                                    className="text-[#F7D4D3]"
                                />
                            </div>
                        </div>
                        <form className="text-[#97A3B6] w-full mt-5 flex flex-col items-start gap-3">
                            <div className="w-full ">
                                <h1 className="p-1">Task name</h1>
                                <input
                                    type="text"
                                    className="w-full rounded-xl outline-[#3662E3] border-2 border-[#00000033] p-2 placeholder:text-[#0000033]"
                                    placeholder="Title"
                                />
                            </div>
                            <div className="w-full">
                                <h1 className="p-1">Description</h1>
                                <textarea
                                    className="rounded-xl border-2 border-[#00000033] w-full min-h-[200px] resize-none outline-[#3662E3] p-2 placeholder:text-[#0000033]"
                                    placeholder="Description"
                                />
                            </div>
                        </form>

                        <div className="text-[#97A3B6]">
                            <h1 className="p-1">Icon</h1>
                            <div className="flex items-center gap-3">
                                <div className='bg-[#00000033] p-1 rounded-md cursor-pointer' >
                                    <RiTimer2Line
                                        size={35}
                                        className="text-[#DD524C]"
                                    />
                                </div>
                                <div className='bg-[#00000033] p-1 rounded-md cursor-pointer'>
                                    <GiClaymoreExplosive size={35} className='text-[#3662E3]' />
                                </div>
                                <div className='bg-[#00000033] p-1 rounded-md cursor-pointer'>
                                    <CgMoreO size={35} className='text-[#E9A23B]' />
                                </div>
                                <div className='bg-[#00000033] p-1 rounded-md cursor-pointer'>
                                    <SiFreedesktopdotorg size={35} className='text-black' />
                                </div>
                                <div className='bg-[#00000033] p-1 rounded-md cursor-pointer'>
                                    <GiBlackBook size={35} className='text-[#32D657]' />
                                </div>
                            </div>
                            <div className='absolute bottom-0 right-0 p-4' >
                                <button className='bg-[#3662E3] p-1 px-3 rounded-md text-white flex items-center gap-3'>Salvar <FaCheck size={15}/> </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
