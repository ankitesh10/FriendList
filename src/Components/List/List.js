import ListItem from "../ListItem";

const List = ({ data, handleFavBtnPress, handleDelete, activePage, sort }) => {
  const startIndex = (activePage - 1) * 5;
  const endIndex = startIndex + 5;

  const handleSort = (a, b) => {
    if (sort === "fav") {
      return b.fav - a.fav;
    }
    return a.fav - b.fav;
  };

  const renderList = () => {
    if (sort) {
      return Object.values(data)
        .sort(handleSort)
        .slice(startIndex, endIndex)
        .map((item) => (
          <ListItem
            key={item.id}
            name={item.name}
            fav={item.fav}
            id={item.id}
            handleFavBtnPress={handleFavBtnPress}
            handleDelete={handleDelete}
          />
        ));
    }
    return Object.values(data)
      .slice(startIndex, endIndex)
      .map((item) => (
        <ListItem
          key={item.id}
          name={item.name}
          fav={item.fav}
          id={item.id}
          handleFavBtnPress={handleFavBtnPress}
          handleDelete={handleDelete}
        />
      ));
  };

  return <ul>{renderList()}</ul>;
};

export default List;
