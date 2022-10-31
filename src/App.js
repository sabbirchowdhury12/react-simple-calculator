import './App.css';

function App() {

  const createDigits = () => {

    let digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button>{i}</button>
      );
    }
    return digits;
  };

  return (
    <div className='calculator'>
      <div className="display">
        <span>(0)</span>0
      </div>
      <div className="oparetors">
        <button>/</button>
        <button>*</button>
        <button>+</button>
        <button>-</button>
        <button>DEL</button>
      </div>
      <div className="digits">
        {createDigits()}
        <button>0</button>
        <button>.</button>
        <button>=</button>
      </div>

    </div>
  );
}

export default App;
