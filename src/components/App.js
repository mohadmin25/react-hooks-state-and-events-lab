import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [toggle, setToggle] = useState(false)

  // replaced 'false'(passed it inside the usestate) with toggle variable for used of the Dark/light Mode Toggle feature
  const appClass = toggle ? "App dark" : "App light"

  // function to handle the dark/light mode
  const handleToggle = () =>{
    setToggle((toggle) => !toggle)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button  onClick={handleToggle} >{toggle ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;