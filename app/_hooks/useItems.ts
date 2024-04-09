import INITIAL_ITEMS from "@/public/data/items.json";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../_redux/store";
import { loaderActions } from "../_redux/slices/loaderSlice";

const useItems = () => {
  const dispatch = useAppDispatch();
  const [itemsList, setItemsList] = useState<IItem[]>();
  const [shownItems, setShownItems] = useState<IItem[]>();
  const [searchString, setSearchString] = useState("");
  const [priceFilter, setPriceFilter] = useState<[number, number]>();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(loaderActions.showLoadingOverlay());
      const response = await fetch("/data/items.json");
      const result = await response.json();

      setTimeout(() => {
        setItemsList(result);
        setShownItems(result);
        dispatch(loaderActions.hideLoadingOverlay());
      }, 3000);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const searchTerm = searchString.toLowerCase();
    let newShownItems = itemsList?.filter((item) => item.name.toLowerCase().includes(searchTerm));

    if (priceFilter) {
      newShownItems = newShownItems?.filter(
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
