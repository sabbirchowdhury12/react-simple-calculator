import { useState } from 'react';
import './App.css';

function App() {

  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/', '*', '+', '-', '.'];

  //update calc
  const updateCalc = value => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);


    if (!ops.includes(value)) {
      // eslint-disable-next-line no-eval
      setResult(eval(calc + value).toString());

    }
  };

  //delete button
  const deleteLastOne = () => {
    if (calc === '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  //calculate total 
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  //create digits function
  const createDigits = () => {
    let digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}>{i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className="App">
      <div className='calculator'>
        <div className="display">
          {result ? <span>({result})</span> : ''}&nbsp;
          {calc || '0'}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={deleteLastOne}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate} >=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
