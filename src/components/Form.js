import { useState } from "react";

export default function Form({onAddNewItems}) {
    const [description, setDescription] = useState("");
    const [quantity, seQquantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if(!description) return; // if no description, return null means nothing
      const newItem = {quantity, description, purchased: false, id:Date.now()};
      onAddNewItems(newItem);
  
      setDescription(""); 
      seQquantity(1);
    }
  
    return <form className="add-form" onSubmit={handleSubmit}>
      <h3>Are you ready for the shopping?</h3>
      <select value={quantity} onChange={(e)=>seQquantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i+1).map(
          (num) => (<option value={num} key={num}>
                    {num}
                  </option>)
        )}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e)=>setDescription(e.target.value)} />
      <button>add Item</button>
    </form>
}