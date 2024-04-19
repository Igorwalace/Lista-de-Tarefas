import { FaCheck, FaRegCompass } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { SiStagetimer } from 'react-icons/si'
import ModalDetailsPage from './modal-details';

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
                <ModalDetailsPage
                    modalDetails={modalDetails}
                    setModalDetails={setModalDetails}
                    taskDetails={taskDetails}
                    handleDeleteTask={handleDeleteTask}
                />
            </div>
        </>
    )
}

export default listaDasTarefas