import { createContext } from "react";

/** Step: 1-
 * When you create any variable using createContext() then that variable works as a Component like this -> TodoItemsContext
 * So this is the first step create a createContext Component or Variable.
 *
 * * export const TodoItemsContext = createContext()
 *
 * Step: 2-
 * In second step we will make a Component Provider
 * In Provider Component we pass the data
 *
 * * export const TodoItemsProvider = ({children}) => {
 *      const name = "Kamal";
 *      const age = 25;
 *      return <TodoItemsContext.Provider value={{name, age}} >
 *              {children}
 *          </TodoItemsContext.Provider>
 * }
 *
 * Step: 3-
 * Now we use these context component that we make in step-1 and step-2
 * To use context component that you make, so go on the parent component where these components are called and wrap those components where you want to apply context api by TodoItemsProvider
 *
 * * ecport HomeParentComponent = () => {
 *    return <TodoItemsProvider>
 *                 <Home />
 *           </TodoItemsProvider>
 * }
 *
 * Step: 4-
 * Now to use the data that we stored in context we use useContext() hook.
 * So to use it go on that components that are wraped, and apply this concept on code, see below:
 *
 * * export const Home = () => {
 *      const {name, age} = useContext(TodoItemsContext); // Destructure it
 *      return <h1>My name is {name}, and i am {age} years old.</h1>
 * }
 *
 */

// Second type of concept using context api
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
