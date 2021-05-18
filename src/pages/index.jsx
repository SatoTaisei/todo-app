import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [displayTodos, setDisplayTodos] = useState([]);
  const [checkFlag, setCheckFlag] = useState(false);

  return (
    <div className={styles.container}>
      {/* ヘッダー */}
      <header className={styles.header}>TODO</header>
      {/* メインエリア */}
      <main className={styles.main}>
        {/* 入力エリア → InputTodo*/}
        <div className={styles.input_area}>
          <input
            type="text"
            placeholder="やることを入力"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            className={styles.input_text}
          />
          <button
            className={styles.addButton}
            onClick={() => {
              if (todoText === "") return;
              const newTodos = [...displayTodos, todoText];
              setDisplayTodos(newTodos);
              setTodoText("");
            }}
          >
            {"\u002B"}
          </button>
        </div>

        {/* TODO表示エリア → displayTodos */}
        <div className={styles.incomplete_area}>
          <p className={styles.title}>TODO</p>
          {displayTodos.map((todo, index) => {
            return (
              <ul key={index} className={styles.list_row}>
                <div className={styles.IncompleteTodosFlex}>
                  <button
                    className={styles.compDleteButton}
                    onClick={() => {
                      setCheckFlag((checkFlag) => !checkFlag);
                      alert(checkFlag);
                    }}
                  >
                    {/* {checkFlag ? "\u2714" : null} */}
                    {checkFlag && "\u2714"}
                  </button>
                  <li>{todo}</li>
                </div>
                <button
                  className={styles.compDleteButton}
                  onClick={() => {
                    const newTodos = [...displayTodos];
                    newTodos.splice(index, 1);
                    setDisplayTodos(newTodos);
                  }}
                >
                  {"\u2716"}
                </button>
              </ul>
            );
          })}
        </div>
      </main>
    </div>
  );
}
