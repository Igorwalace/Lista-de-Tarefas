import React from 'react'
import { FaCheck, FaRegCompass } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { SiStagetimer } from 'react-icons/si'

const listaDasTarefas = ({arrayTarefas}:any) => {
    return (
        <>
        <div className="py-4 flex flex-col justify-center items-center gap-3">
            {arrayTarefas.map((info:any) => (
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
                        <div className="flex items-center gap-3">
                            <div className="bg-white rounded-lg p-1 text-[#A0ECB1]">
                                <FaRegCompass size={25} />
                            </div>
                            <h1 className="capitalize">{info.title}</h1>
                        </div>

                        {info.value == 'Completed' ? (
                            <div className="bg-[#32D657] p-1 rounded-xl">
                                <FaCheck
                                    size={25}
                                    className="text-[#A0ECB1]"
                                    onClick={()=> {
                                        info.value = 'Progress'
                                    }}
                                />
                            </div>
                        ) : info.value == 'Progress' ? (
                            <div className="bg-[#E9A23B] p-1 rounded-xl">
                                <SiStagetimer
                                    size={25}
                                    className="text-[#F5D565]"
                                    onClick={()=> {
                                        info.value = 'Completed'
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="bg-[#DD524C] p-1 rounded-xl">
                                <IoMdClose
                                    size={25}
                                    className="text-[#F7D4D3]"
                                    onClick={()=> {
                                        info.value = 'To Do'
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default listaDasTarefas