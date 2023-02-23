import "../styles/header.scss"
import Toggle from "./Toggle";
import { Link } from "react-router-dom";
function Header(){
    return (
        <>
          <header className="header darktheme">
            <div>
                <Link to={`/`} className="linkStyle"><h1 className="main-text">Where in the world</h1></Link>
            </div>
            <div>
                {<Toggle/>}
            </div>
          </header>
        </>
    )
}

export default Header;