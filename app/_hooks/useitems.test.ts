import { renderHook, act } from "@testing-library/react";
import useItems from "./useItems";

const setupData = () => {
  const { result, rerender } = renderHook(() => useItems());
  act(() => {
    const itemsList = [
      { id: 1, name: "Chocolate", description: "", price: 30 },
      { id: 2, name: "Apples", description: "", price: 10 },
      { id: 3, name: "Appetizers", description: "", price: 15 },
      { id: 4, name: "Bananas", description: "", price: 20 },
      { id: 5, name: "Yogurt", description: "", price: 40 },
    ];
    result.current.updateItemsList(itemsList);
  });

  rerender(() => result.current.itemsList);
  rerender(() => result.current.shownItems);

  return { result, rerender };
};

describe("itemsList manipulation functions", () => {
  it("should fetch items with the proper structure", async () => {
    const { result, rerender } = renderHook(() => useItems());

    rerender(() => result.current.shownItems);

    expect(result.current.shownItems).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          name: expect.any(String),
          description: expect.any(String),
          price: expect.any(Number),
        },
      ])
    );
  });

  describe("Filtering Features", () => {
    it("should filter items with existing item's name", () => {
      const { result } = setupData();

      act(() => {
        result.current.filterItemsByName("Apples");
      });

      expect(result.current.shownItems).toMatchObject([{ name: "Apples" }]);
    });

    it("should filter items with non existing item's name", () => {
      const { result } = setupData();

      act(() => {
        result.current.filterItemsByName("Tomato");
      });

      expect(result.current.shownItems).toEqual([]);
    });

    it("should filter items with empty string", () => {
      const { result } = setupData();

      act(() => {
        result.current.filterItemsByName("");
      });

      expect(result.current.shownItems).toHaveLength(5);
    });

    it("should filter items with price range", () => {
      const { result } = setupData();

      act(() => {
        result.current.filterItemsByPrice(25, 35);
      });

      expect(result.current.shownItems).toMatchObject([{ price: 30 }]);
    });

    it("should filter with name and price range at the same time", () => {
      const { result } = setupData();

      act(() => {
        result.current.filterItemsByName("App");
        result.current.filterItemsByPrice(12, 18);
      });

      expect(result.current.shownItems).toMatchObject([{ name: "Appetizers", price: 15 }]);
    });
  });

  describe("Sorting Features", () => {
    it("should sort items by name 'asc'", () => {
      const { result } = setupData();

      act(() => {
        result.current.sortItemsByName("asc");
      });

      expect(result.current.shownItems[0]).toMatchObject({ name: "Appetizers" });
    });

    it("should sort items by name 'desc'", () => {
      const { result } = setupData();

      act(() => {
        result.current.sortItemsByName("desc");
      });

      expect(result.current.shownItems[0]).toMatchObject({ name: "Yogurt" });
    });

    it("should sort items by price 'asc'", () => {
      const { result } = setupData();

      act(() => {
        result.current.sortItemsByPrice("asc");
      });

      expect(result.current.shownItems[0]).toMatchObject({ price: 10 });
    });

    it("should sort items by price 'desc'", () => {
      const { result } = setupData();

      act(() => {
        result.current.sortItemsByPrice("desc");
      });

      expect(result.current.shownItems[0]).toMatchObject({ price: 40 });
    });
  });
});
