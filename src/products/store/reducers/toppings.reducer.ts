import * as fromToppings from "../actions/toppings.action";
import { Topping } from "../../models/topping.model";
import { State } from "@ngrx/store/src/state";

export interface ToppingState {
  entities: { [id: number]: Topping };
  loaded: boolean;
  loading: boolean;
}
export const initialState: ToppingState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromToppings.ToppingsAction
): ToppingState {
  switch (action.type) {
    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;

      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping: Topping) => {
          return {
            ...entities,
            [topping.id]: topping
          };
        },
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loaded: true,
        loading: false,
        entities
      };
    }

    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
  }
  return state;
}

export const getToppingEntitiies = (state: ToppingState) => state.entities;
export const getToppingLoaded = (state: ToppingState) => state.loaded;
export const getToppingLoading = (state: ToppingState) => state.loading;
