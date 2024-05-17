import { useEffect, useState } from "react";
import "./App.css";
import ListItem from "./ListItem";
import AddItem from "./AddItem";
import { nanoid } from "nanoid";

// const items = JSON.parse(localStorage.getItem("todolist")) || [
//   {
//     id: 1,
//     title: "Banana BananaBanana Banana",
//     description: "1 for Mehrab too",
//     checked: false,
//   },
//   {
//     id: 2,
//     title: "Garlic",
//     description: "Roast?",
//     checked: true,
//   },
//   {
//     id: 3,
//     title: "Ginger",
//     description: "Definitely not roast",
//     checked: false,
//   },
// ];

function App() {
  let [itemList, setItemList] = useState([]);
  let [isAddItemOpen, setIsAddItemOpen] = useState(false);

  function addItem(title, description) {
    const item = {
      id: nanoid(),
      title: title,
      description: description,
      checked: false,
    };
    setItemList([...itemList, item]);
    localStorage.setItem("todolist", JSON.stringify([...itemList, item]));
    setIsAddItemOpen(false);
  }

  useEffect(() => {
    let initialItems = JSON.parse(localStorage.getItem("todolist"));
    setItemList(initialItems);
  }, []);

  return (
    <>
      {isAddItemOpen && (
        <AddItem setIsAddItemOpen={setIsAddItemOpen} addItem={addItem} />
      )}
      <div className="container">
        <header>
          <h1>To Do List</h1>
          <button className="filter-btn"></button>
        </header>
        <ul>
          <ListItem
            title="Add new item"
            description="Add description"
            addItem={true}
            setIsAddItemOpen={setIsAddItemOpen}
          />
          {itemList &&
            itemList.map &&
            itemList.map((item) => (
              <ListItem
                title={item.title}
                description={item.description}
                checked={item.checked}
                key={item.id}
              />
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
