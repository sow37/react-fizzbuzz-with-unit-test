import './App.css';
import FizzBuzz from './components/FizzBuzz';

function App() {
  return (
    <div className="App">
      <h2>FizzBuzz</h2>
      <h3>Display numbers from 1 to 100 and replace any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz"</h3>
      <FizzBuzz/>
    </div>
  );
}

export default App;
