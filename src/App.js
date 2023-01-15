import "./styles.css";
import React, { useState } from "react";
import { ReactComponent as Img } from "./public/avatar.svg";

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
  const wholeList = {
    ...vegList,
    ...nonVegList,
    ...chineseList
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
    return "pink";
  }
  function getdesccolor(x) {
    if (x >= 4) {
      return "green";
    }
    return "red";
  }
  return (
    <div className="App">
      <div className="avatar">
        <Img />
      </div>
      {/* <Img /> */}
      <h2 style={{ display: "flex", marginTop: "60px", marginLeft: "80px" }}>
        Food Recommendations by Anshu
      </h2>
      <span>Select your category: 👉 </span>
      <button onClick={handleVeg}>Veg</button>
      <button onClick={handleNonVeg}>Non Veg</button>
      <button onClick={handleChinese}>Chinese</button>
      <hr></hr>
      <div>
        <ol>
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
                  {item} ( Ratings : {wholeList[item]}/5 )
                  <div
                    id="fooddesc"
                    style={{ backgroundColor: getdesccolor(wholeList[item]) }}
                  >
                    {" "}
                    Food Description:{" "}
                    {wholeList[item] >= "4"
                      ? "This item is good for health"
                      : "This item is not good for your health"}
                  </div>
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
