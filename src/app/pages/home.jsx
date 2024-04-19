'use client';
import { IoMdAdd } from 'react-icons/io';
import DivTitle from './componentes/divTitle';
import ListaDasTarefas from './componentes/listaDasTarefas';
import { useEffect, useState } from 'react';
import ModalNewTask from './componentes/ModalNewTask';

const Home = () => {
    const [modalNewTask, setModalNewTask] = useState(false);
    const [arrayTarefas, setArrayTarefas] = useState([
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
            id: 21,
            title: 'In Progress',
            value: 'Progress',
        },
        {
            id: 3,
            title: 'Task Won’t Do',
            value: 'To Do',
        },
        {
            id: 2,
            title: 'In Progress',
            value: 'Progress',
        },
        {
            id: 13,
            title: 'Task Won’t Do',
            value: 'To Do',
        },
    ]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleModalNewtask = () => {
        setModalNewTask(true);
    };

    useEffect(() => {
        if (modalNewTask) {
            document.querySelector('body').style.overflow = 'hidden';
        }
        if (!modalNewTask) {
            document.querySelector('body').style.overflow = 'auto';
        }
    }, [modalNewTask]);

    const handleSendTask = () => {
        const newTask = [
            ...arrayTarefas,
            {
                title: title,
                description: description,
                id: 1011,
                value: 'To Do',
            },
        ];
        setArrayTarefas(newTask)
        setTitle('')
        setDescription('')
        setModalNewTask(false)
    };

    return (
        <>
            <main className="w-full flex justify-center">
                <div className="w-[600px] h-full p-4 m-2 relative">
                    <DivTitle />
                    <ListaDasTarefas arrayTarefas={arrayTarefas} />
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
