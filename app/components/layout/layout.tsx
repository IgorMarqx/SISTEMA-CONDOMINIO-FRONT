import {ReactNode} from "react";
import Navbar from "@/app/components/navbar/Navbar";
import Navigationbar from "@/app/components/navigation/Navigationbar";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (
        <>
            <Navbar/>
            <Navigationbar/>
            {children}
        </>
    )
}