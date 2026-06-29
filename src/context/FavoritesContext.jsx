import { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favoriteItems, setFavoriteItems] = useState(() => {
    const savedElements = localStorage.getItem("favoriteItems");
    if (savedElements) {
      const data = JSON.parse(savedElements);
      return data;
    }
    return [];
  });

  // add
  const addToFavorite = (item) => {
    setFavoriteItems((currentItems) => [
      ...currentItems,
      { ...item, quantity: 1 },
    ]);
  };
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);
  // delete
  function deleteItem(id) {
    setFavoriteItems((prevItem) => prevItem.filter((item) => id !== item.id));
  }
  return (
    <FavoritesContext.Provider
      value={{
        favoriteItems,
        addToFavorite,
        deleteItem,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext, FavoritesProvider };
