import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import { getDeployed } from './contracts/Counter';
import './App.css';

export default function App() {
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    if (!counter) (async () => setCounter(await getDeployed()))();
  });

  // useEffect(() => {
  //   console.log(counter);
  // }, [counter]);

  return <div className="App">{counter && <Counter contract={counter} />}</div>;
}
