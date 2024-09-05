import React, { useState, useEffect } from 'react';
import SetTimeOutExample from './SetTimeout';

const List = ({ tasks, setTasks, duration }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (tasks.length > 0 && !isProcessing) {
      setIsProcessing(true);
    }
  }, [tasks]);

  useEffect(() => {
    let timer;
    if (isProcessing && tasks.length > 0) {
      timer = setTimeout(() => {
        handleTimeout();
      }, duration);
    }

    return () => clearTimeout(timer);
  }, [isProcessing, tasks]);

  const handleTimeout = () => {
    const newTasks = [...tasks];
    newTasks.splice(0, 1); // Remove the first task
    setTasks(newTasks);

    if (newTasks.length > 0) {
      // Continue processing the next task
      setIsProcessing(true);
    } else {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <p>Queue List</p>
      <div className="list">
        {tasks.map((task, index) => (
          <p key={index} style={{ color: task.color }}>
            {task.number}
          </p>
        ))}
      </div>
        
      <div className="duration">
        <p>Duration:</p>
          <div className='bar'>
            {isProcessing && tasks.length > 0 && (
              <SetTimeOutExample
                key={tasks[0].number} // Use tasks[0].number as key to reset the progress bar
                onTimeout={handleTimeout}
                duration={duration}
              />
            )}
          </div>
      </div>
    </div>
  );
};

export default List;
