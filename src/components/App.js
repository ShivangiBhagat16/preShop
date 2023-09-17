import { useState } from "react";
import Logo from './Logo';
import Form from './Form';
import ShopList from './ShopList';
import Stats from './Stats';

export default function App() {
  const [items, setItems] = useState([])
  
  function handleAddNewItems(item) {
    setItems([...items, item]);
  }
  function handleDelete(id){
    setItems((items) => items.filter((item) => item.id !== id)); // filter the id of selected item, so choose items rather than this id
  }
  function handleToggleItem(id) {
    setItems((items) => 
      items.map((item) => 
        item.id === id ? {...item, purchased: !item.purchased} : item )
    )
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete all items?");
    if(confirmed) setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddNewItems={handleAddNewItems} />
      <ShopList items={items} onDeleteHandle={handleDelete} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}

