# To-Do List Application

A fully functional To-Do List application with local storage functionality built using vanilla HTML, CSS, and JavaScript.

## Features

### Core Functionality
- ✅ **Add Tasks**: Easily add new tasks with the input field
- ✅ **Delete Tasks**: Remove tasks with the delete button
- ✅ **Mark as Complete**: Check off completed tasks
- ✅ **Persistent Storage**: All tasks are saved to browser's local storage
- ✅ **Task Count**: See how many tasks are remaining

### Filter & Organization
- 🔍 **Filter by Status**: 
  - All: View all tasks
  - Active: View only incomplete tasks
  - Completed: View only completed tasks
- 🧹 **Clear Completed**: Remove all completed tasks at once

### User Experience
- 🎨 **Modern Design**: Clean and intuitive interface
- 📱 **Responsive Layout**: Works on desktop, tablet, and mobile devices
- ✨ **Smooth Animations**: Fade-in and slide effects for better UX
- ⌨️ **Keyboard Support**: Press Enter to add tasks quickly

## How to Use

### Getting Started
1. Open `todo-app.html` in your web browser
2. You'll see the To-Do List application interface

### Adding Tasks
1. Type your task in the input field
2. Click "Add Task" or press Enter
3. The task will appear in the list

### Managing Tasks
- **Mark Complete**: Click the checkbox next to a task
- **Delete Task**: Click the "Delete" button on any task
- **Filter Tasks**: Use the filter buttons to view specific task types
- **Clear Completed**: Click "Clear Completed" to remove all finished tasks

## File Structure

```
├── todo-app.html          # Main HTML file
├── todo-app.css           # Styling and animations
├── todo-app.js            # Application logic
└── TODO_APP_README.md     # This file
```

## Technical Details

### Local Storage
- Tasks are automatically saved to `localStorage` in JSON format
- Data persists even after closing and reopening the browser
- Storage key: `todos`

### Class Structure
The application uses a `TodoApp` class that manages:
- Task data (`todos` array)
- Event listeners
- Local storage operations
- UI rendering
- Task filtering

### Key Methods
- `addTodo()`: Add a new task
- `deleteTodo(id)`: Remove a task
- `toggleTodo(id)`: Mark task as complete/incomplete
- `clearCompleted()`: Remove all completed tasks
- `setFilter(filter)`: Change the filter view
- `render()`: Update the UI
- `saveToLocalStorage()`: Persist data
- `loadFromLocalStorage()`: Retrieve saved data

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Any modern browser with HTML5 localStorage support

## Future Enhancements
- Task categories/tags
- Task due dates and reminders
- Task priority levels
- Export tasks to file
- Dark mode
- Task search functionality
- Recurring tasks

## Security Note
This application stores data locally in the browser. It does not send any data to external servers. Local storage is limited to approximately 5-10MB per domain and can be cleared by clearing browser data.

## License
This project is licensed under the Apache License 2.0 - see the LICENSE file in the repository root for details.
