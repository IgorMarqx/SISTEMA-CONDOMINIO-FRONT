'use client';
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {login} from "@/app/services/api";
import {toast} from "react-toastify";
import Cookies from 'js-cookie'

import InputLayout from "@/app/components/inputs/InputLayout";
import ButtonDefault from "@/app/components/buttons/ButtonDefault";
import AudaLogo from "@/app/components/logo/AudaLogo";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const token = Cookies.get('token')

        if (token) {
            router.push('/pages/dashboard')
        }
    })

    const handleEmailChange = (e: any) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsButtonDisabled(newEmail === "" || password === "");
    };

    const handlePasswordChange = (e: any) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setIsButtonDisabled(email === "" || newPassword === "");
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsButtonDisabled(true)

        login(email, password).then((response) => {
            const data = response.data

            if (data.error) {
                toast.error(data.message)

                setTimeout(() => {
                    setIsButtonDisabled(false)
                }, 1200)
                return
            }

            Cookies.set('token', data.token)
            router.push("/dashboard");
        })
    }

    return (
        <div className={`w-screen mt-20 flex justify-center items-center`}>
            <div className={`w-96`}>
                <div className={`flex flex-col justify-center items-center`}>
                    <AudaLogo/>
                    <p className={`font-bold`}><span className={`text-pink-500`}>SGC</span> - Sistema de Gestão
                        Condominal</p>
                </div>
                <InputLayout
                    textFor={'email'}
                    label={'E-mail'}
                    typeInput={'text'}
                    required={'*'}
                    placeHolder={'Informe seu e-mail'}
                    value={email}
                    onChange={handleEmailChange}
                />
                <InputLayout
                    textFor={'password'}
                    label={'Password'}
                    typeInput={'password'}
                    required={'*'}
                    placeHolder={'Informe sua senha'}
                    value={password}
                    onChange={handlePasswordChange}
                />
                <ButtonDefault
                    text={'Entrar'}
                    buttonColor={'bg-pink-500'}
                    hoverButtonColor={'hover:bg-pink-600'}
                    disabled={isButtonDisabled}
                    onClick={handleSubmit}
                />
            </div>
        </div>
    )
}