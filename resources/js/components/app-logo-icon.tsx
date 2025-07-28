import Logo from '@/assets/Logo.webp'

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <img src={Logo} alt="Admin BM Hospital logo"  className=' bg-white p-1 rounded-sm'/>
    );
}
