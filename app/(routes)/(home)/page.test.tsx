import AppProviders from "@/app/_provider/AppProviders";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Home from "./page";
import store from "@/app/_redux/store";

const renderWithProviders = (component: React.ReactElement) => {
  return render(<AppProviders>{component}</AppProviders>);
};

describe("HomePage UI functionalities", () => {
  test("should render the item list", async () => {
    renderWithProviders(<Home />);
    await screen.findByTestId("itemsList");
    expect(screen.getByTestId("itemsList")).toBeInTheDocument();
  });

  test("should filter items by name", async () => {
    renderWithProviders(<Home />);
    await screen.findByTestId("itemsList");
    const searchBar = screen.getByTestId("searchBar");
    userEvent.type(searchBar, "Apples");
    await waitFor(() => {
      const itemsList = screen.getByTestId("itemsList");
      expect(screen.getByText("Apples")).toBeInTheDocument();
      expect(itemsList).not.toHaveTextContent("Yogurt");
    });
  });

  test("should sort items by name", async () => {
    renderWithProviders(<Home />);
    await screen.findByTestId("itemsList");
    const sortByNameButton = screen.getByTestId("sortByNameBtn");
    userEvent.click(sortByNameButton);

    await waitFor(() => {
      const itemsList = screen.getByTestId("itemsList");
      const firstItem = itemsList.firstChild as HTMLElement;
      const lastItem = itemsList.lastChild as HTMLElement;
      expect(firstItem).toHaveTextContent("Apples");
      expect(lastItem).toHaveTextContent("Yogurt");
    });
  });

  test("should sort items by price", async () => {
    renderWithProviders(<Home />);
    await screen.findByTestId("itemsList");
    const sortByNameButton = screen.getByTestId("sortByPriceBtn");
    userEvent.click(sortByNameButton);

    await waitFor(() => {
      const itemsList = screen.getByTestId("itemsList");
      const firstItem = itemsList.firstChild as HTMLElement;
      const lastItem = itemsList.lastChild as HTMLElement;
      expect(firstItem).toHaveTextContent("9.95");
      expect(lastItem).toHaveTextContent("24.99");
    });
  });

  test("should add item to the cart", async () => {
    renderWithProviders(<Home />);
    await screen.findByTestId("itemsList");
    await waitFor(() => {
      const itemsList = screen.getByTestId("itemsList");
      const firstItem = itemsList.firstChild as HTMLElement;
      const buttonInFirstItem = firstItem.querySelector('[data-testid="addToCartBtn"]');
      buttonInFirstItem && fireEvent.click(buttonInFirstItem);
    });

    const updatedReduxState = store.getState().cart;
    expect(updatedReduxState.items.length).toEqual(1);
  });
});
