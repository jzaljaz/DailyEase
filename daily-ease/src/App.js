import { useEffect, useState } from 'react';
import './App.css';
import TaskCard from './components/TaskCard';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([
    { title: 'Brush your teeth', image: 'https://img.icons8.com/color/96/toothbrush.png', time: '08:00', done: false },
    { title: 'Take your medication', image: 'https://img.icons8.com/color/96/pill.png', time: '09:00', done: false },
    { title: 'Eat your breakfast', image: 'https://img.icons8.com/color/96/breakfast.png', time: '09:30', done: false },
    { title: 'Go for a walk', image: 'https://img.icons8.com/color/96/walking.png', time: '17:00', done: false },
    { title: 'Watch TV', image: 'https://img.icons8.com/color/96/tv.png', time: '20:00', done: false }
  ]);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    const interval = setInterval(() => {
      setTasks(prev => [...prev]); // trigger re-render
    }, 60000);
    return () => clearInterval(interval);
  }, [darkMode]);

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="app-container">
      <header>
        <h2>🧠 My Daily Routine</h2>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>
      <main>
        <div className="task-list">
          {tasks.map((task, i) => (
            <TaskCard
              key={i}
              task={task}
              index={i}
              toggleTask={toggleTask}
              speak={speak}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
