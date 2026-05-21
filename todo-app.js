// To-Do List Application with Local Storage

class TodoApp {
    constructor() {
        this.todos = [];
        this.filter = 'all';
        this.init();
    }

    init() {
        this.loadFromLocalStorage();
        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        const addBtn = document.getElementById('addBtn');
        const todoInput = document.getElementById('todoInput');
        const allBtn = document.getElementById('allBtn');
        const activeBtn = document.getElementById('activeBtn');
        const completedBtn = document.getElementById('completedBtn');
        const clearBtn = document.getElementById('clearBtn');

        addBtn.addEventListener('click', () => this.addTodo());
        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        allBtn.addEventListener('click', () => this.setFilter('all'));
        activeBtn.addEventListener('click', () => this.setFilter('active'));
        completedBtn.addEventListener('click', () => this.setFilter('completed'));
        clearBtn.addEventListener('click', () => this.clearCompleted());
    }

    addTodo() {
        const todoInput = document.getElementById('todoInput');
        const text = todoInput.value.trim();

        if (text === '') {
            alert('Please enter a task!');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString()
        };

        this.todos.push(todo);
        todoInput.value = '';
        todoInput.focus();

        this.saveToLocalStorage();
        this.render();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveToLocalStorage();
        this.render();
    }

    toggleTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToLocalStorage();
            this.render();
        }
    }

    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveToLocalStorage();
        this.render();
    }

    setFilter(filter) {
        this.filter = filter;
        this.updateFilterButtons();
        this.render();
    }

    updateFilterButtons() {
        document.getElementById('allBtn').classList.remove('active');
        document.getElementById('activeBtn').classList.remove('active');
        document.getElementById('completedBtn').classList.remove('active');

        if (this.filter === 'all') document.getElementById('allBtn').classList.add('active');
        if (this.filter === 'active') document.getElementById('activeBtn').classList.add('active');
        if (this.filter === 'completed') document.getElementById('completedBtn').classList.add('active');
    }

    getFilteredTodos() {
        switch (this.filter) {
            case 'active':
                return this.todos.filter(todo => !todo.completed);
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            default:
                return this.todos;
        }
    }

    render() {
        const todoList = document.getElementById('todoList');
        const emptyMessage = document.getElementById('emptyMessage');
        const filteredTodos = this.getFilteredTodos();

        todoList.innerHTML = '';

        if (filteredTodos.length === 0) {
            emptyMessage.classList.add('show');
        } else {
            emptyMessage.classList.remove('show');
            filteredTodos.forEach(todo => {
                const li = document.createElement('li');
                li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
                li.innerHTML = `
                    <input 
                        type="checkbox" 
                        class="checkbox" 
                        ${todo.completed ? 'checked' : ''}
                        onchange="todoApp.toggleTodo(${todo.id})"
                    >
                    <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                    <button class="delete-btn" onclick="todoApp.deleteTodo(${todo.id})">Delete</button>
                `;
                todoList.appendChild(li);
            });
        }

        this.updateStats();
        this.updateClearButton();
    }

    updateStats() {
        const activeTodos = this.todos.filter(todo => !todo.completed).length;
        const statsElement = document.getElementById('stats');
        const taskWord = activeTodos === 1 ? 'task' : 'tasks';
        statsElement.textContent = `${activeTodos} ${taskWord} remaining`;
    }

    updateClearButton() {
        const clearBtn = document.getElementById('clearBtn');
        const hasCompleted = this.todos.some(todo => todo.completed);
        clearBtn.disabled = !hasCompleted;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    saveToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadFromLocalStorage() {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            try {
                this.todos = JSON.parse(savedTodos);
            } catch (error) {
                console.error('Error loading todos from localStorage:', error);
                this.todos = [];
            }
        }
    }
}

// Initialize the app when DOM is ready
let todoApp;
document.addEventListener('DOMContentLoaded', () => {
    todoApp = new TodoApp();
});
