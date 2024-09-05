import TaskButton from './Components/TaskButton';
import * as React from 'react';
import AdmitTaskButton from './Components/AdmitTaskButton';
import List from './Components/List';
import SetTimeOutExample from './Components/SetTimeout';
import { useState, useEffect } from "react";

function App() {
  const [taskQueue, setTaskQueue] = React.useState([]);
  const [priorityList, setPriorityList] = React.useState([]);
  const [regularList2, setRegularList2] = React.useState([]);
  const [regularList3, setRegularList3] = React.useState([]);
  const [regularList4, setRegularList4] = React.useState([]);

  const addRandomTask = () => {
    if (taskQueue.length < 18) {
      const randomNumber = Math.floor(Math.random() * 100);
      const randomColor = Math.random() < 0.8 ? 'white' : 'red';
      setTaskQueue([...taskQueue, { number: randomNumber, color: randomColor }]);
    }
  };

  const admitTask = () => {
    if (taskQueue.length === 0) return;

    const task = taskQueue[0];
    setTaskQueue(taskQueue.slice(1));

    if (task.color === 'red') {
      setPriorityList([...priorityList, task]);
    } else {
      if (regularList2.length === 0) {
        setRegularList2([...regularList2, task]);
      } else if (regularList3.length === 0) {
        setRegularList3([...regularList3, task]);
      } else if (regularList4.length === 0) {
        setRegularList4([...regularList4, task]);
      } else {
        // Round-robin logic
        if (regularList2.length <= regularList3.length && regularList2.length <= regularList4.length) {
          setRegularList2([...regularList2, task]);
        } else if (regularList3.length <= regularList2.length && regularList3.length <= regularList4.length) {
          setRegularList3([...regularList3, task]);
        } else {
          setRegularList4([...regularList4, task]);
        }
      }
    }
  };

  return (
    <>
      <div className='container'>
        <div className="taskContainer">
          <br></br>
          <TaskButton addRandomTask={addRandomTask} />
          <h1>Task Queue</h1>
          <div className="taskQueueList">
            {taskQueue.map((task, index) => (
              <p key={index} style={{ color: task.color }}>
                {task.number}
              </p>
            ))}
          </div>
          <AdmitTaskButton admitTask={admitTask} />
        </div>

        <div className="container2">
          <div className="queue1">
            <h2>High Priority Queue 1</h2>
            <List tasks={priorityList} setTasks={setPriorityList} duration={2500} />
          </div>

          <div className="queue2">
            <h2>Regular Queue 2</h2>
            <List tasks={regularList2} setTasks={setRegularList2} duration={2500} />
          </div>

          <div className="queue3">
            <h2>Regular Queue 3</h2>
            <List tasks={regularList3} setTasks={setRegularList3} duration={2500} />
          </div>

          <div className="queue4">
            <h2>Regular Queue 4</h2>
            <List tasks={regularList4} setTasks={setRegularList4} duration={2500} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;