
import React, { useState, useEffect } from 'react';
import TaskList from './Tasklist';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  // Lấy dữ liệu từ local storage khi trang được tải
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Lưu dữ liệu vào local storage mỗi khi tasks thay đổi
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') {
      return true;
    } else if (filter === 'Active') {
      return !task.completed;
    } else if (filter === 'Complete') {
      return task.completed;
    }
    return true;
  });

  return (
    <div>
      <h2 style={{textAlign:"center"}}>#todo</h2>
      <div style={{textAlign:"center",display: "flex",justifyContent:"space-evenly"}}>
        <h4 onClick={() => setFilter('All')}>All</h4>
        <h4 onClick={() => setFilter('Active')}>Active</h4>
        <h4 onClick={() => setFilter('Complete')}>Complete</h4>
      </div>
      <AddTask addTask={addTask} />
      
      <TaskList tasks={filteredTasks} onComplete={completeTask} onDelete={deleteTask} />
      <div style={{textAlign:"center"}}>
        <button onClick={deleteAllTasks}>Delete All Tasks</button>
      </div>
    </div>
  );
}

export default App;






