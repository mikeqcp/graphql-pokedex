import { expect } from 'chai';
import { fromJS } from 'immutable';

import {
  reducer as pokemonReducer,
  PokemonActions,
  PokemonTypes,
} from '../pokemon.redux';


describe('Pokemon: redux', () => {
  const state = fromJS({
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(pokemonReducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
    });

    it('should return state on unknown action', () => {
      expect(pokemonReducer(state, { type: 'unknown-action' }).toJS()).to.deep.equal(state.toJS());
    });
  });
});
