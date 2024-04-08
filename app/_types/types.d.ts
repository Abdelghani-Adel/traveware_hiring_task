type IItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type ISortDirection = "asc" | "desc";

interface ICartItem extends IItem {
  quantity: number;
}
