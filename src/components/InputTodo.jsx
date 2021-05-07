import { React } from "react";
import styles from "src/styles//Home.module.css";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;

  return (
    <div className={styles.input_area}>
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button className={styles.addButton} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
