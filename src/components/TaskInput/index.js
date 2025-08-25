import { useState, useContext } from "react";
import Add from "./../../assests/line.png";
import "./style.css";
import { TaskContext } from "../../TaskContext";

export default function AddTask({ label, placeholder }) {
  const { onAddTask } = useContext(TaskContext);
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.currentTarget.value);
  };

  return (
    <>
      <div>
        <div className="input-box">
          {label && <label>{label}</label>}
          <input
            type="text"
            value={text}
            onChange={onChange}
            placeholder={placeholder}
          />
          <button
            onClick={() => {
              setText("");
              onAddTask(text);
            }}
          >
            <img src={Add} alt="add"></img>
          </button>
        </div>
      </div>
    </>
  );
}
// useEffect(() => {
//   const clickEventHandler = (event) => {
//     if (event.key === "Enter") {
//       setText("");
//       onAddTask(text);
//     }
//   };

//   document.addEventListener("keydown", clickEventHandler);

//   return () => {
//     document.removeEventListener("keydown", clickEventHandler);
//   };
// }, []);
