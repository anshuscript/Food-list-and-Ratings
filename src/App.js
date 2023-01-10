import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);

  const vegList = {
    salad: "5",
    "White rice and Dal Sabji": "3",
    "Paneer- Roti": "4",
    "Idli- Vada": "4"
  };
  const nonVegList = {
    "Egg White": "5",
    Omlete: "4",
    "Boiled Chicken": "5",
    "Chicken- Biryani": "4"
  };
  const chineseList = {
    Chowmein: "1",
    Burger: "2",
    Pizza: "2"
  };
  function handleVeg(event) {
    var vegListItems = Object.keys(vegList);
    setList(vegListItems);
  }
  function handleNonVeg() {
    var nonVegListItems = Object.keys(nonVegList);
    setList(nonVegListItems);
  }
  function handleChinese() {
    var chineseListItems = Object.keys(chineseList);
    setList(chineseListItems);
  }
  function getbg(index) {
    if (index % 2 === 0) {
      return "grey";
    }
    return "white";
  }
  return (
    <div className="App">
      <h1>Good Food </h1>
      <button onClick={handleVeg}>Veg</button>
      <button onClick={handleNonVeg}>Non Veg</button>
      <button onClick={handleChinese}>Chinese</button>
      <hr></hr>
      <div>
        <ul>
          {list.map(function (item, index) {
            return (
              <div>
                <li
                  style={{
                    color: "purple",
                    padding: "10px",
                    borderRadius: "2px",
                    backgroundColor: getbg(index)
                  }}
                >
                  {item} ()
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
