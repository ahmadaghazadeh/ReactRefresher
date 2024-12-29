import { useState } from "react";
export default function Player({ initalName, symbol ,isActive}) {
  const [isEditing, setIsEditing] = useState(false);
  const [palyerName,setPlayerName] =useState(initalName);
  
  const handleEditClick = () => {
    setIsEditing(editing=> !editing);
  };

  function handelChange(event){
    setPlayerName(event.target.value);
  }


  let editablePlyerName = <span className="player-name">{palyerName}</span>;
  if (isEditing) { 
    editablePlyerName = (
      <input
        type="text"
        required
        value={palyerName}
        onChange={handelChange}
      />
    );
  }

  return (
    <li className={isActive ? 'active':undefined}>
      <span className="player">
        {editablePlyerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "save" : "edit"}</button>
    </li>
  );
}
