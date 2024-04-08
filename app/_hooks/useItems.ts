import INITIAL_ITEMS from "@/public/data/items.json";
import { useEffect, useState } from "react";

const useItems = () => {
  const [itemsList, setItemsList] = useState<IItem[]>(INITIAL_ITEMS);
  const [shownItems, setShownItems] = useState<IItem[]>(INITIAL_ITEMS);

  const updateItemsList = (newItems: IItem[]) => {
    setItemsList(newItems);
    setShownItems(newItems);
  };

  const filterItemsByName = (searchString: string) => {
    if (!itemsList) return;

    const searchTerm = searchString.toLowerCase();
    const newShownItems = itemsList.filter((item) => item.name.toLowerCase().includes(searchTerm));
    setShownItems(newShownItems);
  };

  const filterItemsByPrice = (minPrice: number, maxPrice: number) => {
    if (!itemsList) return;

    const newShownItems = itemsList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    setShownItems(newShownItems);
  };

  const sortItemsByName = (direction: ISortDirection) => {
    if (!shownItems) return;

    const sortedItems = shownItems.slice().sort((a, b) => {
      if (direction === "asc") {
        return a.name.localeCompare(b.name);
      } else if (direction === "desc") {
        return b.name.localeCompare(a.name);
      }

      return 0;
    });

    setShownItems(sortedItems);
  };

  const sortItemsByPrice = (direction: ISortDirection) => {
    if (!shownItems) return;

    const sortedItems = shownItems.slice().sort((a, b) => {
      if (direction === "asc") {
        return a.price - b.price;
      } else if (direction === "desc") {
        return b.price - a.price;
      }

      return 0;
    });

    setShownItems(sortedItems);
  };

  return {
    itemsList,
    shownItems,
    updateItemsList,
    filterItemsByName,
    filterItemsByPrice,
    sortItemsByName,
    sortItemsByPrice,
  };
};

export default useItems;
