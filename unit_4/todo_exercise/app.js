(function () {
  function Todo() {
    const todos = localStorage.getItem("TODOS");
    this.all = todos ? JSON.parse(todos) : [];
  }

  Todo.prototype.save = function () {
    localStorage.setItem("TODOS", JSON.stringify(this.all));
  };

  Todo.prototype.add = function (todo) {
    const newTodo = { id: this.all.length + 1, title: todo, completed: false };

    if (this.all) {
      this.all = [...this.all, newTodo];
    } else {
      this.all = [newTodo];
    }

    this.save();
    return newTodo;
  };

  Todo.prototype.update = function (id, completed) {
    id = parseInt(id);
    this.all = this.all.map((todo) =>
      todo.id === id ? { ...todo, completed } : todo
    );
    this.save();
  };

  Todo.prototype.remove = function (id) {
    id = parseInt(id);
    this.all = this.all.filter((todo) => todo.id !== id);
    this.save();
  };

  const todosList = document.querySelector(".todos");
  const form = document.querySelector("form");
  const totalStatus = document.querySelector(".total");
  const completedStatus = document.querySelector(".total_completed");

  const todos = new Todo();

  for (let todo of todos.all) {
    const todoItem = createTodoEl(todo);
    todosList.append(todoItem);
    updateStatus();
  }

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const todoInput = form.querySelector("input");
    const todo = todoInput.value;
    // Create a new todo and add it to the list of todos
    if (todo.trim()) {
      const newTodo = todos.add(todo);
      const newTodoEl = createTodoEl(newTodo);
      todosList.append(newTodoEl);
      todoInput.value = "";
      updateStatus();
    }
  });

  todosList.addEventListener("click", function (evt) {
    const { target } = evt;

    // Remove a todo
    if (target.tagName === "BUTTON") {
      const todoId = target.parentElement.dataset.id;
      todos.remove(todoId);
      target.parentElement.remove();
      updateStatus();
    }

    // mark as completed
    if (target.tagName === "INPUT") {
      target.parentElement.classList.toggle("completed");
      const completed = target.parentElement.classList.contains("completed");
      const todoId = target.parentElement.dataset.id;
      todos.update(todoId, completed);
      updateStatus();
    }
  });

  function createTodoEl(todo) {
    const { id, title, completed } = todo;
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove_todo");

    if (completed) {
      li.classList.add("completed");
      checkbox.checked = true;
    }

    li.append(checkbox, title, removeBtn);
    li.dataset.id = id;
    return li;
  }

  function updateStatus() {
    totalStatus.innerText = todos.all.length;
    completedStatus.innerText = todos.all.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  }
})();
