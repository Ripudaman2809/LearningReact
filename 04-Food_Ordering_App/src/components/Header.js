import { LOGO_URL } from "../common/constants";
const Header = () =>{
    return (
    <div id="header">
        <div id="logo-container">
            <img id="logo" src={LOGO_URL} alt="App Logo"/>  
        </div>
        <div id="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
};

export default Header;