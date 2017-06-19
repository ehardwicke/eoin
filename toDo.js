angular.module('todoApp', []) //Declaring module
  .controller('todoListController', function() { //creating controller
    var todoList = this;
    todoList.todos = []; //Initialise empty list
 
 //function for creating todo list items
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
 //function for displayin the total and checked amount of todos
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 //function for removing ticked boxes via archive link
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });
