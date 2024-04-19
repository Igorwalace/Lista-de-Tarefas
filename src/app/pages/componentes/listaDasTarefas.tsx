import { FaCheck, FaHeart, FaRegCompass } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { SiStagetimer } from 'react-icons/si'
import ModalDetailsPage from './modal-details';
import { RiTimer2Line } from 'react-icons/ri';
import { GiBlackBook, GiClaymoreExplosive } from 'react-icons/gi';
import { CgMoreO } from 'react-icons/cg';
import { AiFillBell } from 'react-icons/ai';

const listaDasTarefas = ({ arrayTarefas, setArrayTarefas, setModalDetails, modalDetails, setTaskDetails, setIsDelete, taskDetails, setIsUptade, isUptade }: any) => {

    const handleTaskChange = (id: number, newValue: 'Completed' | 'Progress' | 'To Do') => {
        setArrayTarefas((prevTasks: any) =>
            prevTasks.map((task: any) => (task.id === id ? { ...task, value: newValue } : task))
        );
    };

    const handleDetails = (id: any, title: any, description: any, value: any, icon:any) => {
        setModalDetails(true)
        setTaskDetails([
            {
                id: id,
                title: title,
                description: description,
                value: value,
                icon: icon
            }
        ])
    }

    const handleDeleteTask = (id: number) => {
        const filter = arrayTarefas.filter((user: any) => user.id !== id);
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
                                onClick={() => handleDetails(info.id, info.title, info.description, info.value, info.icon)}>
                                <div className="bg-[#E3E8EF] rounded-lg p-1 text-[#A0ECB1]">
                                    {info.icon == 'Timer' &&
                                        <RiTimer2Line
                                            size={35}
                                            className="text-[#E9A23B]"
                                        />
                                    }
                                    {info.icon == 'Pensando' &&
                                        <FaHeart 
                                        size={35}
                                        className="text-[#DD524C]"
                                    />}

                                    {info.icon == '3p' &&
                                        <AiFillBell
                                            size={35}
                                            className="text-[#626242]"
                                        />}
                                    {info.icon == 'Book' &&
                                        <GiBlackBook
                                            size={35}
                                            className="text-[#3662E3]"
                                        />
                                    }
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
                <ModalDetailsPage
                    modalDetails={modalDetails}
                    setModalDetails={setModalDetails}
                    taskDetails={taskDetails}
                    handleDeleteTask={handleDeleteTask}
                    setArrayTarefas={setArrayTarefas}
                    setIsUptade={setIsUptade}
                    isUptade={isUptade}
                />
            </div>
        </>
    )
}

export default listaDasTarefas