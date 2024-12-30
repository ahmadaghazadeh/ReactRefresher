export default function UserInput({
  onChangeInitalInvestment,
  onChangeAnnualInvestment,
  onChangeExpectedReturn,
  onChangeDuration,
  initialInvestment,    
  annualInvestment,
  expectedReturn,
  duration
}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" value={initialInvestment} onChange={(event) => onChangeInitalInvestment(Number(event.target.value))} />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" value={annualInvestment} onChange={(event) =>onChangeAnnualInvestment(Number(event.target.value))} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" value={expectedReturn} onChange={(event) =>onChangeExpectedReturn(Number(event.target.value))} />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" value={duration} onChange={(event) =>onChangeDuration(Number(event.target.value))} />
        </p>
      </div>
    </div>
  );
}
