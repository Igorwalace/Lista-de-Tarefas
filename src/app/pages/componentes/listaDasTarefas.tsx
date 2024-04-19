'use client'
import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaCheck, FaRegCompass } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { SiStagetimer } from 'react-icons/si'

const listaDasTarefas = ({ arrayTarefas, setArrayTarefas, setModalDetails, modalDetails, setTaskDetails, taskDetails, setIsDelete }: any) => {

    const handleTaskChange = (id: number, newValue: 'Completed' | 'Progress' | 'To Do') => {
        setArrayTarefas((prevTasks: any) =>
            prevTasks.map((task: any) => (task.id === id ? { ...task, value: newValue } : task))
        );
    };

    const handleDetails = (id: any, title: any, description: any, value: any) => {
        setModalDetails(true)
        setTaskDetails([
            {
                id: id,
                title: title,
                description: description,
                value: value,
            }
        ])
    }

    const handleDeleteTask = (id:number) => {
        const filter = arrayTarefas.filter((user:any) => user.id !== id);
        setArrayTarefas(filter);
        setModalDetails(false)
        setIsDelete(true)
    }

    return (
        <>
            <div className="py-4 flex flex-col justify-center items-center gap-3">
                {arrayTarefas.map((info: any) => (
                    <div
                        key={info.id}
                        className={`${info.value == 'Completed'
                            ? 'bg-[#A0ECB1]'
                            : info.value == 'Progress'
                                ? 'bg-[#F5D565]'
                                : 'bg-[#F7D4D3]'
                            } p-2 rounded-lg w-full`}
                    >
                        <div className="flex justify-between items-center gap-3">
                            <div className="flex items-center gap-3 cursor-pointer"
                                onClick={() => handleDetails(info.id, info.title, info.description, info.value)}>
                                <div className="bg-white rounded-lg p-1 text-[#A0ECB1]">
                                    <FaRegCompass size={25} />
                                </div>
                                <h1 className="capitalize">{info.title}</h1>
                            </div>

                            {info.value == 'Completed' ? (
                                <div className="bg-[#32D657] p-1 rounded-xl cursor-pointer"
                                    onClick={() => handleTaskChange(info.id, 'Progress')}>
                                    <FaCheck
                                        size={25}
                                        className="text-[#A0ECB1]"
                                    />
                                </div>
                            ) : info.value == 'Progress' ? (
                                <div className="bg-[#E9A23B] p-1 rounded-xl cursor-pointer"
                                    onClick={() => handleTaskChange(info.id, 'To Do')}>
                                    <SiStagetimer
                                        size={25}
                                        className="text-[#F5D565]"
                                    />
                                </div>
                            ) : (
                                <div className="bg-[#DD524C] p-1 rounded-xl cursor-pointer"
                                    onClick={() => handleTaskChange(info.id, 'Completed')}>
                                    <IoMdClose
                                        size={25}
                                        className="text-[#F7D4D3]"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                {modalDetails &&
                    <div className="fixed top-0 right-0 bottom-0 left-0 bg-[rgb(0,0,0,0.5)]">
                        <main className='h-full pb-4 flex justify-end'>
                            <div className="relative bg-white md:w-3/6 w-full h-full rounded-xl p-4 m-2" id='container-modal-new-task'>
                                <div className="flex justify-between items-center">
                                    <h1 className="text-xl">Task details</h1>
                                    <div
                                        className="bg-[#DD524C] cursor-pointer rounded-md"
                                        onClick={() => setModalDetails(false)}
                                    >
                                        <IoMdClose
                                            size={35}
                                            className="text-[#F7D4D3]"
                                        />
                                    </div>
                                </div>
                                {taskDetails.map((info: any) => (
                                    <div key={info.id} className='my-4 border-t-2 border-[#0000033]'>
                                        <div>
                                            <div className='my-3' >
                                                <h1 className='p-1 my-1' >Task Name</h1>
                                                <div className='w-full border-2 border-[#3662E3] rounded-xl p-2 capitalize' >
                                                    <h1>{info.title}</h1>
                                                </div>
                                            </div>

                                            <div>
                                                <h1>Descrição</h1>
                                                <div className='w-full border-2 border-[#3662E3] rounded-xl p-2 capitalize' >
                                                    {info.description ? 
                                                    <h1>{info.description}</h1>
                                                    :
                                                    <h1 className='text-[#97A3B6]' >Sem Descrição</h1>
                                                    }
                                                </div>
                                            </div>

                                            <div className='absolute bottom-0 right-0 p-4'>
                                                <button className='bg-[#97A3B6] p-2 rounded-xl text-[#E3E8EF] flex items-center gap-2' onClick={()=>handleDeleteTask(info.id)}>Delete<AiOutlineDelete size={15} /></button>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </main>
                    </div>
                }
            </div>
        </>
    )
}

export default listaDasTarefas