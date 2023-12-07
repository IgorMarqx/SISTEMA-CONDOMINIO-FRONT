import InputLayout from "@/app/components/inputs/InputLayout";
import Inputs from "@/app/components/inputs/Inputs";
import {useState} from "react";

export default function InputCreate({ setInputData, inputData }: any) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [condominio, setCondominio] = useState('');

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

    return (
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
                <Inputs
                    label={'Nome'}
                    placeHolder={'Informe seu nome'}
                    required={'*'}
                    value={name}
                    onChange={handleNameChange}/>
            </div>
            <div className="w-full md:w-1/2 px-3">
                <Inputs
                    label={'Email'}
                    placeHolder={'Informe seu e-mail'}
                    required={'*'}
                    value={email}
                    onChange={handleEmailChange}/>
            </div>
            <div className="w-full md:w-1/1 px-3">
                <Inputs
                    label={'Senha'}
                    placeHolder={'Informe uma senha'}
                    required={'(opcional)'}
                    value={password}
                    onChange={handlePasswordChange}/>
            </div>
        </div>
    )
}