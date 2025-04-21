import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskItem from '../../components/TaskItem/TaskItem';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Home.css';

function Home() {
  // Gunakan custom hook untuk tasks
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  
  // Handler untuk menambah task baru
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  
  // Handler untuk menghapus task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  // Handler untuk toggle status completed
  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };
  
  // Hitung jumlah task yang selesai dan belum selesai
  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="home">
      <Header 
        title="React Task Manager" 
        description="Kelola tugas Anda dengan mudah" 
      />
      
      <main className="container">
        <div className="stats">
          <p>Total: {tasks.length} tugas</p>
          <p>Selesai: {completedTasks}</p>
          <p>Belum selesai: {remainingTasks}</p>
        </div>
        
        <TaskForm onAddTask={handleAddTask} />
        
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">Belum ada tugas. Tambahkan tugas baru!</p>
          ) : (
            tasks.map(task => (
              <TaskItem 
                key={task.id}
                task={task} 
                onDelete={handleDeleteTask}
                onToggleComplete={handleToggleComplete}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;