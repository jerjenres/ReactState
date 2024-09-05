import TaskButton from './Components/TaskButton';
import * as React from 'react';
import AdmitTaskButton from './Components/AdmitTaskButton';
import SetTimeOutExample from './Components/SetTimeout';

function App() {
  const [taskQueue, setTaskQueue] = React.useState([]);

  const addRandomTask = () => {
    if (taskQueue.length < 18) {
      const randomNumber = Math.floor(Math.random() * 100);
      const randomColor = Math.random() < 0.8 ? 'white' : 'red';
      setTaskQueue([...taskQueue, { number: randomNumber, color: randomColor }]);
    }
  };

  return (
    <>
      <div className = 'container'>
        <div className="taskContainer">
          <br></br>
          <TaskButton addRandomTask = {addRandomTask}/>
          <h1>Task Queue</h1>
          <div className="taskQueueList">
            {taskQueue.map((task, index) => (
              <p key={index} style={{ color: task.color }}>
                {task.number}
              </p>
            ))}
          </div>
          <AdmitTaskButton/>
        </div>

        <div className="container2">
          <div className="queue1">
            <h2>High Priority Queue 1</h2>
            <p>Queue List</p>
            <div className="priorityList1 list">

            </div>
            
            <p>Duration:</p>

            <div className="duration1 d">
              <SetTimeOutExample></SetTimeOutExample>
            </div>
          </div>
          
          <div className="queue2">
            <h2>Regular Queue 2</h2>

            <p>Queue List</p>
            <div className="regularList2 list">

            </div>

            <p>Duration:</p>

            <div className="duration2 d">
              <SetTimeOutExample></SetTimeOutExample>
            </div>
          </div>
          
          <div className="queue3">
            <h2>Regular Queue 3</h2>
            <p>Queue List</p>
            <div className="regularList3 list">
            
            </div>
            <p>Duration:</p>

            <div className="duration3 d">
              <SetTimeOutExample></SetTimeOutExample>
            </div>
          </div>

          <div className="queue4">
            <h2>Regular Queue 4</h2>
            <p>Queue List</p>
            <div className="regularList4 list">

            </div>
            <p>Duration:</p>

            <div className="duration4 d">
              <SetTimeOutExample></SetTimeOutExample>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App
