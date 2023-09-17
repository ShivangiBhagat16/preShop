import { useState } from 'react';
import Item from './Item';

export default function ShopList({items, onDeleteHandle, onToggleItem, onClearList}) {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems;
    if( sortBy === "input") sortedItems = items;
  
    if( sortBy === "description") sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
  
    if( sortBy === "purchased") sortedItems = items.slice().sort((a,b) => Number(a.purchased) - Number(b.purchased));
  
    const itemsList = sortedItems.map((item) => {
      return <Item item={item} onDeleteHandle={onDeleteHandle} onToggleItem={onToggleItem} key={item.id} /> 
    }) 
  
    return <div className="list">
      <ul>{itemsList}</ul>
      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="purchased">Sort by purchased status</option>
        </select>
        <button onClick={onClearList}>clear list</button>
      </div>
    </div>
  }