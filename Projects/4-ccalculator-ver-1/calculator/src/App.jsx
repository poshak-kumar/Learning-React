import styles from "./App.module.css";
import Display from "./conponents/Display";
import ButtonsContainer from "./conponents/ButtonsContainer";
function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
