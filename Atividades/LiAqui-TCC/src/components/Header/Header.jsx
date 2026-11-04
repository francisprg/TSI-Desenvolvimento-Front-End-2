import Logo from "../Logo/Logo.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Avatar from "../Avatar/Avatar.jsx";


function Header() {

    return (
        <>
            <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b border-[#e8e8e8] bg-white px-4">
                <Logo></Logo>
                <Navbar></Navbar>
                <Avatar></Avatar>
            </header>
        </>
    )

}

export default Header
