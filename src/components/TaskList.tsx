import { PlusCircle, ClipboardText } from 'phosphor-react';
import { Task } from './Task';

import styles from './TaskList.module.css';

export function TaskList() {
  return (
    <div className={styles.wrapper}>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar <PlusCircle size={16} weight="bold" />
        </button>
      </form>

      <div className={styles.info}>
        <div>
          <strong className={styles.created}>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div>
          <strong className={styles.done}>Concluídas</strong>
          <span>0</span>
        </div>
      </div>

      <div className={styles.emptyList}>
        <ClipboardText size={56} weight="thin" />
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>

      {/* <Task />
      <Task />
      <Task /> */}

    </div>
  )
}
