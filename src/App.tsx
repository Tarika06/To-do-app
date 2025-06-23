import { useState } from "react";
import Tasks from "./components/tasks.tsx";
import "./App.css"
function App() {
  let [task, setTask] = useState("");
  let [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleOnDeleteTask =(index:number) => {
    const confirmation = window.confirm("Do you want to delete the task");
    if(confirmation === true){
      setTasks(tasks.filter((_, i)=>i!=index));
    }
  }

  return (
    <div className="task-container">
      <h2>Today's Tasks</h2>
      <h3>Do it today.Don't do it tomorrow</h3>
      <input
        placeholder="your tasks"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <Tasks
        onClick={handleAddTask}
        onDeleteTask={handleOnDeleteTask}
        tasks={tasks}
      />
    </div>
  );
}
export default App;
