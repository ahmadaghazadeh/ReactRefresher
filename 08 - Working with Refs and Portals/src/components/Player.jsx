import { useRef,useState } from "react";
export default function Player() {
  const palyerNameRef= useRef();
  const [palyerName, setPalyerName] = useState(null);
  const handleClick = () => {
    setPalyerName(()=>{
      return palyerNameRef.current.value;
    });
  };
  return (
    <section id="player">
      <h2>Welcome {palyerName ? palyerName : "unknown entity"} </h2>
      <p>
        <input type="text" ref={palyerNameRef} />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
