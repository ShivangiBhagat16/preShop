export default function Item({item, onDeleteHandle, onToggleItem}) {
  
    return <li style={item.purchased ? {textDecoration: 'line-through'} : {}}>
      <input type="checkbox" value={item.purchased} onChange={()=>onToggleItem(item.id)} />
      {item.quantity} {item.description}
      <span onClick={()=>onDeleteHandle(item.id)}>❌</span>  
    </li>
  }