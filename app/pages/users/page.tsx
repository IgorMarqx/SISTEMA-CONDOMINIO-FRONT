'use client';
import Auth from "@/app/HOC/auth";
import Layout from "@/app/components/layout/Layout";
import Table from "@/app/components/table/Table";
import ButtonFunctions from "@/app/components/buttons/ButtonFunctions";
import Modal from "@/app/components/modal/Modal";
import {useState} from "react";
import InputCreate from "@/app/components/inputs/InputCreate";
import {toast} from "react-toastify";
import {register} from "@/app/services/api";
import {isValidEmail, isValidName} from "@/app/utils/validations";
import {generateRandomString} from "@/app/utils/generatorRandomString";

function Users() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const toastAutoClose = (text: string) => {
        toast.error(text, {autoClose: 1500})
    }

    const handleRequestSubmit = async () => {
        let password = inputData.password

        if(!inputData.password){
            password = generateRandomString(10)
        }

        return register(inputData.name, inputData.email, password).then((response) => {

            const data = response.data
            console.log(response)

            if (data.error) {
                toastAutoClose(data.message)
                return
            }

            toast.success(data.message, {autoClose: 1500})
            setIsOpen(false)
            return true
        })
    }

    const validateInputs = () => {
        if (!isValidName(inputData.name)) {
            toastAutoClose('Informe um nome')
            return false
        }

        if (!inputData.email.trim()) {
            toastAutoClose('Informe um email')
            return false;
        }

        if (!isValidEmail(inputData.email)) {
            toastAutoClose('Informe um email válido')
            return false;
        }

        if(inputData.password && inputData.password.length < 6){
            toastAutoClose('Informe uma senha com no mínimo 6 caracteres')
            return false;
        }

        return true
    }

    return (
        <Layout>
            <div className={`flex flex-col flex-1`}>
                <div className={`flex`}>
                    <ButtonFunctions onClick={() => setIsOpen(true)} text={'Criar usuário'} color={'bg-[#3C3C3C]'}
                                     hoverColor={'bg-[#5c5b5b]'}/>
                    <Modal modalTitle={'Criar usuário'} isOpen={isOpen} onClose={() => setIsOpen(false)} onValidate={validateInputs} onRequestSubmit={handleRequestSubmit}>
                        <InputCreate setInputData={setInputData} inputData={inputData}/>
                    </Modal>
                </div>
                <div className={`flex bg-white ml-4 mr-4 rounded-sm shadow h-96 flex-col`}>
                    <div className={`border-t-[3px] border-pink-600`}>
                    </div>
                    <div className={`w-[100%]`}>
                        <Table></Table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Auth(Users);
