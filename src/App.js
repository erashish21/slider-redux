import "./App.css";
import React from "react";
import ImageComponent from "./features/imageslider/ImageComponent";
import Counter from "./features/imageslider/Counter";


function App() {
  return (
    <div className="App">
      <ImageComponent/>
      <Counter/>
    </div>
  );
}

export default App;
