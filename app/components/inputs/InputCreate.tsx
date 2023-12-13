'use client'
import Inputs from "@/app/components/inputs/Inputs";
import {useEffect, useState} from "react";
import Select from "@/app/components/inputs/Select";
import {getCondominiums} from "@/app/services/api";

export default function InputCreate({setInputData, inputData}: any) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [condominium, setCondominium] = useState([]);
    const [selectedCondominium, setSelectedCondominium] = useState();

    useEffect(() => {
        getCondominiums().then((response) => {
            setCondominium(response)
        })
    }, []);

    const handleNameChange = (e: any) => {
        const newName = e.target.value;
        setName(newName);
        setInputData({...inputData, name: newName})
    }

    const handleEmailChange = (e: any) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setInputData({...inputData, email: newEmail})
    }

    const handlePasswordChange = (e: any) => {
        const newPassword = e.target.value
        setPassword(newPassword)
        setInputData({...inputData, password: newPassword})
    }

    const handleCondominiumChange = (e: any) => {
        const newCondominium = e.target.value
        setSelectedCondominium(newCondominium)
        setInputData({...inputData, condominiumId: newCondominium})

        console.log(newCondominium)
    }

    return (
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
                <Inputs
                    textFor="name"
                    label={'Nome'}
                    placeHolder={'Informe seu nome'}
                    required={'*'}
                    value={name}
                    onChange={handleNameChange}/>
            </div>
            <div className="w-full md:w-1/2 px-3">
                <Inputs
                    textFor="email"
                    label={'Email'}
                    placeHolder={'Informe seu e-mail'}
                    required={'*'}
                    value={email}
                    onChange={handleEmailChange}/>
            </div>
            <div className="w-full md:w-1/1 px-3">
                <Inputs
                    textFor="password"
                    label={'Senha'}
                    placeHolder={'Informe uma senha'}
                    required={'(opcional)'}
                    value={password}
                    onChange={handlePasswordChange}/>
            </div>
            <div className="w-full md:w-1/1 px-3">
                <Select
                    textFor="condominio"
                    label="Condominio"
                    required="*"
                    placeHolder="Select an option"
                    value={selectedCondominium}
                    onChange={handleCondominiumChange}
                >
                    <option disabled selected>Escolha um condominio</option>
                    {condominium.map((condominiums: any) => {
                        return (
                            <option key={condominiums.id} value={parseInt(condominiums.id)}>{condominiums.name}</option>
                        )
                    })}
                </Select>
            </div>
        </div>
    )
}