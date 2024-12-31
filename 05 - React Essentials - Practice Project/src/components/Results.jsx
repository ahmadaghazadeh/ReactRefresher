import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Results({ userInput }) {
  const results = calculateInvestmentResults(userInput);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const totalInvestment =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            userInput.initialInvestment;

          const investedCapital =
            result.valueEndOfYear - totalInvestment;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(totalInvestment)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
