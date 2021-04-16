import { MdDelete } from 'react-icons/md'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <div className="task-text">
        <h3>{task.text}</h3>
        <p>{task.day}</p>
      </div>
      <div className="task-delete">
        <MdDelete style={{color: '#FE5F55', cursor: 'pointer'}} onClick={() => onDelete(task.id)} />
      </div>
    </div>
  )
}

export default Task
