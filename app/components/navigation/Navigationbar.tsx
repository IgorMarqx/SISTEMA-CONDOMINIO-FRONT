import {ReactNode} from "react";
import Links from "@/app/components/links/Links";
import {faGauge, faUsers} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Navigationbar({children, isNavCollapsed}: any){
    return(
        <div className={`flex h-screen shadow-2xl box-sizing:border-box`}>
            <motion.div
                className={`flex ${isNavCollapsed ? 'w-[74px]' : 'w-[250px]'} max-w-[250px] bg-[#3C3C3C] justify-center text-[#FFFFFF]`}   initial={{ width: isNavCollapsed ? 74 : 250 }}
                 animate={{ width: isNavCollapsed ? 74 : 250 }}
                 transition={{ duration: .5 }}>

                <div className={`w-[100%] pl-4 pt-4`}>
                    <Links icon={faGauge} label='Dashboard' to='/pages/dashboard' isNavCollapsed={isNavCollapsed} />
                    <Links icon={faUsers} label='Usuários' to='/pages/users' isNavCollapsed={isNavCollapsed} />
                </div>

            </motion.div>
            <div className={`flex flex-1 bg-[#EEEEEE]`}>
                {children}
            </div>
        </div>
    )
}