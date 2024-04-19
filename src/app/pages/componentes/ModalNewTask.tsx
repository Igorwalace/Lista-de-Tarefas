import React from 'react'
import { AiFillBell } from 'react-icons/ai'
import { CgMoreO } from 'react-icons/cg'
import { FaCheck, FaHeart } from 'react-icons/fa'
import { GiBlackBook, GiClaymoreExplosive } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { RiTimer2Line } from 'react-icons/ri'

const ModalNewTask = ({ modalNewTask, setModalNewTask, setDescription, description, title, setTitle, handleSendTask, setIsInfo, setIcon, icon }: any) => {
    const handleIconChange = (value: string) => {
        setIcon(value)
    };
    return (
        <>
            {modalNewTask && (
                <div className="fixed top-0 right-0 bottom-0 left-0 bg-[rgb(0,0,0,0.5)]">
                    <main className='h-full pb-4 flex justify-end'>
                        <div className="relative bg-white md:w-3/6 w-full h-full rounded-xl p-4 m-2" id='container-modal-new-task'>
                            <div className="flex justify-between items-center">
                                <h1 className="text-xl">Task details</h1>
                                <div
                                    className="bg-[#DD524C] cursor-pointer rounded-md"
                                    onClick={() => {
                                        setModalNewTask(false)
                                    }}
                                >
                                    <IoMdClose
                                        size={35}
                                        className="text-[#F7D4D3]"
                                    />
                                </div>
                            </div>
                            <form className="text-[#97A3B6] w-full mt-5 flex flex-col items-start gap-3" onClick={() => { setIsInfo(false) }}>
                                <div className="w-full ">
                                    <h1 className="p-1">Task name</h1>
                                    <input
                                        type="text"
                                        className="w-full rounded-xl outline-[#3662E3] border-2 border-[#00000033] p-2 placeholder:text-[#0000033]"
                                        placeholder="Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="w-full">
                                    <h1 className="p-1">Description</h1>
                                    <textarea
                                        className="rounded-xl border-2 border-[#00000033] w-full min-h-[200px] resize-none outline-[#3662E3] p-2 placeholder:text-[#0000033]"
                                        placeholder="Description (opcional)"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            </form>

                            <div className="text-[#97A3B6]">
                                <h1 className="p-1">Icon</h1>
                                <div className="flex items-center gap-3">
                                    <div className={`${icon == 'Timer' && 'border-[#3662E3]'} bg-[#00000033] p-1 rounded-md cursor-pointer border-2`} onClick={() => handleIconChange('Timer')}>
                                        <RiTimer2Line
                                            size={35}
                                            className="text-[#E9A23B]"
                                        />
                                    </div>
                                    <div className={`${icon == 'Pensando' && 'border-[#3662E3]'} bg-[#00000033] p-1 rounded-md cursor-pointer border-2`} onClick={() => handleIconChange('Pensando')}>
                                        <FaHeart
                                            size={35}
                                            className="text-[#DD524C]"
                                        />
                                    </div>
                                    <div className={`${icon == '3p' && 'border-[#3662E3]'} bg-[#00000033] p-1 rounded-md cursor-pointer border-2`} onClick={() => handleIconChange('3p')}>
                                        <AiFillBell
                                            size={35}
                                            className="text-[#626242]"
                                        />
                                    </div>
                                    <div className={`${icon == 'Book' && 'border-[#3662E3]'} bg-[#00000033] p-1 rounded-md cursor-pointer border-2`} onClick={() => handleIconChange('Book')}>
                                        <GiBlackBook
                                            size={35}
                                            className="text-[#3662E3]"
                                        />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-0 p-4">
                                    <button className="bg-[#3662E3] p-1 px-3 rounded-md text-white flex items-center gap-3" onClick={handleSendTask}>
                                        Salvar <FaCheck size={15} />{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            )}
        </>
    )
}

export default ModalNewTask