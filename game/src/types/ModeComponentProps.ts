export interface ModeComponentProps{
    playerGoFirst:boolean,
    playerMatches:number,
    setPlayerGoFirst:(value:boolean)=>void,
    setWarningModalActive:(value:boolean)=>void,
}