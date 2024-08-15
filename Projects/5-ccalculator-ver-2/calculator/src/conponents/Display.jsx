import styles from "./Display.module.css";
const Display = ({ calcVal }) => {
  return (
    <input type="text" className={styles.display} value={calcVal} readOnly />
  );
};

export default Display;
