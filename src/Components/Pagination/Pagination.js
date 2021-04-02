import PaginationItem from "../PageinationItem";

import styles from "./Pagination.module.css";

const Pagination = ({ activePage, setActivePage, dataKeys }) => {
  const pageCount = Math.ceil(dataKeys.length / 5);

  const handlePrevBtnClick = () => {
    if (activePage > 1) setActivePage(activePage - 1);
  };

  const handleNextBtnClick = () => {
    if (activePage < pageCount) setActivePage(activePage + 1);
  };

  const renderBreadCrumb = () => {
    const breadcrumb = [];

    for (let i = 0; i < pageCount; i++) {
      breadcrumb.push(
        <PaginationItem
          key={`page-${i}`}
          page={i + 1}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      );
    }

    return breadcrumb;
  };

  if (pageCount > 1) {
    return (
      <nav className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.prev} onClick={handlePrevBtnClick}>
            Previous
          </li>
          {renderBreadCrumb()}
          <li className={styles.next} onClick={handleNextBtnClick}>
            Next
          </li>
        </ul>
      </nav>
    );
  }
  return null;
};

export default Pagination;
