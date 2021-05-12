import { React } from "react";
import styles from "src/styles//Home.module.css";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className={styles.imcomplete_area}>
      <p className={styles.title}>TODO</p>
      {todos.map((todo, index) => {
        return (
          <ul key={todo} className={styles.list_row}>
            <div className={styles.IncompleteTodosFlex}>
              {/* 下まだ関数入れてない */}
              <button className={styles.compDleteButton}>✔</button>
              <li>{todo}</li>
              {/* <button
              className={styles.compDleteButton}
              onClick={() => onClickComplete(index)}
              >
                完
              </button> */}
            </div>

            <button
              className={styles.compDleteButton}
              onClick={() => onClickDelete(index)}
            >
              削
            </button>
          </ul>
        );
      })}
    </div>
  );
};
