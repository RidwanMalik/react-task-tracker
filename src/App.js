import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Add Music to RPL Website Videos',
      day: 'April 13, 2021 12:00 AM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Check ITD Sollutions Mail Spamming Issue',
      day: 'April 14, 2021 12:00 AM',
      reminder: false,
    },
    {
      id: 3,
      text: 'Learn React.js',
      day: 'April 15, 2021 12:00 AM',
      reminder: true,
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
    {...task, reminder: !task.reminder} 
    : task
    ))
  }

  return (
    <div className='container' >
      <Header title='Task Traker' onShow={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0  ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      : <p className='text-center text-muted'>No Task To Do</p>
      }
    </div>
  );
}

export default App;
