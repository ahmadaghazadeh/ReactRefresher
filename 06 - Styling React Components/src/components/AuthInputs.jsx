import { useState } from 'react';
import {styled} from 'styled-components'

 
const Label=styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color:${($invalid)=> $invalid ? "#f87171" : "#6b7280"} ;
`
const Input=styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color:${($invalid)=> $invalid ? "#fed2d2" : "#d1d5db"} ;  
  color:${($invalid)=> $invalid ? "#ef4444" : "#374151"} ;
  border: 1px solid ${($invalid)=>$invalid ? "#f73f3f" : "transparent"} ;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className='flex flex-col gap-8 w-full max-w-sm p-8 rounded shadow-sm bg-gradient-to-b from-slate-800 to-slate-900 mx-auto'>
        <p>
          <Label $invalid={emailNotValid}>Email</Label>
          <Input $invalid={passwordNotValid}
            type="email"
            //className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input $invalid={passwordNotValid}
            type="password"
            //className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
        <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500 ">
          Create a new account
        </button>
        <button className='bg-amber-500 hover:bg-amber-700 m-2 p-2 rounded uppercase' onClick={handleLogin}>Sign In</button>
      </div>
      </div>
    </div>
  );
}