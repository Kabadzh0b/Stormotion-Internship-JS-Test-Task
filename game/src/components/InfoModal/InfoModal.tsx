import React from "react";
import "./InfoModal.css";
import {InfoModuleProps} from "../../types/InfoModuleProps";

const BookModal = ({active, setActive}:InfoModuleProps) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => {
            setActive(false);
        }}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h2>How to play?</h2>
                <h3>Introduction</h3>
                <h4>Two people are playing a game.<br/>From the pile of 25 matches, each player takes either 1, 2 or 3
                    matches on each turn. <br/>The game is over once all matches are taken.<br/>Whoever has the even
                    amount of matches wins.</h4>
            </div>
        </div>
    )
}
export default BookModal;