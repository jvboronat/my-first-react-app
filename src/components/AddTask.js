import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  //

  return (
    <form className="add-form" onSubmit={(e) => addTask(e)}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          value={text} // Enlazo el valor con text
          onChange={(e) => setText(e.target.value)}
          placeholder="AddTask"
        />
      </div>
      <div className="form-control">
        <label>Day and Time</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add day and time"
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          placeholder="AddTask"
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
