import { useEffect } from 'react';
import './App.css';
import Main from "./pages/main";

function App() {

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);
  return (
    <div className="App">
      <Main/>
    </div> 
  );
}

export default App;