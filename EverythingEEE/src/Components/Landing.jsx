function Landing() {

    return (
        <>
            <div className=" bg-black flex ">
                <div>
                    <div className=" pl-[185px] pt-[135px] ">
                        <div className=" text-6xl text-[#209EE4] font-bold">
                            EveryThing
                        </div>
                        <div className=" text-5xl pl-[185px] text-[#209EE4]  font-bold">
                            EEE....
                        </div>
                    </div>

                    <div className="w-[650px] pl-[185px] pt-8 text-white font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima adipisci,
                        numquam culpa recusandae aliquid velit architecto qui obcaecati! Nobis
                        labore laborum corporis nam velit fugit quas aliquid enim impedit.
                        Quibusdam fugiat .
                    </div>

                    <div>
                        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4
                         border-blue-700 hover:border-blue-500 rounded ml-[550px] mt-5">start studying</button>
                    </div>
                    
                </div>

                <div className="h-screen pl-14 w-[700px]">
                    <img src=".\src\assets\images.png" alt="img" className=" h-52" />
                </div>
            </div>
            
        </>
    )
}

export default Landing