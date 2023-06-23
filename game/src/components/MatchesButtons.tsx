import React from "react";
import {MatchesButtonsProps} from "../types/MatchesButtonsProps";

const MatchesButtons = ({
                            availableMatches,
                            setAvailableMatches,
                            playerMatches,
                            setPlayerMatches,
                            AIMatches,
                            setAIMatches
                        }: MatchesButtonsProps) => {
    const makeTurn = (num: number) => {
        if(num>availableMatches) return;
        setPlayerMatches(playerMatches + num);
        if (availableMatches - num > 3) {
            if (num === 1) {
                setAIMatches(AIMatches + 3);
                setAvailableMatches(availableMatches - 4);
            } else if (availableMatches % 2 !== 0) {
                setAIMatches(AIMatches + 5 - num);
                setAvailableMatches(availableMatches - 5)
            } else {
                setAIMatches(AIMatches + 4 - num);
                setAvailableMatches(availableMatches - 4)
            }
        } else {
            if ((playerMatches + num) % 2 === 0) {
                if (availableMatches - num === 3) {
                    setAIMatches(AIMatches + 2);
                    setAvailableMatches(availableMatches - num - 2);
                } else {
                    setAIMatches(AIMatches + 1);
                    setAvailableMatches(availableMatches - num - 1);
                }
            } else {
                setAIMatches(AIMatches + availableMatches - num);
                setAvailableMatches(0);
            }
        }
    }
    return (
        <div className="flex-column-container content-center">
            <h1>Add Matches:</h1>
            <div className="flex-container content-center">
                <button className="matches-button" onClick={() => {
                    makeTurn(1)
                }}>1
                </button>
                <button className="matches-button" onClick={() => {
                    makeTurn(2)
                }}>2
                </button>
                <button className="matches-button" onClick={() => {
                    makeTurn(3)
                }}>3
                </button>
            </div>

        </div>
    )
}

export default MatchesButtons;
