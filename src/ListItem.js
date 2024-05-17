import { useState } from "react";

function ListItem(props) {
  let [checked, setChecked] = useState(props.checked);

  if (props.addItem) {
    return (
      <li className="item" onClick={() => props.setIsAddItemOpen(true)}>
        <img className="add-img" src="add.svg" alt="AddIcon" />
        <div>
          <p className="list-title">{props.title}</p>
          <p className="list-description">{props.description}</p>
        </div>
      </li>
    );
  }
  const checkedClass = checked ? "line-through" : "none";
  return (
    <li className="item">
      <input
        className="check-input"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div>
        <p className="list-title" style={{ textDecoration: checkedClass }}>
          {props.title}
        </p>
        <p
          className="list-description checked"
          style={{ textDecoration: checkedClass }}
        >
          {props.description}
        </p>
      </div>
    </li>
  );
}

export default ListItem;
