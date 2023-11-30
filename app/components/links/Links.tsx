import {faGauge, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Links(){
return(
        <div className={`w-[95%] min-w-fit`}>
            <div className={`pt-1 pb-1 hover:bg-[#6e7073] hover:text-[#fafbfc] w-[100%]`}>
                <a className={`text-lg pt-1 pb-1 rounded-sm text-start`} href={`/pages/dashboard`}><FontAwesomeIcon className={`mr-2 ml-2`} icon={faGauge} />Dashboard</a>
            </div>
            <div className={`pt-1 pb-1 hover:bg-[#6e7073] hover:text-[#fafbfc] w-[100%]`}>
                <a className={`text-lg pt-1 pb-1 rounded-sm text-start`} href={`pages/dashboard`}><FontAwesomeIcon className={`mr-2 ml-2`} icon={faUsers} />Usuários</a>
            </div>
        </div>
    )
}