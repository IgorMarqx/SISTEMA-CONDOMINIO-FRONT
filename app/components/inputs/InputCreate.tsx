interface Props {

}

export default function InputCreate(props: Props) {
    return (
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                    Nome <span className="text-red-500">*</span>
                </label>
                <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="name"
                    type="text"
                    placeholder="Nome"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    E-mail <span className="text-red-500">*</span>
                </label>
                <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="w-full md:w-1/1 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Condominio<span className="text-red-500">*</span>
                </label>
                <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </div>
    )
}