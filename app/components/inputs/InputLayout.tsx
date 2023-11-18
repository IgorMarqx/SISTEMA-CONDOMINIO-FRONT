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
            <label className={`mt-4`} htmlFor={props.textFor}>{props.label} <span className={`text-red-500`}>{props.required}</span></label>
            <input
                className={`border rounded p-1 pl-2 outline-none mb-2 focus:border-pink-500`}
                type={props.typeInput}
                id={props.textFor}
                placeholder={props.placeHolder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}