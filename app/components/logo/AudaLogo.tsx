import logo from "@/app/assets/images/audaLogo.png";
import Image from 'next/image';

interface props {
    width: number;
}

export default function AudaLogo(props: props) {
    return (
        <div>
            <a href={`/pages/dashboard`}>
                <Image src={logo} alt={'Auda Condominios'} width={props.width}/>
            </a>
        </div>
    )
}