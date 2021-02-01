import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const getTasks = async () => {
      const taskFromServer = await fetchTasks()

      setTasks(taskFromServer)
    }
 

    getTasks()

    
  },[]);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')

    const data = await res.json()

    return data
  };

  const onDelete = (id) => {
    //console.log("OnDelete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    task.id = id;

    setTasks([...tasks, task]);
    //console.log(tasks);
  };

  const toggleReminder = (id) => {
    //console.log("toogleReminder", id);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length !== 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={onDelete}
          toggleReminder={toggleReminder}
        />
      ) : (
        <h3>There is not tasks</h3>
      )}
    </div>
  );
}

export default App;
