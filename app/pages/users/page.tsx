'use client';
import Auth from "@/app/HOC/auth";
import Layout from "@/app/components/layout/Layout";
import Table from "@/app/components/table/Table";
import ButtonFunctions from "@/app/components/buttons/ButtonFunctions";

function Users(){
    return(
        <Layout>
            <div className={`flex flex-col flex-1`}>
                <div className={`flex`}>
                    <ButtonFunctions text={'Criar usuário'} color={'bg-[#3C3C3C]'} hoverColor={'bg-[#5c5b5b]'} />
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
