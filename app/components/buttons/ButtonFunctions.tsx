import { MouseEventHandler } from "react";

interface Props {
    text: string;
    color: string;
    hoverColor: string;
    onClick: MouseEventHandler<HTMLSpanElement>;
}

export default function ButtonFunctions({ onClick, text, color, hoverColor }: Props){
    return(
        <div className={`flex`}>
            <span onClick={onClick} className={`${color} hover:${hoverColor} pr-3 pl-3 pt-2 pb-2 rounded m-4 text-white cursor-pointer`}>
                {text}
            </span>
        </div>
    )
}