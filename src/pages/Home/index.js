import TaskInput from "../../components/TaskInput";
import TaskContainer from "../../components/TaskContainer";
import Filtermenu from "../../components/FilterMenu";
import TaskProvider from "../../TaskContext";

export default function Home() {
  return (
    <TaskProvider>
      <>
        <h1>Your To-Do</h1>
        <TaskInput placeholder="Add a task" />
        <Filtermenu />
        <TaskContainer filter="all" />
      </>
    </TaskProvider>
  );
}
// import { Navigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// const { isAuthenticated } = useAuth0();

// if (!isAuthenticated) return <Navigate to="/" />;
// <TaskProvider>
//   <TaskInput onAddTask={handleAddTask} placeholder={"Add task"} />
//   <Filtermenu />

//   <TaskContainer
//     tasks={tasks}
//     onChangeTask={handleChangeTask}
//     onDeleteTask={handleDeleteTask}
//   />
//   {/* <YourRoutesOrLayout /> */}
// </TaskProvider>
// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case "added": {
//       return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ];
//     }
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
// let nextId = 0;

// function init() {
//   const savedTasks = localStorage.getItem("tasks");
//   return savedTasks ? JSON.parse(savedTasks) : [];
// }

// export default function Home() {
//   const [tasks, dispatch] = useReducer(tasksReducer, undefined, init);

//   // const [nextId, setNextId] = useState(0);

//   // useEffect(() => {
//   //   setNextId(tasks.length);
//   // }, [tasks]);
//   // //console.log(tasks);
//   // function handleAddTask(text) {
//   //   dispatch({
//   //     type: "added",
//   //     id: nextId,
//   //     text: text,
//   //   });
//   //   setNextId(nextId + 1);
//   // }
//   function handleAddTask(text) {
//     dispatch({
//       type: "added",
//       id: nextId++,
//       text: text,
//     });
//   }

//   useEffect(() => {
//     if (tasks.length === 0) {
//       return;
//     }
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   function handleChangeTask(task) {
//     dispatch({
//       type: "changed",
//       task: task,
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       type: "deleted",
//       id: taskId,
//     });
//   }

//   return (
//     <>
//       <h1>Your To-Do</h1>
//       <TaskInput onAddTask={handleAddTask} placeholder={"Add task"} />
//       <Filtermenu />

//       <TaskContainer
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }
