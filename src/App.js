
import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [list, setList] = useState([]);

  function add(event) {
    event.preventDefault();
    const task = event.target.tod.value.trim();
    if (task && !list.includes(task)) {
      setList([...list, task]);
    } else if (list.includes(task)) {
      alert('Task already exists!');
    }
    event.target.tod.value = '';
  }

  function del(task) {
    const updatedList = list.filter(item => item !== task);
    setList(updatedList);
  }

  const taskItems = list.map((task, index) => (
    <Show key={index} task={task} onDelete={() => del(task)} />
  ));

  return (
    <div className='screen'>
      <div className='outertodo'>
        <form className='innertodo' onSubmit={add}>
          <input type='text' name='tod' placeholder='Enter Your Task' />
          <button>ADD</button>
        </form>
        <div className='tasks'>
          <ul>{taskItems}</ul>
        </div>
      </div>
    </div>
  );
}

function Show({ task, onDelete }) {
  return (
    <li >
      {task} <span onClick={onDelete}>x</span>
    </li>
  );
}
