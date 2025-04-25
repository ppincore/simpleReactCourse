import React, { useState } from 'react';
import styles from './Counter.module.scss'
const Counter = () => {
  const  [count, setCount] = useState(0)
  const [value,setValue]=useState('test')
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <>
      <p className={styles.counter}>{count}</p>
      <p className={styles.counter}>{value}</p>
      <input type="text" name="" id="" onChange={(e)=>setValue(e.target.value)} value={value}/>
      <input type="text" name="" id="" onChange={(e)=>setValue(e.target.value)} value={value}/>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;