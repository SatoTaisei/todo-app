import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
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
          <input placeholder="TODOを入力" />
          <button className={styles.btn}>追加</button>
        </div>

        {/* 未完了エリア */}
        <div className={styles.imcomplete_area}>
          <p className={styles.title}>未完了のTODO</p>
          <ul></ul>
        </div>

        {/* 完了エリア */}
        <div className={styles.complete_area}>
          <p className={styles.title}>完了のTODO</p>
          <ul></ul>
        </div>
      </main>
    </div>
  );
}
