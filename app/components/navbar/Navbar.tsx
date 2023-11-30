import AudaLogo from "@/app/components/logo/AudaLogo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faPowerOff} from "@fortawesome/free-solid-svg-icons/faPowerOff";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";

export default function Navbar(){
    const router = useRouter();
    const logout = () => {
        Cookies.remove('token')
        router.push('/')
    }

    return(
        <div className={`flex min-w-fit`}>
            <div className={`bg-[#3C3C3C] w-[20%] max-w-[20%] min-w-fit h-16 flex justify-center items-center`}>
                <AudaLogo width={109}/>
            </div>

            <div className={`flex-1 flex justify-between items-center p-4 shadow-2xl`}>
                <button><FontAwesomeIcon icon={faBars} /></button>
                <a className={`text-2xl hover:text-zinc-400 cursor-pointer`} onClick={logout}><FontAwesomeIcon icon={faPowerOff} /></a>
            </div>
        </div>
    )
}