import { createContext, useReducer, useEffect } from "react";

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((todo) =>
        todo.id === action.task.id ? action.task : todo
      );
    }
    case "deleted": {
      return tasks.filter((todo) => todo.id !== action.id);
    }
    case "set": {
      return action.tasks;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
let nextId = 0;

function init() {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
}

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, undefined, init);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  useEffect(() => {
    if (tasks.length === 0) {
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleAddTask,
        handleChangeTask,
        handleDeleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
