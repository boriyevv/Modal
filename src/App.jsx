import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal/Modal";

// children props
function App() {
  const [showModal, setShowModal] = useState(false)

  const handleClose=()=>{
    setShowModal(false)
  }

  const handleOpen=()=>{
    setShowModal(true)
  }

  return (
    <>
      <h1 className="text-red-200">Hello World</h1>

      {showModal && <Modal handleclose={handleClose}>
        <h1>Hello Everyone</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
          distinctio dolores quia adipisci quas sint laborum sed hic ducimus
          alias.
        </p>
      </Modal>}

      <button onClick={handleOpen}>Open Modal</button>

    </>
  );
}

export default App;
