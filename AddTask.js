


import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div style={{textAlign:"center",marginTop:"20px"}}>
      <input style={{padding:"10px 10px 10px 10px",borderRadius:"15px",width:"700px"}}
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder='add details'
      />
      <button style={{marginLeft:"30px",padding:"10px 30px 10px 30px",backgroundColor:"#0581f5",border:"1px solid white",borderRadius:"15px"}} onClick={handleAddTask}>Add </button>
    </div>
  );
}

export default AddTask;