import styles from "./PaginationItem.module.css";

const PaginationItem = ({ page, setActivePage, activePage }) => {
  return (
    <li
      className={`${
        activePage === page ? `${styles.item} ${styles.active}` : styles.item
      }`}
      onClick={() => setActivePage(page)}
    >
      {page}
    </li>
  );
};

export default PaginationItem;
