import React from "react";
import "./Modal.css";
import {ModalProps} from "../../types/ModalProps";

const Modal = ({
                   infoActive,
                   setInfoActive,
                   warningActive,
                   setWarningActive,
                   playerGoFirst,
                   setPlayerGoFirst
               }: ModalProps) => {
    return (
        <div>
            <div className={infoActive || warningActive ? "modal active" : "modal"} onClick={() => {
                setInfoActive(false);
                setWarningActive(false);
            }}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <div className={infoActive ? "" : "hidden"}>
                        <h2>How to play?</h2>
                        <h4>Two people are playing a game.<br/>From the pile of 25 matches, each player takes either 1,
                            2 or 3
                            matches on each turn. <br/>The game is over once all matches are taken.<br/>Whoever has the
                            even
                            amount of matches wins.</h4>
                    </div>
                    <div className={warningActive ? "" : "hidden"}>
                        <h1 className="warning">Warning!</h1>
                        <h2>changing the mode will restart the game</h2>
                        <button className="btn mode" onClick={() => {
                            setPlayerGoFirst(!playerGoFirst)
                            setWarningActive(false);
                        }}>OK. Change my mode
                        </button>
                        <button className="btn cancel" onClick={() => setWarningActive(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Modal;