import { createSelector } from 'reselect';

export const selectPokemonDomain = state => state.get('pokemon');

export const selectPokemonData = createSelector(
  selectPokemonDomain,
  state => state.get('data')
);
