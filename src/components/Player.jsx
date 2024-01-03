import { useState } from "react";

export default function Player({initialName, symbol}){
    const [playerName , setPlayerName] = useState(initialName);
    const [edit, setedit] = useState(false);
    function handleedit(){
        setedit((edit) => !edit);
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }
    let editPlayerName = <span className="player">{playerName}</span>
    if (edit){
        editPlayerName = <input type="text" value = {playerName} onChange={handleChange} required/>
    }

    return(
        <>
        <span className="player">
          {editPlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleedit}>{edit? "Save" : "Edit"}</button>
        </>
    )    
}