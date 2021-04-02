import styles from "./Serach.module.css";

const Search = ({ name, handleChange, handleKeyPress }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        name="friend"
        placeholder="Search your friend's"
        className={styles.search}
        value={name}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <p className={styles.text}>Press enter to add friend</p>
    </div>
  );
};

export default Search;
