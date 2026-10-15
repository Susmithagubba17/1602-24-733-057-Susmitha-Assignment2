function ItemList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}

          <button onClick={() => onDelete(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;