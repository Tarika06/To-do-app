import { useState } from "react";
interface tasksProps {
  onClick: () => void;
  onDeleteTask: (index: number) => void;
  tasks: string[];
}

const Tasks = ({ onClick, onDeleteTask, tasks }: tasksProps) => {
  let [completedTasks, setCompletedTasks] = useState<boolean[]>(
    Array(tasks.length).fill(false)
  );

  const handleOnSelectTask = (index: number) => {
    const updateCompletion = [...completedTasks];
    updateCompletion[index] = !updateCompletion[index];
    setCompletedTasks(updateCompletion);
  };
  return (
    <>
      <div className="tasks">
        <button onClick={onClick}>Add Task</button>
        <ul className="tasklists">
          {tasks.map((task, index) => (
            <li key={index} className="tasklists-item">
              <span
                onClick={() => handleOnSelectTask(index)}
                style={{
                  textDecoration: completedTasks[index]
                    ? "line-through"
                    : "none",
                  cursor: "pointer ",
                }}
              >
                {task}
              </span>
              <button
                className="delete-btn"
                onClick={() => {
                  onDeleteTask(index);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Tasks;
