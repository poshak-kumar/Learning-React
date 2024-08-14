/***
 * Here i learn how to implement Bootstrap in the React Project
 * And also learned 'Map', 'Conditional Rendring', 'Props' and more...
 */

import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let foodItems = [
    "Wheat",
    "Pea",
    "Dal",
    "Pizza",
    "Rice",
    "Chat",
    "Roti",
    "Sugar",
  ];

  /*
  // useState() State Management
  let textStateArr = useState("Food Items entered by user"); // This useState() will return an array of two elements {First Element is Current Value of State} and {Second element is a Method or Function by which you can edit this useState()}
  let textToShow = textStateArr[0]; // This value will use as a current value
  let setTextStateMethod = textStateArr[1];
  console.log("Current vale of textToShow " + textToShow);
  */

  // Destructing of useState()
  let [textToShow, setTextStateMethod] = useState();
  let [foodItemss, setFoodItemsMethod] = useState([
    "Ghe",
    "Dal",
    "Pizza",
    "Rice",
    "Chat",
    "Roti",
  ]);

  // Conditional Rendring
  /*
  let emptyMessage =
    foodItems.length === 0 ? <h3>No food items available.</h3> : null;
  */

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextStateMethod(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Food List</h1>
        <ErrorMessage itms={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems itms={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          sint impedit dolores blanditiis officia itaque aut quae, sapiente
          tenetur neque.
        </p>
      </Container>
    </>
  );
}

export default App;
