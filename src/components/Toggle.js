import { useState } from "react";
import { FaMoon} from "react-icons/fa";
import "../styles/toggle.scss"

function Toggle(){
    const [darkMode, setDarkMode] = useState(false)

    const changeTheme = () => {
        document.body.classList.toggle("dark");
        //document.getElementById("darktheme").classList.toggle("dark");
        document.getElementsByClassName("modeText")[0].classList.toggle("dark");
        document.getElementsByClassName("link")[0].classList.toggle("dark");
        const allClasses = document.getElementsByClassName("darktheme");
        for (let i = 0; i < allClasses.length; i++){
            allClasses[i].classList.toggle("dark");
        }
        //document.getElementById("darkthemeCountries").classList.toggle("dark");
        setDarkMode(!darkMode);
    }
    return (
        <>
            <button onClick={changeTheme} className="modeButton">
                <span className="modeIcon">{darkMode ? <FaMoon className="iconColor" /> : <FaMoon />}</span>
                <span className="modeText">{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
        </>
    )
}

export default Toggle;