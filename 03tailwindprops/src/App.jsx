import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./products";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Mufaddal Saifee",
    age: 36,
  };

  let myPro = {
    name: "Tshirt",
    color: "Pink",
    price: 100,
  };

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <h1 className="bg-green-400 p-4 text-white rounded-xl">Tailwind test</h1>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>

      {/* <Products color="white" someObject="{myObj}" />

      <Products color="black" someObject="{arr}" /> */}

      <Products product_details={myPro} />

      <Products product_details={myPro} heading="New Products" />
    </>
  );
}

export default App;
