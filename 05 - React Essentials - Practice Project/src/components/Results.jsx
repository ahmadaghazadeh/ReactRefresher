import * as util from "../util/investment";
export default function Results({ userInput }) {
  const  results = util.calculateInvestmentResults(userInput);
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
        {results.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{util.formatter.format(result.interest)}</td>
            <td>{util.formatter.format(result.valueEndOfYear)}</td>
            <td>{util.formatter.format(result.annualInvestment)}</td>
            <td>{util.formatter.format(userInput.initialInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
