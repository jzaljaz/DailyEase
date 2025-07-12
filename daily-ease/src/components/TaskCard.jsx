const TaskCard = ({ task, index, toggleTask, speak }) => {
  const now = new Date();
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const isDue = currentTime === task.time;

  const cardClass = `task${isDue && !task.done ? ' reminder' : ''}`;
  const buttonClass = `task-button${task.done ? ' done' : ''}`;

  return (
    <div className={cardClass}>
      <div className="task-left">
        <img
          src={task.image}
          alt={task.title}
          onClick={() => speak(task.title)}
        />
        <div className="task-text">
          <span onClick={() => speak(task.title)}>{task.title}</span>
          <div className="time-label">🕒 {task.time}</div>
        </div>
      </div>
      <button
        className={buttonClass}
        onClick={() => toggleTask(index)}
      >
        {task.done ? '✅ Done' : '✔️ Mark Done'}
      </button>
    </div>
  );
};

export default TaskCard;
