import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
  task: {
    id: string;
    content: string;
    done: boolean;
  },
  onDeleteTask(id: string): void;
  onChanceTaskDoneStatus(id: string): void;
}

export function Task({task, onDeleteTask, onChanceTaskDoneStatus}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleChanceTaskDoneStatus() {
    onChanceTaskDoneStatus(task.id);
  }

  return (
    <div className={styles.task}>
      <label className={styles.container}>
        <input type="checkbox" checked={task.done} onChange={handleChanceTaskDoneStatus} />
        <span className={styles.checkmark}></span>
      </label>
      <p className={task.done ? styles.taskDone : '' }>{task.content}</p>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  )
}
