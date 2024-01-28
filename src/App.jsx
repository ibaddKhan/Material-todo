import React, { useRef, useState } from 'react';
import Card from './Card';

const App = () => {
  const todoVal = useRef();
  const [data, setData] = useState([]);

  // Add Todo
  const addTodo = (e) => {
    e.preventDefault();
    console.log(todoVal.current.value);
    data.push(todoVal.current.value);
    setData([...data]);
    todoVal.current.value = '';
  };

  const deleteTodo = (index) => {
    console.log('todo deleted', index);
    data.splice(index, 1);
    setData([...data]);
  };

  const editTodo = (index, value) => {
    console.log('edit todo', value);
    data.splice(index, 1, value);
    setData([...data]);

  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">To-Do List</h1>
      <form className="mb-6" onSubmit={addTodo}>
        <input
          type="text"
          ref={todoVal}
          placeholder="Add your new task"
          className="border border-gray-300 p-2 rounded mr-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300"
        >
          Add Task
        </button>
      </form>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Your Tasks</h1>
      {data.length > 0 ? (
        data.map((item, index) => (
          <Card key={index} title={item} deleteTodo={deleteTodo} editTodo={editTodo} index={index} />
        ))
      ) : (
        <h1 className="text-xl text-gray-600 dark:text-gray-400"><b>No Todos yet!</b></h1>
      )}
    </div>
  );
};

export default App;
