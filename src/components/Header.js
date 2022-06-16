import "../styles/header.scss"
import Toggle from "./Toggle";
function Header(){
    return (
        <>
          <header className="header darktheme">
            <div>
                <h1 className="main-text">Where in the world?</h1>
            </div>
            <div>
                {<Toggle/>}
            </div>
          </header>
        </>
    )
}

export default Header;