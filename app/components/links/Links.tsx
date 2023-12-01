import {faGauge, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {motion} from 'framer-motion';

export default function Links({icon, label, to, isNavCollapsed}: any){
return(
    <div className={`w-[95%] min-w-fit`}>
        <Link className={`text-lg text-start`} href={to}>
            <div className={`pt-1 pb-1 hover:bg-[#6e7073] hover:text-[#fafbfc] w-[100%] rounded tex-base`}>
                <FontAwesomeIcon className={`mr-2 ml-2`} icon={icon} />
                <motion.span
                    className={`ml-1`}
                    initial={{opacity: 0, x: 0}}
                    style={{display: isNavCollapsed ? 'none' : 'inline'}}
                    animate={{opacity: isNavCollapsed ? 0 : 1, x: isNavCollapsed ? -50 : 0}}
                    transition={{duration: .5}}>
                    {label}
                </motion.span>
            </div>
        </Link>
    </div>
    )
}