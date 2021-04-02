import styles from "./Sort.module.css";

const Sort = ({ sort, setSort }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Sort:</p>
      <select
        className={styles.select}
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value={false}></option>
        <option value="fav">Fav at top</option>
        <option value="noFav">Not Fav at top</option>
      </select>
      {sort ? (
        <p className={styles.clear} onClick={() => setSort(false)}>
          Clear
        </p>
      ) : null}
    </div>
  );
};

export default Sort;
