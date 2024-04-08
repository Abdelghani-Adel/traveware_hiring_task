"use client";
import useItems from "@/app/_hooks/useItems";
import ItemList from "./_itemList";
import SearchBar from "./_searchBar";
import SortingActions from "./_sortingActions";
import PriceFilter from "./_priceFilter";

export default function Home() {
  const { shownItems, filterItemsByName, filterItemsByPrice, sortItemsByName, sortItemsByPrice } =
    useItems();

  if (!shownItems) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="container py-4">
        <div className="row g-3">
          <div className="col-12 col-xl-3">
            <div className="d-flex flex-column gap-3">
              <SortingActions sortName={sortItemsByName} sortPrice={sortItemsByPrice} />
              <SearchBar onChange={filterItemsByName} />
              <PriceFilter onPriceChange={filterItemsByPrice} />
            </div>
          </div>

          <div className="col-12 col-xl-9">
            <ItemList data={shownItems} />
          </div>
        </div>
      </div>
    </main>
  );
}
