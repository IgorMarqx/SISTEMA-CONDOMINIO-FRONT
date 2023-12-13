import {useEffect, useState} from "react";
import {getUsers} from "@/app/services/api";

export default function Table(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((response) => {
            setUsers(response)
        })
    })

    return(
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            NOME
                        </th>
                        <th scope="col" className="px-6 py-3">
                            E-MAIL
                        </th>
                        <th scope="col" className="px-6 py-3">
                            AÇÕES
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800hover:bg-gray-50">
                        {users}
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}