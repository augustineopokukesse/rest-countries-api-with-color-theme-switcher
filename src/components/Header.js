import "../styles/header.scss"
import Toggle from "./Toggle";
function Header(){
    return (
        <>
          <header className="header">
            <div>
                <h1 className="white dark">Where in the world?</h1>
            </div>
            <div>
                {<Toggle/>}
            </div>
          </header>
        </>
    )
}

export default Header;