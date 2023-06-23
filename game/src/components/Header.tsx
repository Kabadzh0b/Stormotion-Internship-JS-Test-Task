import React from "react";
import {HeaderProps} from "../types/HeaderProps";


const Header = ({MATCHES, gameRestart,setInfoModalActive}:HeaderProps) => {
    return(
        <div className="flex-container content-space-between width100">
            <button className="small-button restart" onClick={gameRestart}>
                Restart
            </button>
            <h1>Total matches:{MATCHES}</h1>
            <button className="small-button info" onClick={() => {
                setInfoModalActive(true);
            }}>
                info
            </button>
        </div>
    )
}

export default Header;