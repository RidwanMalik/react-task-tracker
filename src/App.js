import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTask = async () => {
      const taskFormServer = await fetchTasks()
      setTasks(taskFormServer)
    }

    getTask()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const response = await fetch("http://task.obhilash.com/api/v1/tasks")
    const data = await response.json()
    return data.data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const response = await fetch(`http://task.obhilash.com/api/v1/tasks/${id}`)
    const data = await response.json()

    return data.data
  }

  // Add Task
  const addTask = async (task) => {
    const response = await fetch("http://task.obhilash.com/api/v1/tasks", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await response.json()
    setTasks([...tasks, data.data])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://task.obhilash.com/api/v1/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {
      ...taskToToggle, reminder: !taskToToggle.reminder
    }
    const response = await fetch(`http://task.obhilash.com/api/v1/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await response.json()
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: data.reminder }
      : task
    ))
  }

  return (
    <Router>
    <div className='container' >
      <Header title='Task Tracker' onShow={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      <Route path='/' exact>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : <p className='text-center text-muted'>No Task To Do</p>
      }
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
