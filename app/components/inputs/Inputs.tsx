import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

interface Props {
    textFor?: string;
    label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
    typeInput?: string;
    required?: string;
    placeHolder: string;
    value: string;
    onChange: (e: any) => void;
}

export default function InputLayout(props: Props) {
    return(
        <div className={`flex flex-col justify-center`}>
            <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`} htmlFor={props.textFor}>{props.label} <span className={`text-red-500`}>{props.required}</span></label>
            <input
                className={`appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                type={props.typeInput}
                id={props.textFor}
                placeholder={props.placeHolder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}