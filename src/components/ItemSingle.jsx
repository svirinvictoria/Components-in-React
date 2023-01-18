import "./ItemSingle.css";

function ItemSingle(props) {
  return <div className={props.title}>
    {props.title }
    <button onClick={()=>props.click(props.title)}>  Click me  </button>
    </div>;
}

export default ItemSingle;
