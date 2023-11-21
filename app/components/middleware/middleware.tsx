'use client'
import {useEffect} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import Cookies from "js-cookie";
import Layout from "@/app/components/layout/layout";

export default function Middleware() {

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const cookies = Cookies.get('token')

        if (!cookies && pathname !== '/login') {
            router.push('/');
        }

    }, [router]);

    return <>
        <Layout/>
    </>;
}
