import React from "react";
import {ModeComponentProps} from "../../types/ModeComponentProps";
import "./ModeComponent.css";

const ModeComponent = ({playerGoFirst, setPlayerGoFirst, playerMatches, setWarningModalActive}: ModeComponentProps) => {
    return (
        <div className="mode-div">
            <h2>{playerGoFirst ? "You go first" : "Bot goes first"}</h2>
            <button className="change-mod-button" onClick={() => {
                if (playerMatches === 0) {
                    setPlayerGoFirst(!playerGoFirst);
                } else {
                    setWarningModalActive(true);
                }
            }}>Change mode
            </button>
        </div>
    )
}

export default ModeComponent;