import AudaLogo from "@/app/components/logo/AudaLogo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faPowerOff} from "@fortawesome/free-solid-svg-icons/faPowerOff";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";
import {motion} from 'framer-motion';

export default function Navbar({isNavCollapsed, setIsNavCollapsed}: any) {
    const router = useRouter();
    const logout = () => {
        Cookies.remove('token')
        router.push('/')
    }

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    }


    return (
        <div className={`flex`}>
            <motion.div
                className={`bg-[#3C3C3C] ${isNavCollapsed ? 'w-[74px]' : 'w-[250px]'} max-w-[250px] min-w-fit flex justify-center items-center border-b-2 border-[#636262]`}
                initial={{width: isNavCollapsed ? 74 : 250}}
                animate={{width: isNavCollapsed ? 74 : 250}}
                transition={{duration: .5}}>

                <motion.div
                    initial={{width: isNavCollapsed ? 58 : 109}}
                    animate={{width: isNavCollapsed ? 58 : 109}}
                    transition={{duration: .5}}>
                    <AudaLogo width={109}/>
                </motion.div>

                <motion.p
                    className={`text-white text-lg ml-4`}
                    initial={{opacity: 0, x: 0}}
                    animate={{opacity: isNavCollapsed ? 0 : 1, x: isNavCollapsed ? -50 : 0}}
                    transition={{duration: .5}}>
                    {isNavCollapsed ? '' : 'AUDA - COND'}
                </motion.p>
            </motion.div>

            <div
                className={`flex-1 flex justify-between items-center p-4 shadow-2xl border-b-[.1rem] border-[#DEE2E6]`}>
                <button onClick={handleNavCollapse}><FontAwesomeIcon icon={faBars}/></button>
                <a className={`text-2xl hover:text-zinc-400 cursor-pointer`} onClick={logout}><FontAwesomeIcon
                    icon={faPowerOff}/></a>
            </div>
        </div>
    )
}