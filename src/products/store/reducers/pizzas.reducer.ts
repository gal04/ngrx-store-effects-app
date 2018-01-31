import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  data: [
    {
      "name": "הפיצה של הילה",
      "toppings": [
        {
          "id": 6,
          "name": "mushroom"
        },
        {
          "id": 7,
          "name": "olive"
        },
        {
          "id": 2,
          "name": "bacon"
        },
        {
          "id": 1,
          "name": "anchovy"
        },
        {
          "id": 11,
          "name": "sweetcorn"
        },
        {
          "id": 12,
          "name": "tomato"
        },
        {
          "id": 8,
          "name": "onion"
        }
      ],
      "id": 5
    }
  ],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;