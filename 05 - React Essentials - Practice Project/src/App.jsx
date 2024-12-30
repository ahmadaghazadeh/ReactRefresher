import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import  * as util  from "./util/investment";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(1);
  const [annualInvestment, setAnnualInvestment] = useState(1);
  const [expectedReturn, setExpectedReturn] = useState(1);
  const [duration, setDuration] = useState(1);

  const handleAnnualInvestment = (value) => {
    setAnnualInvestment(() => {
      return value;
    });
  };

  const handleDuration = (value) => {
    setDuration(() => {
      return value;
    });
  };

  const handleExpectedReturn = (value) => {
    setExpectedReturn(() => {
      return value;
    });
  };

  const handleInitalInvestment = (value) => {
    setInitialInvestment(() => {
      return value;
    });
  };

  var results =util.calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration}
  );


  return (
    <>
      <Header />
      <UserInput
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
        onChangeAnnualInvestment={handleAnnualInvestment}
        onChangeDuration={handleDuration}
        onChangeExpectedReturn={handleExpectedReturn}
        onChangeInitalInvestment={handleInitalInvestment}
      />
      <Results results={results} investedCapital={initialInvestment} />
    </>
  );
}

export default App;
