import styles from "./Container.module.css";

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>{children}</div>
    </div>
  );
};

export default Container;
