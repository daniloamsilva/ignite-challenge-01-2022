import './global.css';

import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <TaskList />
      </main>
    </div>
  )
}

export default App
