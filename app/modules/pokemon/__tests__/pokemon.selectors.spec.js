import { expect } from 'chai';
import { fromJS } from 'immutable';

import { selectPokemonDomain } from '../pokemon.selectors';

describe('Pokemon: selectors', () => {
  const state = fromJS({
    pokemon: {

    },
  });

  describe('selectPokemonDomain', () => {
    it('should select a domain', () => {
      expect(selectPokemonDomain(state)).to.equal(state.get('pokemon'));
    });
  });
});
