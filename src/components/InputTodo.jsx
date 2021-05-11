import { React } from "react";
import styles from "src/styles//Home.module.css";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;

  return (
    <div className={styles.input_area}>
      <input
        className={styles.input_text}
        placeholder="やることを入力"
        value={todoText}
        onChange={onChange}
      />
      <button className={styles.addButton} onClick={onClick}>
        ＋
      </button>
    </div>
  );
};
