import Image from "next/image"
import Menu from "./Menu"
import { AiOutlineHome,AiOutlineBell,AiOutlineMessage,AiOutlineUser,AiOutlineSetting } from 'react-icons/ai';
import {BsBookmark} from 'react-icons/bs'


export default function NavBar() {
  return (
    <section className="bg-cyan-300 grid h-[70px] items-center">

        <div className="flex items-center justify-between mx-5">
            <Image src="/logo.png" alt="" width={40} height={40}></Image>
            <Menu text="Home" Icon={<AiOutlineHome size={20} active/>}/>
            <Menu text="Notification" Icon={<AiOutlineBell size={20}/>}/>
            <Menu text="Massege" Icon={<AiOutlineMessage size={20}/>}/>
            <Menu text="Profile" Icon={<AiOutlineUser size={20}/>}/>
            <Menu text="Saved" Icon={<BsBookmark size={20}/>}/>
            <Menu text="Settings" Icon={<AiOutlineSetting size={20}/>}/>
            <div className="flex hoverEfect"><p>hello Tania</p><img src="/logo.png" className="h-5 w-5 rounded"/></div>
            
        </div>
    </section>
  )
}
