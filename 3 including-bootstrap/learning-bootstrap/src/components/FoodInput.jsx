import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter Food Item"
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
