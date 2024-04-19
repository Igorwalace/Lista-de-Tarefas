import { FaAtlas } from "react-icons/fa";

const DivTitle = () => {
    return (
        <>
            <h1 className="flex items-center gap-2 capitalize text-4xl">
                <FaAtlas className="text-[#E9A23B]" size={25} />
                Meu quadro de tarefas
            </h1>
            <p className="text-base ml-9 capitalize">Tarefas para manter organizado</p>
        </>
    );
};

export default DivTitle