import React from "react";
import StarFilled from "../../assets/star.svg";
import Star from "../../assets/star-outline.svg";
import Trash from "../../assets/trash-outline.svg";

import styles from "./ListItem.module.css";

const ListItem = ({ name, fav, id, handleFavBtnPress, handleDelete }) => {
  const renderfavBtn = () => {
    if (fav) {
      return <img className={styles.icon} src={StarFilled} alt="favourite" />;
    }
    return <img className={styles.icon} src={Star} alt="favourite" />;
  };

  return (
    <li className={styles.item}>
      <div>
        <p className={styles.name}>{name}</p>
        <p>is your friend</p>
      </div>
      <div>
        <button onClick={() => handleFavBtnPress(id)} className={styles.btn}>
          {renderfavBtn()}
        </button>
        <button onClick={() => handleDelete(id)} className={styles.btn}>
          <img className={styles.icon} src={Trash} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
