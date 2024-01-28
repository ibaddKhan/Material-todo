import React, { useState } from 'react';

const Card = ({ title, deleteTodo, editTodo, index }) => {
  const [showTodo, setShowTodo] = useState(true);
  const [editedValue, setEditedValue] = useState(title);

  const saveEditTodo = () => {
    const newValue = editedValue.trim();

    if (newValue !== '') {
      editTodo(index, newValue);
      setShowTodo(true);
    } else {
      alert('Please enter a non-empty value before saving.');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 max-w-md mx-auto rounded-lg overflow-hidden shadow-md mb-8">
      {showTodo ? (
        <div className="p-6">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h4>
          <div className="mt-4 flex space-x-2">
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition duration-300"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition duration-300"
              onClick={() => {
                setEditedValue(title); 
                setShowTodo(false);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <input
            type="text"
            placeholder="Edit Todo"
            className="border border-gray-300 p-2 rounded w-full focus:outline-none"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-green-600 transition duration-300"
            onClick={saveEditTodo}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
