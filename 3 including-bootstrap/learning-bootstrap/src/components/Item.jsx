import styles from "./Item.module.css";

const Item = ({ itm, handleBuyButton }) => {
  /* ☝️ One more advanced step of Destructuring */

  return (
    <li className={`${styles["food-items"]} list-group-item`}>
      <span className={`${styles["item-span"]}`}>{itm}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
