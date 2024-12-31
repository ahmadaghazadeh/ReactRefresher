import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
    const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    });

    const inputIsValid=userInput.duration > 0;

    const handleInput = (inputIdetifier, value) => {
      setUserInput((prevValue) => {
        return {
          ...prevValue,
          [inputIdetifier]: +value, // Convert to number
        };
      });
    };


  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleInput}/>
      {inputIsValid && <Results userInput={userInput} />}
      {!inputIsValid && (<p className="center">Please enter a duration greter than zero.</p>) }
    </>
  );
}

export default App;
