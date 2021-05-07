import { React, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["ううう"]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>TODOリスト</title>
        <meta name="description" content="Let's start TODO-App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* メイン画面 */}
      <main className={styles.main}>
        {/* 追加エリア */}
        <div className={styles.input_area}>
          <input
            placeholder="TODOを入力"
            value={todoText}
            onChange={onChangeTodoText}
          />
          <button className={styles.btn} onClick={onClickAdd}>
            追加
          </button>
        </div>

        {/* 未完了エリア */}
        <div className={styles.imcomplete_area}>
          <p className={styles.title}>未完了のTODO</p>
          {incompleteTodos.map((todo, index) => {
            return (
              <ul key={todo} className={styles.list_row}>
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </ul>
            );
          })}
        </div>

        {/* 完了エリア */}
        <div className={styles.complete_area}>
          <p className={styles.title}>完了のTODO</p>
          {completeTodos.map((todo, index) => {
            return (
              <ul key={todo} className={styles.list_row}>
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </ul>
            );
          })}
        </div>
      </main>
    </div>
  );
}
