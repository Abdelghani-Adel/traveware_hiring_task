import cartSlice, { cartActions } from "@/app/_redux/slices/cartSlice";

const cartItem = { id: 1, name: "Test Item", description: "", price: 10 };

describe("cart slice", () => {
  describe("reducers", () => {
    let initialState = {
      items: [],
      totalPrice: 0,
    };

    beforeEach(() => {
      initialState = {
        items: [],
        totalPrice: 0,
      };
    });

    it("should handle addToCart", () => {
      const action = { type: cartActions.addToCart.type, payload: cartItem };
      const updatedState = cartSlice.reducer(initialState, action);

      expect(updatedState.items.length).toEqual(1);
      expect(updatedState.items[0].id).toEqual(cartItem.id);
      expect(updatedState.items[0].quantity).toEqual(1);
      expect(updatedState.totalPrice).toEqual(cartItem.price);
    });

    it("should handle addToCart when item already exists", () => {
      const action = { type: cartActions.addToCart.type, payload: cartItem };
      const currentState = {
        totalPrice: 10,
        items: [{ ...cartItem, quantity: 1 }],
      };
      const updatedState = cartSlice.reducer(currentState, action);

      expect(updatedState.items.length).toEqual(1);
      expect(updatedState.items[0].quantity).toEqual(2);
      expect(updatedState.totalPrice).toEqual(20);
    });

    it("should handle removeFromCart when quantity is greater than 1", () => {
      const currentState = {
        totalPrice: 20,
        items: [{ ...cartItem, quantity: 2 }],
      };

      const actionRemove = {
        type: cartActions.removeFromCart.type,
        payload: cartItem,
      };

      const updatedState = cartSlice.reducer(currentState, actionRemove);

      expect(updatedState.items.length).toEqual(1);
      expect(updatedState.items[0].quantity).toEqual(1);
      expect(updatedState.totalPrice).toEqual(10);
    });

    it("should handle removeFromCart when quantity is 1", () => {
      const currentState = {
        totalPrice: 10,
        items: [{ ...cartItem, quantity: 1 }],
      };

      const actionRemove = {
        type: cartActions.removeFromCart.type,
        payload: cartItem,
      };
      const updatedState = cartSlice.reducer(currentState, actionRemove);

      expect(updatedState.items.length).toEqual(0);
      expect(updatedState.totalPrice).toEqual(0);
    });
  });
});
