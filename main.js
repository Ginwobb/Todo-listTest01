function TodoApp() {
    const [tasks, setTasks] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');

    const addTask = () => {
      if (inputValue.trim()) {
        setTasks([...tasks, { text: inputValue, isCompleted: false }]);
        setInputValue('');
      }
    };

    const toggleTaskCompletion = (index) => {
      const newTasks = [...tasks];
      newTasks[index].isCompleted = !newTasks[index].isCompleted;
      setTasks(newTasks);
    };
    const removeTask = (index) => {
      const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
      setTasks(newTasks);
    };

    return (
      <div className="todo-app">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: task.isCompleted ? 'line-through' : 'none',
                }}
                onClick={() => toggleTaskCompletion(index)}
              >
                {task.text}
              </span>
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  ReactDOM.render(<TodoApp />, document.getElementById('root'));