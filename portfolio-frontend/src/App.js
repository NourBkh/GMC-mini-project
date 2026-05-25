//import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";
import axios from "axios";
import DownloadCV from './components/DownloadCV';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/")
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 My DevOps Portfolio</h1>
      <p>Backend says: {message}</p>
      <p>Download CV button  </p>
      <DownloadCV />
    </div>
  );
}



export default App;

