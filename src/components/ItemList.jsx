import ItemSingle from "./ItemSingle";

function ItemList(props) {

    const handleClick = (item) =>{
        alert(`you clicked ${item}!`);
    }

  const fruitList = props.fruits.map((fruitItem) => {
    return (
      <div key={fruitItem.key}>
        <ItemSingle title={fruitItem} click={handleClick}/>
      </div>
    );
  });

  return <div>{fruitList}</div>;
}

export default ItemList;
