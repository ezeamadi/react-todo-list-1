import React from "react";
import "../ListItems.css";
import FlipMove from "react-flip-move";

const ListItems = props => {
  const items = props.items;
  const listItems = items.map(item => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={event => {
              props.setUpdate(event.target.value, item.key);
            }}
          />
          <button onClick={() => props.deleteItem(item.key)}>Delete</button>
        </p>
      </div>
    );
  });

  return (
    <div>
      <FlipMove duration={600} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
};

export default ListItems;
