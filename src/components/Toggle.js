import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "../styles/toggle.scss"

function Toggle(){
    const [darkMode, setDarkMode] = useState(false)

    const changeTheme = () => {
        setDarkMode(!darkMode);
        // document.body.classList.toggle("dark");
    }
    return (
        <>
            <button onClick={changeTheme} className="modeButton">
                <span className="modeIcon">{darkMode ? <FaSun /> : <FaMoon />}</span><span className="modeText">{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
        </>
    )
}

export default Toggle;