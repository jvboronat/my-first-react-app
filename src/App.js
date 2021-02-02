import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const url = 'http://localhost:5001'

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
    const res = await fetch(`${url }/tasks`)

    const data = await res.json()

    return data
  };

  const getTask = async (id) => {

    const res = await fetch(`${url}/tasks/${id}`)
    const task = await res.json()

    return task
  }

  const updateTask = async (task, method_name) => {
    await fetch(`${url}/tasks/${task.id}`
    ,
    {
      method: method_name,
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(task)
    }
    )
    
  }

  const onDelete = async(id) => {
    //console.log("OnDelete", id);    
    
    // Obtengo la task

    const task = await getTask(id)

    console.log(task.id)

    await updateTask(task,'DELETE')

    // Ahora tengo que llamar a un metodo DELETE PARA BORRAR LOS DATOS DEL SERVIDOR json
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = async(task) => {

    // Esto ya no hará falta (lo de generar el id)
    //const id = Math.floor(Math.random() * 10000) + 1;
    //task.id = id;

    const res = await fetch(`${url}/tasks`
    ,
    {
      method: 'POST',
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(task)
    }
    )

    const newTask = await res.json()

    console.log(newTask)
    task.id = newTask.id

    // haremos una llamada con un POST que creará los datos en el servidor

    setTasks([...tasks, task]);
    //console.log(tasks);
  };

  const toggleReminder = async(id) => {
    //console.log("toogleRemindesr", id);

    //Tendré que actualizar los datos del id correspondiente
    // tengo que hacer un fetch para obtener los datos de ese id
    // luego volveré hacer otra llamada fetch, en este caso para
    // actualizar con un PUT

    const taskUpdated = await getTask(id)
    taskUpdated.reminder = !taskUpdated.reminder;

    updateTask(taskUpdated,'PUT')

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: taskUpdated.reminder } : task
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
