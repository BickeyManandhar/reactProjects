import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card year="2017" specs={{ram:'8GB', storage: '256GB'}}/>
      <Card year="2019" specs={{ram:'4GB', storage: '1TB'}}/>
      <Card year="2022" specs={{ram:'16GB', storage: '500GB'}}/>
    </>
  );
}

export default App;
