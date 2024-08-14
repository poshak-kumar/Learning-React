const ErrorMessage = (props) => {
  let foodItems = props.itms;

  return <>{foodItems.length === 0 && <h3>No food items available.</h3>}</>;
};

export default ErrorMessage;
