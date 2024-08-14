import Item from "./Item";

const FoodItems = (props) => {
  let { itms } = props; // Destructuring

  return (
    <ul className="list-group">
      {itms.map((item) => (
        <Item
          key={item}
          itm={item}
          handleBuyButton={() => console.log(`${item} is bought.`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
