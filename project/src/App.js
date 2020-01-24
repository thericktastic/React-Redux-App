import React from "react";
import "./App.css";

// components
import Trivia from "./components/Trivia";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to</h1>
        <h2>What does it all mean?!</h2>
        <p>
          A game of endless possibilities as long as your definition of endless
          possibilities is collecting useless trivia about numbers!
        </p>
        <Trivia />
      </header>
    </div>
  );
}

export default App;
