import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Toggle(){
    const [darkMode, setDarkMode] = useState(false)
    return (
        <>
            <button>
                {darkMode ? <FaSun /> : <FaMoon />}
            </button>
        </>
    )
}

export default Toggle;