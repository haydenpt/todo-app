import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from "react"

function App() {
  const [tasks, setTask] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTask(tasksFromServer)
    }
    getTasks()
  }, [])

// Fetch Tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  return data
}

// Add Task
  const addtask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const newTask = await res.json()
    setTask([...tasks, newTask])
  }

// Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

    setTask(tasks.filter((task) => task.id !== id))
  }

  return (  
    <div className='container'>
      <Header />
      <AddTask addTask={addtask} />
      <p><i>Double click on a task to mark as important</i></p>
      {tasks.length > 0 ?
        <Tasks tasks={tasks} 
               deleteTask={deleteTask} /> :
        "Nothing to do"}
    </div>
  );
}

export default App;
