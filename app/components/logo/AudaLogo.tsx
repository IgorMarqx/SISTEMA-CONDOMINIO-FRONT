import logo from "@/app/assets/images/audaLogo.png";
import Image from 'next/image';

export default function AudaLogo() {
    return (
        <div>
            <Image src={logo} alt={'Auda Condominios'} width={300}/>
        </div>
    )
}