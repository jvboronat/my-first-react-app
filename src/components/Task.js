import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete, toggleReminder }) {
  return (
    <div className={`task ${task.reminder ? 'reminder':''}`} 
    onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.text} <FaTimes color="red"  onClick={() => onDelete(task.id)}/>
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
