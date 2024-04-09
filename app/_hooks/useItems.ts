import INITIAL_ITEMS from "@/public/data/items.json";
import { useEffect, useState } from "react";

const useItems = () => {
  const [itemsList, setItemsList] = useState<IItem[]>(INITIAL_ITEMS);
  const [shownItems, setShownItems] = useState<IItem[]>(INITIAL_ITEMS);
  const [searchString, setSearchString] = useState("");
  const [priceFilter, setPriceFilter] = useState<[number, number]>();

  useEffect(() => {
    const searchTerm = searchString.toLowerCase();
    let newShownItems = itemsList.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    if (priceFilter) {
      newShownItems = newShownItems.filter(
        (item) => item.price >= priceFilter[0] && item.price <= priceFilter[1]
      );
    }

    setShownItems(newShownItems);
  }, [searchString, priceFilter]);

  const updateItemsList = (newItems: IItem[]) => {
    setItemsList(newItems);
    setShownItems(newItems);
  };

  const filterItemsByName = (searchString: string) => {
    setSearchString(searchString);
  };

  const filterItemsByPrice = (minPrice: number, maxPrice: number) => {
    setPriceFilter([minPrice, maxPrice]);
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
