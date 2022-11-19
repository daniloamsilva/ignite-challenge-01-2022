import { PlusCircle, ClipboardText } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Task } from './Task';

import styles from './TaskList.module.css';

interface Task {
  id: string;
  content: string;
  done: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState('');

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    
    setTasks(tasks => [{
      id: uuid(),
      content: newTaskText,
      done: false
    }, ...tasks]);
    setNewTaskText('');
  }

  function countDoneTasks() {
    return tasks.reduce(function(acc, task) {
      return task.done ? acc + 1 : acc
    }, 0);
  }

  function handleDeleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function handleChanceTaskDoneStatus(id: string) {
    const tasksWithChangedOne = tasks.map(task => {
      if(task.id === id) task.done = !task.done;
      return task;
    });

    setTasks(tasksWithChangedOne);
  }

  const isNewTaskTextEmpty = newTaskText.length === 0;

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleCreateNewTask}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskTextChange}
        />
        <button type="submit" disabled={isNewTaskTextEmpty}>
          Criar <PlusCircle size={16} weight="bold" />
        </button>
      </form>

      <div className={styles.info}>
        <div>
          <strong className={styles.created}>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div>
          <strong className={styles.done}>Concluídas</strong>
          <span>{tasks.length <= 0 ? 0 : `${countDoneTasks()} de ${tasks.length}`}</span>
        </div>
      </div>

      { tasks.length <= 0 ? (
        <div className={styles.emptyList}>
          <ClipboardText size={56} weight="thin" />
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        tasks.map(task => { return (
          <Task 
            key={task.id} 
            task={task} 
            onDeleteTask={handleDeleteTask} 
            onChanceTaskDoneStatus={handleChanceTaskDoneStatus}
          />
        ) })
      ) }



    </div>
  )
}
