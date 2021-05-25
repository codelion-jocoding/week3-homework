import React, { useState } from "react";
import { getGreeting } from "./api/UseCaver";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("");
  const onClickGetGreeting = async () => {
    const greet = await getGreeting();
    setGreeting(greet);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>{greeting}</h1>
        <button
          onClick={() => {
            onClickGetGreeting();
          }}
        >
          인사말 가져오기
        </button>
      </header>
    </div>
  );
}

export default App;