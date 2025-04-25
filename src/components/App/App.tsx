import Counter from "../Counter/Counter";
import styles from './App.module.scss'
const App = () => {
  return (
    <div className={styles.app}>
      <Counter></Counter>
    </div>
  );
};

export default App;