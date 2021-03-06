import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
  //data: Pizza[];
  entities:{ [id : number] : Pizza};
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  entities:{},
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
      console.log("LOAD_PIZZAS_SUCCESS");
      console.log(action.payload);
      //const data = action.payload;
      const pizzas = action.payload;

      const entities = newFunction(pizzas, state);

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
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
export const getPizzasEntities = (state: PizzaState) => state.entities;

function newFunction(pizzas: Pizza[], state: PizzaState) {
  const entities = pizzas.reduce((entities: {
    [id: number]: Pizza;
  }, pizza: Pizza) => {
    return {
      ...entities,
      [pizza.id]: pizza,
    };
  }, {
      ...state.entities,
    });
  return entities;
}
