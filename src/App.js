import "./App.css";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { useState } from "react";

const ChildB = () => {
  console.log("render B!");
  return <div>これはB</div>;
};

const ChildA = ({ count }) => {
  console.log("render A!");
  console.log(`count is ${count}`);
  return (
    <div>
      <ChildB />
    </div>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  console.log("render parent");
  return (
    <div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        ボタン
      </button>
      {count}
      <ChildA count={1} />
    </div>
  );
};

function App() {
  return (
    <>
      <Header />
      <Skills />
      <Contact />
      <Parent></Parent>
    </>
  );
}

export default App;
