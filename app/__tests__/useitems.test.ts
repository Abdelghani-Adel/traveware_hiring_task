import { renderHook, act } from "@testing-library/react";
import useItems from "../_hooks/useItems";

jest.mock("@/public/data/items.json", () =>
  require("./__mocks__/items.mock.json")
);

describe("itemsList manipulation functions", () => {
  it("should fetch items with the proper structure", async () => {
    const { result } = renderHook(() => useItems());

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
      const { result } = renderHook(() => useItems());

      act(() => {
        result.current.filterItemsByName("a");
      });

      expect(result.current.shownItems[0].name).toMatch(/a/i);
    });

    it("should filter items with non existing item's name", () => {
      const { result } = renderHook(() => useItems());

      act(() => {
        result.current.filterItemsByName("non-exist-name");
      });

      expect(result.current.shownItems).toHaveLength(0);
    });

    it("should filter items with empty string", () => {
      const { result } = renderHook(() => useItems());

      act(() => {
        result.current.filterItemsByName("");
      });

      expect(result.current.shownItems).toHaveLength(5);
    });

    it("should filter items with price range", () => {
      const { result } = renderHook(() => useItems());

      act(() => {
        result.current.filterItemsByPrice(2, 3);
      });

      expect(result.current.shownItems).toHaveLength(2);
    });

    it("should filter with name and price range at the same time", () => {
      const { result } = renderHook(() => useItems());

      act(() => {
        result.current.filterItemsByName("a");
        result.current.filterItemsByPrice(1, 2);
      });

      expect(result.current.shownItems).toHaveLength(2);
      expect(result.current.shownItems[0].name).toMatch(/a/i);
      expect(result.current.shownItems[1].name).toMatch(/a/i);
    });
  });

  describe("Sorting Features", () => {
    it("should sort items by name 'asc'", () => {
      const { result } = renderHook(() => useItems());

      act(() => {
        result.current.sortItemsByName("asc");
      });

      expect(result.current.shownItems[0].name).toMatch(/a/i);
    });

    it("should sort items by name 'desc'", () => {
      const { result } = renderHook(() => useItems());

      act(() => {
        result.current.sortItemsByName("desc");
      });

      expect(result.current.shownItems[0].name).toMatch(/z/i);
    });

    it("should sort items by price 'asc'", () => {
      const { result } = renderHook(() => useItems());

      act(() => {
        result.current.sortItemsByPrice("asc");
      });

      expect(result.current.shownItems[0]).toMatchObject({ price: 1 });
    });

    it("should sort items by price 'desc'", () => {
      const { result } = renderHook(() => useItems());

      act(() => {
        result.current.sortItemsByPrice("desc");
      });

      expect(result.current.shownItems[0]).toMatchObject({ price: 5 });
    });
  });
});
