import TaskContainer from "../../components/TaskContainer";
import Filtermenu from "../../components/FilterMenu";
import TaskProvider from "../../TaskContext";
export default function CompletedToDo() {
  return (
    <>
      <TaskProvider>
        <>
          <h1>Your To-Do</h1>

          <Filtermenu />
          <TaskContainer filter="completed" />
        </>
      </TaskProvider>
    </>
  );
}
// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case "changed": {
//       return tasks.map((t) => (t.id === action.task.id ? action.task : t));
//     }
//     case "deleted": {
//       return tasks.filter((t) => t.id !== action.id);
//     }
//     case "set": {
//       return action.tasks;
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }

// function init() {
//   const savedTasks = localStorage.getItem("tasks");
//   return savedTasks ? JSON.parse(savedTasks) : [];
// }

// const [tasks, dispatch] = useReducer(tasksReducer, undefined, init);
// const [completeTasks, setcompleteTasks] = useState([]);

// useEffect(() => {
//   const complete = tasks.filter((task) => task.done !== false);
//   setcompleteTasks(complete);
//   // if (!complete) {
//   //   return alert("No task matching the filter");
//   // }
// }, [tasks]);

// useEffect(() => {
//   if (tasks.length === 0) {
//     return;
//   }
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }, [tasks]);

// function handleChangeTask(task) {
//   dispatch({
//     type: "changed",
//     task: task,
//   });
// }

// function handleDeleteTask(taskId) {
//   dispatch({
//     type: "deleted",
//     id: taskId,
//   });
// }
