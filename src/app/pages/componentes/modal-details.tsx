'use client'
import { useState } from 'react'
import { AiFillBell, AiOutlineDelete } from 'react-icons/ai'
import { FaCheck, FaHeart } from 'react-icons/fa'
import { GiBlackBook } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { RiTimer2Line } from 'react-icons/ri'
import { SiStagetimer } from 'react-icons/si'

const ModalDetailsPage = ({ modalDetails, setModalDetails, taskDetails, handleDeleteTask, setArrayTarefas, setIsUptade }: any) => {
    const [newValueIcon, setNewValueIcon] = useState('')
    const [newValue, setNewValue] = useState('')
    const [newId, setNewId] = useState(null)

    const handleEditTask = (id: any, newValue: string, icon:string) => {
        setNewId(id)
        setNewValue(newValue)
        setNewValueIcon(icon)
    }
    const handleUptade = () => {
        setArrayTarefas((prevTasks: any) =>
            prevTasks.map((task: any) => (task.id === newId ? { ...task, icon: newValueIcon } : task))
        )
        setArrayTarefas((prevTasks: any) =>
            prevTasks.map((task: any) => (task.id === newId ? { ...task, value: newValue } : task))
        )
        setIsUptade(true)
        setModalDetails(false)
    }

    return (
        <>
            {modalDetails &&
                <div className="fixed top-0 right-0 bottom-0 left-0 bg-[rgb(0,0,0,0.5)] z-10">
                    <main className='h-full pb-4 flex justify-end'>
                        <div className="relative bg-white md:w-3/6 w-full h-full rounded-xl p-4 m-2" id='container-modal-new-task'>
                            <div className="flex justify-between items-center">
                                <h1 className="text-xl">Detalhes da Tarefa</h1>
                                <div
                                    className="bg-[#DD524C] cursor-pointer rounded-md hover:scale-105 duration-200"
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
                                            <h1 className='p-1 my-1' >Nome da Tarefa</h1>
                                            <div className='w-full border-2 border-[#3662E3] rounded-xl p-2 capitalize hover:scale-[1.01] duration-200' >
                                                <h1>{info.title}</h1>
                                            </div>
                                        </div>

                                        <div>
                                            <h1 className='p-1' >Descrição</h1>
                                            <div className='w-full border-2 border-[#3662E3] rounded-xl p-2 capitalize hover:scale-[1.01] duration-200' >
                                                {info.description ?
                                                    <h1>{info.description}</h1>
                                                    :
                                                    <h1 className='text-[#97A3B6]' >Sem Descrição</h1>
                                                }
                                            </div>
                                        </div>

                                        <div className='my-3' >
                                            <h1 className='p-1' >Icon</h1>
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`${info.icon == 'Timer' && 'border-[#3662E3]'} border-2  bg-[#00000033] p-1 rounded-xl cursor-pointer hover:scale-105 duration-200`}
                                                    onClick={() => handleEditTask(info.id, info.value, info.icon = 'Timer')}>
                                                    <RiTimer2Line
                                                        size={35}
                                                        className="text-[#E9A23B]"
                                                    />
                                                </div>

                                                <div
                                                    className={`${info.icon == 'Pensando' && 'border-[#3662E3]'} border-2 bg-[#00000033] p-1 rounded-xl cursor-pointer hover:scale-105 duration-200`}
                                                    onClick={() => handleEditTask(info.id, info.value, info.icon = 'Pensando')}
                                                >
                                                    <FaHeart 
                                                        size={35}
                                                        className="text-[#DD524C]"
                                                    />
                                                </div>
                                                <div
                                                    className={`${info.icon == '3p' && 'border-[#3662E3]'} border-2 bg-[#00000033] p-1 rounded-xl cursor-pointer hover:scale-105 duration-200`}
                                                    onClick={() => handleEditTask(info.id, info.value, info.icon = '3p')}>
                                                    <AiFillBell 
                                                        size={35}
                                                        className="text-[#626242]"
                                                    />
                                                </div>
                                                <div
                                                    className={`${info.icon == 'Book' && 'border-[#3662E3]'} border-2 bg-[#00000033] p-1 rounded-xl cursor-pointer hover:scale-105 duration-200`}
                                                    onClick={() => handleEditTask(info.id, info.value, info.icon = 'Book')}
                                                >
                                                    <GiBlackBook
                                                        size={35}
                                                        className="text-[#3662E3]"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='my-3' >
                                            <h1 className='p-1' >Status</h1>
                                            <div className='flex items-center flex-wrap gap-3' >
                                                <div
                                                    className={`${info.value == 'Completed' ? 'border-2 border-[#3662E3]' : 'border-2'} cursor-pointer flex items-center gap-3 bg-[#A0ECB1] p-2 rounded-xl w-[45%] hover:scale-[1.03] duration-200`}
                                                    onClick={() => handleEditTask(info.id, info.value = 'Completed', info.icon)}>

                                                    <div className="bg-[#32D657] p-1 rounded-xl">
                                                        <FaCheck
                                                            size={25}
                                                            className="text-[#A0ECB1]"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h1>Completa</h1>
                                                    </div>
                                                </div>

                                                <div
                                                    className={`${info.value == 'Progress' ? 'border-2 border-[#3662E3]' : 'border-2'}  cursor-pointer flex items-center gap-3 bg-[#F5D565] p-2 rounded-xl w-[45%] hover:scale-[1.03] duration-200`}
                                                    onClick={() => handleEditTask(info.id, info.value = 'Progress', info.icon)}>
                                                    <div className={`bg-[#E9A23B] p-1 rounded-xl`}>
                                                        <SiStagetimer
                                                            size={25}
                                                            className="text-[#F5D565]"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h1>Pendente</h1>
                                                    </div>
                                                </div>

                                                <div
                                                    className={`${info.value == 'To Do' ? 'border-2 border-[#3662E3]' : 'border-2'} cursor-pointer flex items-center gap-3 bg-[#F7D4D3] p-2 rounded-xl w-[45%] hover:scale-[1.03] duration-200`}
                                                    onClick={() => handleEditTask(info.id, info.value = 'To Do', info.icon)}>
                                                    <div className="bg-[#DD524C] p-1 rounded-xl">
                                                        <IoMdClose
                                                            size={25}
                                                            className="text-[#F7D4D3]"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h1>Não feita</h1>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className='absolute bottom-0 right-0 p-4 flex gap-3' id='isInfo'>
                                            <button
                                                className='bg-[#97A3B6] p-2 px-3 rounded-xl text-[#E3E8EF] flex items-center gap-3 hover:scale-105 duration-200'
                                                onClick={() => handleDeleteTask(info.id)}
                                            >
                                                Delete
                                                <AiOutlineDelete size={15} />
                                            </button>
                                            <button className="bg-[#3662E3] p-1 px-3 rounded-xl text-white flex items-center gap-3 hover:scale-105 duration-200" onClick={handleUptade}>
                                                Salvar <FaCheck size={15} />{' '}
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            }
        </>
    )
}

export default ModalDetailsPage