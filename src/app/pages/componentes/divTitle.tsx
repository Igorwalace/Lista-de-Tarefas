import { FaAtlas } from "react-icons/fa";

const DivTitle = () => {
    return (
        <>
            <h1 className="flex items-center gap-2 text-4xl">
                <FaAtlas className="text-[#E9A23B]" size={25} />
                My Task Board
            </h1>
            <p className="text-base ml-9">Tasks to keep organised</p>
        </>
    );
};

export default DivTitle