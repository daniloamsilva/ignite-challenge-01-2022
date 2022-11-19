import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.task}>
      <label className={styles.container}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button title="Deletar tarefa">
        <Trash size={20} />
      </button>
    </div>
  )
}
