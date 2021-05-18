import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [displayTodos, setDisplayTodos] = useState([]);

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
              const newTodo = { label: todoText, isDone: false };
              const newTodos = [...displayTodos, newTodo];
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
            // todo → {label: "文字列", isDone: true か false }
            return (
              <ul key={index} className={styles.list_row}>
                <div className={styles.IncompleteTodosFlex}>
                  <button
                    className={styles.compDleteButton}
                    onClick={() => {
                      const newTodos = displayTodos.map((todo, i) => {
                        return {
                          ...todo,
                          isDone: index === i ? !todo.isDone : todo.isDone,
                        };
                      });
                      setDisplayTodos(newTodos);
                    }}
                  >
                    {/* {checkFlag ? "\u2714" : null} */}
                    {todo.isDone && "\u2714"}
                  </button>
                  <li>{todo.label}</li>
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
