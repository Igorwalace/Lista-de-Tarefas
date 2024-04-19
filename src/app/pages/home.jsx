'use client';
import { IoMdAdd, IoMdInformationCircleOutline } from 'react-icons/io';
import DivTitle from './componentes/divTitle';
import ListaDasTarefas from './componentes/listaDasTarefas';
import { useEffect, useState } from 'react';
import ModalNewTask from './componentes/ModalNewTask';

const Home = () => {
    const [modalNewTask, setModalNewTask] = useState(false);
    const [isInfo, setIsInfo] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [modalDetails, setModalDetails] = useState(false);
    const [taskDetails, setTaskDetails] = useState([]);
    const [arrayTarefas, setArrayTarefas] = useState([
        {
            id: 1,
            title: 'Arrumar o quarto',
            value: 'Completed',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet erat id lorem tristique vehicula. Nunc quis ornare justo, sed volutpat liber',
        },
        {
            id: 4,
            title: 'Estudar Inglês',
            value: 'Completed',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet erat id lorem tristique vehicula. Nunc quis ornare justo, sed volutpat liber',
        },
        {
            id: 21,
            title: 'Cozinhar',
            value: 'Progress',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet erat id lorem tristique vehicula. Nunc quis ornare justo, sed volutpat liber',
        },
    ]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleModalNewtask = () => {
        setModalNewTask(true);
    };

    useEffect(() => {
        const ListaDeTarefas = JSON.parse(localStorage.getItem('ListaDeTarefas'))
        if (ListaDeTarefas) {
            setArrayTarefas(ListaDeTarefas);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('ListaDeTarefas', JSON.stringify(arrayTarefas))
    }, [arrayTarefas]);

    useEffect(() => {
        if (modalNewTask) {
            document.querySelector('body').style.overflow = 'hidden';
        }
        if (!modalNewTask) {
            document.querySelector('body').style.overflow = 'auto';
        }
    }, [modalNewTask]);

    const handleSendTask = () => {
        if (title == '' || description == '') {
            setIsInfo(true)
            return;
        }
        const newTask = [
            ...arrayTarefas,
            {
                title: title,
                description: description,
                id: Math.floor(Math.random() * 10000),
                value: 'To Do',
            },
        ];
        setArrayTarefas(newTask);
        setTitle('');
        setDescription('');
        setModalNewTask(false);
    };

    useEffect(() => {
        if (isInfo, isDelete) {
            setTimeout(() => {
                setIsInfo(false);
                setIsDelete(false);
            }, 3000);
        }
    }, [isInfo, isDelete]);

    return (
        <>
            <main className="w-full flex justify-center">
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
                        className="fixed bottom-4 bg-[#0288d1] rounded-xl md:min-w-[30%] p-2 flex justify-center gap-2 items-center z-[100] text-[#001824]"
                        id="isInfo"
                    >
                        <IoMdInformationCircleOutline size={20} />
                        <h1>Verifique as informações da tarefas.</h1>
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
            />
        </>
    );
};

export default Home;
