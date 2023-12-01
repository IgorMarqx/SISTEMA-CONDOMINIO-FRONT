import {ReactNode, useState} from "react";
import Navbar from "@/app/components/navbar/Navbar";
import Navigationbar from "@/app/components/navigation/Navigationbar";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    const [isNavCollapsed, setIsNavCollapsed] = useState(false);

    return (
        <>
            <Navbar isNavCollapsed={isNavCollapsed} setIsNavCollapsed={setIsNavCollapsed} />
            <Navigationbar isNavCollapsed={isNavCollapsed} >
                {children}
            </Navigationbar>
        </>
    )
}