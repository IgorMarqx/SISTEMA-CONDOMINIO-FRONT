'use client';
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";
import {useEffect} from "react";
import {verifyToken} from "@/app/services/api";

export default function Auth(Component: any) {
    return function AuthenticatedComponent(props: any){
        const router = useRouter();
        const token = Cookies.get('token')

        useEffect(() => {
            verifyToken(token).then((response) => {
                const data = response.data

                if(data.error){
                    Cookies.remove('token')
                    router.replace('/')
                    return
                }
            })
        }, []);

        if(!token){
            router.replace('/')
            return null
        }

        return <Component {...props}/>
    }
}