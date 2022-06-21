import { useState } from "react";
import { FaMoon} from "react-icons/fa";
import "../styles/toggle.scss"

function Toggle(){
    const [darkMode, setDarkMode] = useState(false)

    const changeTheme = () => {
        document.body.classList.toggle("dark");

        //document.getElementById("darktheme").classList.toggle("dark");
        //document.getElementsByClassName("modeText")[0].classList.toggle("dark");
        //document.getElementsByClassName("link")[0].classList.toggle("dark");

        const allClasses = document.getElementsByClassName("darktheme");
        for (let i = 0; i < allClasses.length; i++){
            allClasses[i].classList.toggle("dark");
        }
        //document.getElementById("darkthemeCountries").classList.toggle("dark");
        setDarkMode(!darkMode);
        // const allClasses = document.getElementsByClassName("darktheme");
        // if (darkMode) {
        //     document.body.classList.add("dark");
        //     for (let i = 0; i < allClasses.length; i++){
        //         allClasses[i].classList.add("dark");
        //     }
        // } else {
        //     document.body.classList.remove("dark");
        //     for (let i = 0; i < allClasses.length; i++){
        //         allClasses[i].classList.remove("dark");
        //     }
        // }
    }
    return (
        <>
            <button onClick={changeTheme} className="modeButton">
                <span className="modeIcon">{darkMode ? <FaMoon className="iconColor" /> : <FaMoon />}</span>
                <span className="modeText darktheme">{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
        </>
    )
}

export default Toggle;