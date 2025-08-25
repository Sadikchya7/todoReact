import Delete from "../../assests/trash-can.png";
import { useContext } from "react";
import { TaskContext } from "../../TaskContext";
import "./style.css";

export default function TaskContainer({ filter }) {
  const { tasks, onChangeTask, onDeleteTask } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.done;
    if (filter === "incomplete") return !task.done;
    return true;
  });

  return (
    <div>
      {filteredTasks.map((task, index) => (
        <div
          className="task-list-container"
          key={task.id || index}
          style={{
            backgroundColor: task.done ? "green" : "red",
          }}
        >
          <div className="task-list">
            <input
              type="checkbox"
              checked={task.done}
              onChange={(e) =>
                onChangeTask({
                  ...task,
                  done: e.target.checked,
                })
              }
            />
            <label
              style={{
                color: "white",

                textDecoration: task.done ? "line-through" : "none",
              }}
            >
              {task.text}
            </label>
          </div>
          <button onClick={() => onDeleteTask(task.id)}>
            <img src={Delete} alt="delete" />
          </button>
        </div>
      ))}
    </div>
  );
}

// export default function TaskContainer({ tasks, onChangeTask, onDeleteTask }) {
//   return (
//     // {tasks.map((task) => (
//     //   <li key={task.id}>
//     //     <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
//     //   </li>
//     // ))}
//     <>
//       <div>
//         {todo.map((task, index) => (
//           <div className="task-list-container" key={index}>
//             <div className="task-list">
//               <input
//                 type="checkbox"
//                 checked={task.checked}
//                 onChange={() => onChecked(index)}
//               />
//               <label
//                 style={{
//                   textDecoration: task.checked ? "line-through" : "none",
//                 }}
//               >
//                 {task.title}
//               </label>
//             </div>
//             <button onClick={() => onDeleteTask(index)}>
//               <img src={Delete} alt="delete" />
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// // function Task({ task, onChange, onDelete }) {
// //   return (
// //     <label>
// //       <input
// //         type="checkbox"
// //         checked={task.done}
// //         onChange={(e) =>
// //           onChange({
// //             ...task,
// //             done: e.target.checked,
// //           })
// //         }
// //       />
// //       {task.text}
// //       <button onClick={() => onDelete(task.id)}>Delete</button>
// //     </label>
// //   );
// // }
