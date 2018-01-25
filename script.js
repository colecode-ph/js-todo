var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos:', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
     todoText: todoText,
     completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText
    // first todoText is object property, second is function parameter
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    //variable todo saves us some typing below
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
