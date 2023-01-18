// import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';



const fruits = ['mango', 'banana', 'lemon', 'apple', 'quiwi'];

function App() {
  return (
    <div className="App">
      <ItemList fruits={fruits} />
    </div>
  );
};

export default App;
