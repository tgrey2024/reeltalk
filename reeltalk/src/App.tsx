import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>Hello World</Alert>
      )}
      <Button onClick={() => setShowAlert(true)}>Click me!</Button>
    </div>
  );
}

export default App;
