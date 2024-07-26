
import Cart from "./components/Cart";
import Item from "./components/Item"
import { useContext } from "react";
import { CounterContext } from "./context/Counter";
import './styles/style.css'
import Counter from "./components/Counter";
function App() {

  const  counterState = useContext(CounterContext);



  return (
    <>
      <div className="App">
        <Item name ="Mackbook" Price = "10000" id ="0"/>
        <Item name ="Lenovo" Price = "1000" id ="1"/>
        <Item name ="Pendrive" Price = "100" id ="2"/>
        <Cart/>
      </div>
    </>
  );
}

export default App;
