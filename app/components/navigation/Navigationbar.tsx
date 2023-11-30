import {ReactNode} from "react";
import Links from "@/app/components/links/Links";

interface LayoutProps {
    children: ReactNode;
}

export default function Navigationbar({children}: LayoutProps){
    return(
        <div className={`flex h-screen shadow-2xl box-sizing:border-box`}>
            <div className={`flex w-[20%] max-w-[20%] min-w-fit bg-[#3C3C3C] justify-center text-[#FFFFFF]`}>
                <Links/>
            </div>
            <div className={`flex flex-1 bg-[#EEEEEE]`}>
                {children}
            </div>
        </div>
    )
}