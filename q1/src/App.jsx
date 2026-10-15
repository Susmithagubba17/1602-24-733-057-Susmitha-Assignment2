import { useState } from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState(["Apple", "Banana"]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Item List</h1>

      <ItemForm onAdd={addItem} />

      <ItemList
        items={items}
        onDelete={deleteItem}
      />
    </div>
  );
}

export default App;