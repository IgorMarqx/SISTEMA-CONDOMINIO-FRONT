interface Props{
    text: string;
    buttonColor: string;
    hoverButtonColor: string;
    disabled: boolean;
    onClick?: (e: any) => void;
}

export default function ButtonDefault(props: Props){
    return(
        <div className={`flex flex-col mt-2`}>
            <button
                type={"submit"}
                className={`${props.buttonColor} ${props.hoverButtonColor} text-white py-2 px-4 rounded ${props.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-75'}`}
                disabled={props.disabled}
                onClick={props.onClick}>{props.text}</button>
        </div>
    )
}