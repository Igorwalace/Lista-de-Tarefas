import { AiOutlineDelete } from 'react-icons/ai'
import { CgMoreO } from 'react-icons/cg'
import { FaCheck } from 'react-icons/fa'
import { GiBlackBook, GiClaymoreExplosive } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { RiTimer2Line } from 'react-icons/ri'
import {  SiStagetimer } from 'react-icons/si'

const ModalDetailsPage = ({ modalDetails, setModalDetails, taskDetails, handleDeleteTask, setArrayTarefas }: any) => {
    const handleEditTask = (id: number, newValue: string) => {

        setArrayTarefas((prevTasks: any) =>
            prevTasks.map((task: any) => (task.id === id ? { ...task, value: newValue } : task))
        );
    }

    return (
        <>
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
                                            <h1 className='p-1' >Descrição</h1>
                                            <div className='w-full border-2 border-[#3662E3] rounded-xl p-2 capitalize' >
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
                                                {info.icon == 'Timer' 
                                                &&
                                                <div className={`bg-[#00000033] p-1 rounded-md cursor-pointer`}>
                                                    <RiTimer2Line
                                                        size={35}
                                                        className="text-[#DD524C]"
                                                    />
                                                </div>
                                                }
                                                <div className="bg-[#00000033] p-1 rounded-md cursor-pointer">
                                                    <GiClaymoreExplosive
                                                        size={35}
                                                        className="text-[#3662E3]"
                                                    />
                                                </div>
                                                <div className="bg-[#00000033] p-1 rounded-md cursor-pointer">
                                                    <CgMoreO
                                                        size={35}
                                                        className="text-[#E9A23B]"
                                                    />
                                                </div>
                                                <div className="bg-[#00000033] p-1 rounded-md cursor-pointer">
                                                    <GiBlackBook
                                                        size={35}
                                                        className="text-[#32D657]"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='my-3' >
                                            <h1 className='p-1' >Status</h1>
                                            <div className='flex items-center flex-wrap gap-3' >
                                                <div
                                                    className={`${info.value == 'Completed' ? 'border-2 border-[#3662E3]' : 'border-2'} cursor-pointer flex items-center gap-3 bg-[#A0ECB1] p-2 rounded-xl w-5/12`}
                                                    onClick={() => handleEditTask(info.id, info.value = 'Completed')}>

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
                                                    className={`${info.value == 'Progress' ? 'border-2 border-[#3662E3]' : 'border-2'}  cursor-pointer flex items-center gap-3 bg-[#F5D565] p-2 rounded-xl w-5/12`}
                                                    onClick={() => handleEditTask(info.id, info.value = 'Progress')}>
                                                    <div className={`bg-[#E9A23B] p-1 rounded-xl`}>
                                                        <SiStagetimer
                                                            size={25}
                                                            className="text-[#F5D565]"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h1>Em Progresso</h1>
                                                    </div>
                                                </div>

                                                <div
                                                    className={`${info.value == 'To Do' ? 'border-2 border-[#3662E3]' : 'border-2'} cursor-pointer flex items-center gap-3 bg-[#F7D4D3] p-2 rounded-xl w-5/12`}
                                                    onClick={() => handleEditTask(info.id, info.value = 'To Do')}>
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

                                        <div className='absolute bottom-0 right-0 p-4'>
                                            <button
                                                className='bg-[#97A3B6] p-2 px-3 rounded-xl text-[#E3E8EF] flex items-center gap-3'
                                                onClick={() => handleDeleteTask(info.id)}
                                            >
                                                Delete
                                                <AiOutlineDelete size={15} />
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