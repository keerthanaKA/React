import { useState } from "react";

interface Props{
    items : string[];
    Heading: String;
    onSelectItem: (item: String )=> void;
}





function ListGroup({items, Heading, onSelectItem}:Props) {
 
  //let selectedIndex = 0;
  //Hook
  //useState(-1);
  const [selectedIndex, setSelectedIndex] = useState (-1);
  //arr[0] //variable for selected index
  //arr[1] //
  //items = [];

  //const Message = items.length ===0? <p>No items Found</p> :null;

  //Another Method
  //const getMessage() => {
  // return items.length ===0? <p>No items Found</p> :null;
  // }
  //{getMessage()}

  //{items.length && <p> No items found</p>}
//    onClick={handleClick}
  //Event handler
    //const handleClick = (event:MouseEvent) => console.log(event);
  if (items.length === 0)
    return (
      <>
        <h2>List</h2>
        <p>No List Found</p>
      </>
    );

  return (
    <>
      <h1>{Heading}</h1>
      {items.length && <p> No items found</p>}

      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
                selectedIndex === index ? "list-group-item active" : "list-group-item"
            }
            key={items}
            onClick={() => {setSelectedIndex(index);
                            onSelectItem(items);} }
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
