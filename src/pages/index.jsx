import { React, useState } from "react";
import styles from "src/styles//Home.module.css";
import { InputTodo } from "src/components/InputTodo";
import { IncompleteTodos } from "src/components/IncompleteTodos";
import { CompleteTodos } from "src/components/CompleteTodos";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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
      {/* <Head>
        <title>TODOリスト</title>
        <meta name="description" content="Let's start TODO-App" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      {/* メイン画面 */}
      <main className={styles.main}>
        {/* 追加エリア */}
        <InputTodo
          todoText={todoText}
          onChange={onChangeTodoText}
          onClick={onClickAdd}
        />

        {/* 未完了エリア */}
        <IncompleteTodos
          todos={incompleteTodos}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />

        {/* 完了エリア */}
        <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
      </main>
    </div>
  );
}
