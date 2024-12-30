import investmentCalculatorLogo from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img src={investmentCalculatorLogo} alt="Investment Calculator"></img>
      <h1>Investment Calculator</h1>
    </header>
  );
}
