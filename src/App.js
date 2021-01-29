import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appoiment",
      day: "Feb 5th at 02:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at Shcool",
      day: "Feb 5th at 07:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shoping",
      day: "Feb 5th at 08:30pm",
      reminder: true,
    },
  ]);

  const onClick = (e) => {
    //console.log("Onclick", e);
  };

  const onDelete = (id) => {
    //console.log("OnDelete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (e) => {
    console.log("AddTask");
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
      <Header title="Task Tracker" onClick={onClick} />
      <AddTask addTask={addTask} />
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
