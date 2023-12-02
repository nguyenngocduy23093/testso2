// TaskList.js
import React from 'react';

function TaskList({ tasks, onComplete, onDelete }) {
  const handleComplete = (index) => {
    onComplete(index);
  };

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <ul  >
      {tasks.map((task, index) => (
 <div style={{textAlign:"center"} }>
        <label   key={index}  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}><input type='checkbox' />
          {task.text}
          {!task.completed && (
            <button style={{marginLeft:"20px"}} onClick={() => handleComplete(index)}>Complete</button>
          )}
          <button  style={{marginLeft:"20px"}} onClick={() => handleDelete(index)}>Delete</button>
        </label>
        </div>
      ))}
    </ul>
  );
}

export default TaskList;



