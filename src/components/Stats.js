export default function Stats({items}) {
    if(!items.length) 
      return <footer className="stats">
        Get your shopping list started!
      </footer>
    const itemLength = items.length;
    const purchasedItems = items.filter(item => item.purchased).length;
    const percentage = Math.round((purchasedItems/itemLength) * 100);
  
    return <footer className="stats">
      { percentage === 100 ? `You purchased all items, you are ready to go!` : `You have ${itemLength} items on your list, and you already purchased ${purchasedItems} (${percentage}%).` }
    </footer>
}