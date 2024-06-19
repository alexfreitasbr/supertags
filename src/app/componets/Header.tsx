import Logo from "./Logo"
export default function Header() {
    return <header className="flex justify-center items-center fixed top-0 w-full h-[72px] text-white">
        <Logo />
        <span className="ml-1">qualquer coisa</span>
    </header>
}