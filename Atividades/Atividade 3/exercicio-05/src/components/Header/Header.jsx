import Logo from "../Logo/Logo.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Avatar from "../Avatar/Avatar.jsx";
import './style.css'


function Header() {

    return (
        <>
            <header>
                <Logo></Logo>
                <Navbar></Navbar>
                <Avatar></Avatar>
            </header>
        </>
    )

}

export default Header