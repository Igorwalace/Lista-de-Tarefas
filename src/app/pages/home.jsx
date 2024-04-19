'use client';
import { IoMdAdd, IoMdInformationCircleOutline } from 'react-icons/io';
import DivTitle from './componentes/divTitle';
import ListaDasTarefas from './componentes/listaDasTarefas';
import { useEffect, useState } from 'react';
import ModalNewTask from './componentes/ModalNewTask';

const Home = () => {
    const [modalNewTask, setModalNewTask] = useState(false);
    const [isUptade, setIsUptade] = useState(false)
    const [isInfo, setIsInfo] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [modalDetails, setModalDetails] = useState(false);
    const [taskDetails, setTaskDetails] = useState([]);
    const [arrayTarefas, setArrayTarefas] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('Timer')

    const handleModalNewtask = () => {
        setModalNewTask(true);
    };

    useEffect(() => {
        const ListaDeTarefas = JSON.parse(
            localStorage.getItem('ListaDeTarefas')
        );
        if (ListaDeTarefas) {
            setArrayTarefas(ListaDeTarefas);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('ListaDeTarefas', JSON.stringify(arrayTarefas));
    }, [arrayTarefas]);

    useEffect(() => {
        if (modalNewTask || modalDetails) {
            document.querySelector('body').style.overflow = 'hidden';
        }
        if (!modalNewTask || !modalDetails) {
            document.querySelector('body').style.overflow = 'auto';
        }
    }, [modalNewTask, modalDetails]);

    const handleSendTask = () => {
        if (title == '') {
            setIsInfo(true);
            return;
        }

        const newTask = [
            ...arrayTarefas,
            {
                title: title,
                description: description,
                id: Math.floor(Math.random() * 10000),
                value: 'To Do',
                icon: icon
            },
        ];
        setArrayTarefas(newTask);
        setTitle('');
        setDescription('');
        setModalNewTask(false);
    };

    useEffect(() => {
        if (isInfo || isDelete || isUptade) {
            setTimeout(() => {
                setIsInfo(false);
                setIsUptade(false)
                setIsDelete(false);
            }, 2000);
        }
    }, [isUptade, isInfo, isDelete]);

    return (
        <>
            <main
                className="w-full flex justify-center"
                onClick={() => {
                    setIsInfo(false);
                }}
            >
                <div className="w-[600px] h-full p-4 m-2 relative">
                    <DivTitle />
                    <ListaDasTarefas
                        arrayTarefas={arrayTarefas}
                        setArrayTarefas={setArrayTarefas}
                        modalDetails={modalDetails}
                        setModalDetails={setModalDetails}
                        taskDetails={taskDetails}
                        setTaskDetails={setTaskDetails}
                        setIsDelete={setIsDelete}
                        setIsInfo={setIsInfo}
                        setIsUptade={setIsUptade}
                        isUptade={isUptade}
                    />
                    <div
                        className="bg-[#6d8ae3] w-full rounded-xl p-2 cursor-pointer mt-2"
                        onClick={handleModalNewtask}
                    >
                        <div className="flex gap-3 items-center ">
                            <div className="bg-[#3662E3] rounded-xl p-1 text-[#ffff]">
                                <IoMdAdd size={25} />
                            </div>
                            <h1>Adicionar nova tarefa</h1>
                        </div>
                    </div>
                </div>
                {isInfo && (
                    <div
                        className="fixed bottom-4 bg-[#f57c00] rounded-xl md:min-w-[30%] p-2 flex justify-center gap-2 items-center z-[100] text-[#201000]"
                        id="isInfo"
                    >
                        <IoMdInformationCircleOutline size={20} />
                        <h1>Verifique as informações da tarefas.</h1>
                    </div>
                )}
                {isUptade && (
                    <div
                        className="fixed bottom-4 bg-[#0288d1] rounded-xl md:min-w-[30%] p-2 flex justify-center gap-2 items-center z-[100] text-[#01293f]"
                        id="isInfo"
                    >
                        <IoMdInformationCircleOutline size={20} />
                        <h1>Tarefa atualizada.</h1>
                    </div>
                )}
                {isDelete && (
                    <div
                        className="fixed bottom-4 bg-[#97A3B6] rounded-xl md:min-w-[30%] p-2 flex justify-center gap-2 items-center z-[100] text-[#E3E8EF]"
                        id="isInfo"
                    >
                        <IoMdInformationCircleOutline size={20} />
                        <h1>Tarefa removida.</h1>
                    </div>
                )}
            </main>

            <ModalNewTask
                modalNewTask={modalNewTask}
                setModalNewTask={setModalNewTask}
                setDescription={setDescription}
                description={description}
                title={title}
                setTitle={setTitle}
                handleSendTask={handleSendTask}
                setIsInfo={setIsInfo}
                setIcon={setIcon}
                icon={icon}
            />
        </>
    );
};

export default Home;
