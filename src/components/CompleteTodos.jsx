import { React } from "react";
import styles from "src/styles//Home.module.css";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;

  return (
    <div className={styles.complete_area}>
      <p className={styles.title}>完了</p>
      {todos.map((todo, index) => {
        return (
          <ul key={todo} className={styles.list_row}>
            <li>{todo}</li>
            <button
              className={styles.compDleteButton}
              onClick={() => onClickBack(index)}
            >
              戻
            </button>
          </ul>
        );
      })}
    </div>
  );
};
