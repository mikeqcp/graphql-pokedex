import { createActions, createReducer } from 'reduxsauce';
import { Record, Map, fromJS } from 'immutable';

export const { Types: PokemonTypes, Creators: PokemonActions } = createActions({
  fetch: ['name'],
  fetchSuccess: ['data'],
}, { prefix: 'POKEMON_' });

const PokemonRecord = new Record({
  data: new Map(),
});

export const INITIAL_STATE = new PokemonRecord({});

const getSuccessHandler = (state = INITIAL_STATE, action) => state.set('data', fromJS(action.data));

export const reducer = createReducer(INITIAL_STATE, {
  [PokemonTypes.FETCH_SUCCESS]: getSuccessHandler,
});
