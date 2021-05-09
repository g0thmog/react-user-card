import { useState } from "react";
import "./App.css";
import Card from "./Card.js";

function App() {
  const [name, setName] = useState("Magnoos");
  const [url, setUrl] = useState("Bongcloud");
  const [progress, setProgress] = useState("50");

  return (
    <div className="App">
      <Card
        name="Magnus Carlsen"
        url="https://hollywoodmask.com/uploads/images/magnus-carlsen.jpg"
        progress="60"
      ></Card>
      <br></br>
      <Card
        name="Viswanathan Anand"
        url="https://upload.wikimedia.org/wikipedia/commons/5/57/Viswanathan_Anand_%282016%29_%28cropped%29.jpeg"
        progress="80"
      ></Card>
      <br></br>
      <Card
        name="Garry Kasparov"
        url="https://pbs.twimg.com/profile_images/1004031810173579265/YrEIbzio_400x400.jpg"
        progress="95"
      ></Card>
    </div>
  );
}

export default App;
