const statusFilter = (itemToFilter, filterKey, filterValue) => {
  const filter = itemToFilter.filter(item => item[filterKey] === filterValue);
  return filter;
};

const andFilter = (itemToFilter, firstFilterKey, secondFilterKey, secondFilterValue) => {
  const filter = itemToFilter.filter(item => item[firstFilterKey] && item[secondFilterKey] === secondFilterValue);
  return filter;
};

const sortRestaurant = (restaurants, sortKey) => {
  const sorted = restaurants.sort((a, b) => b.sortingValues[sortKey] - a.sortingValues[sortKey]);
  
  const noneFavorites = sorted.filter(item =>  !item.favorite);
  let favorites = sorted.filter(item => item.favorite);

  let sortedFavorites;
  if(favorites.length > 1) {
    const favoriteAndOpened = andFilter(favorites, "favorite", "status", "open");
    const favoriteAndOrderAhead = andFilter(favorites, "favorite", "status", "order ahead");
    const favoriteAndClosed = andFilter(favorites, "favorite", "status", "closed");

    sortedFavorites = [...favoriteAndOpened, ...favoriteAndOrderAhead, ...favoriteAndClosed];
    favorites = sortedFavorites;
  }
  
  const opened = statusFilter(noneFavorites, "status", "open");
  const orderAhead = statusFilter(noneFavorites, "status", "order ahead");
  const closed = statusFilter(noneFavorites, "status", "closed");
  const result = [...favorites, ...opened, ...orderAhead, ...closed];
  return result;
};

export default sortRestaurant;
