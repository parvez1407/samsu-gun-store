import { useState } from 'react';
import './App.css';
import AllGun from './components/AllGun/AllGun';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const countIncrease = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllGun countIncrease={countIncrease}></AllGun>
    </div>
  );
}

export default App;
