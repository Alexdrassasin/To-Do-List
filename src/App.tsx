import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {

  const{
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos
  } =useTodos();

  return (
    <main className = "py-11 h-screen space-y-5 overflow-y-auto">
      <h1 className = "font-bold text-5xl text-center">
        Your To Do List
      </h1>
      <div className="max-w-lg mx-auto bg-gray-100 rounded-md p-5 space-y-6">
      <AddTodoForm
        onSubmit={addTodo}
      />
      <TodoList
        todos={todos}
        onCompletedChange={setTodoCompleted}
        onDelete={deleteTodo}
      />
      </div>
      <TodoSummary
        todos={todos}
        deleteAllCompleted={deleteAllCompletedTodos}
      />
    </main>
  );
}

export default App
