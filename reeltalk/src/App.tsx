import Alert from "./components/Alert";
import Button from "./components/Button";
import NavBar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <NavBar />
      <h1>ReelTalk</h1>
      <p>Welcome to ReelTalk!</p>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>Hello World</Alert>
      )}
      <Button onClick={() => setShowAlert(true)}>Click me!</Button>
    </>
  );
}

export default App;
