import TaskContainer from "../../components/TaskContainer";
import Filtermenu from "../../components/FilterMenu";
import TaskProvider from "../../TaskContext";
export default function IncompleteToDo() {
  return (
    <>
      <TaskProvider>
        <>
          <h1>Your To-Do</h1>
          <Filtermenu />
          <TaskContainer filter="incomplete" />
        </>
      </TaskProvider>
    </>
  );
}
