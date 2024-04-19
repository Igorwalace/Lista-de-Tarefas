import { AiOutlineDelete } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

const ModalDetailsPage = ({modalDetails, setModalDetails, taskDetails, handleDeleteTask}:any) => {
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
                                            <h1 className='p-1' >Status</h1>
                                        </div>

                                        <div className='absolute bottom-0 right-0 p-4'>
                                            <button className='bg-[#97A3B6] p-2 rounded-xl text-[#E3E8EF] flex items-center gap-2' onClick={() => handleDeleteTask(info.id)}>Delete<AiOutlineDelete size={15} /></button>
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