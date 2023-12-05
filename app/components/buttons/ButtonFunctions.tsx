interface Props{
    text: string;
    color: string;
    hoverColor: string;
    onClick?: (e: any) => void;

}
export default function ButtonFunctions(props: Props){
    return(
        <div className={`flex`}>
            <span className={`${props.color} hover:${props.hoverColor} pr-3 pl-3 pt-2 pb-2 rounded m-4 text-white cursor-pointer`}>
                {props.text}
            </span>
        </div>
    )
}