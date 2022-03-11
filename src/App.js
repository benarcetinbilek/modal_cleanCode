import './App.css';
import React, { useState } from "react";
import Modal from "./Modal/Modal.js";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <div>
        
      </div>
      {show ? <Modal setShow={setShow} title="My Modal" onClose={() => setShow(false)} show={show}>
          <p>This is modal body</p>
        </Modal> : <></>}        
    </div>
  );
}
