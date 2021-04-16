import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Please Add a Task')
      return
    }
    onAdd({text,day,reminder})
    setText('')
    setDay('')
    setReminder(false)
  }
  

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="task">Day & Time</label>
        <input type="text" placeholder='Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <input type="checkbox" id='reminder' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder} />
        <label htmlFor="reminder">Set Reminder</label>
      </div>
      <input type="submit" value="Save Task" className='btn btn-block' style={{ backgroundColor: '#008BF8' }} />
    </form>
  )
}

export default AddTask
