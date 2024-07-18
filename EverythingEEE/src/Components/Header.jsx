function Header() {

    return (
      <>
        <header className="w-full h-16 bg-black flex justify-between items-center">
           
                <div className="text-white text-4xl py-2 px-3">
                    Portflio
                </div>
                <div className=" flex-grow py-2 px-16 ">
                    <ul className=" flex-wrap justify-evenly w-full hidden md:inline-flex">
                        <li className=" text-white"><a href="####">About me</a></li>
                        <li className=" text-white"><a href="####">Pojects</a></li>
                        <li className=" text-white"><a href="####">Skills</a></li>
                        <li className=" text-white"><a href="####">contacts</a></li>
                    </ul>
                </div>
                <div>
                <a className="text-5xl mr-2 pb-5" href="#">&#8801;</a>
                </div>
        </header>
      </>
    )
  }
  
  export default Header