import { createStore } from "react-hooks-global-state";
import Product from "../components/Product";

interface iProduct {
  name: string;
  id: string;
  price: string;
  src: string;
}

interface AppState {
  data: iProduct[];
  liked: iProduct[];
}

const initialState: AppState = {
  data: [],
  liked: [],
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "add":
      return { ...state, liked: [...state.liked, action.product] };
    case "delete":
      return {
        ...state,
        liked: state.liked.filter(
          (product: iProduct) => product.id !== action.productId
        ),
      };
    case "setData":
      return { ...state, data: [...action.data] }; // Додати товар до корзини
    default:
      return state;
  }
};

export const { dispatch, useStoreState } = createStore(reducer, initialState);
