import SagaTester from 'redux-saga-tester';
import { expect } from 'chai';
import { fromJS } from 'immutable';

import mockApi from '../../../utils/mockApi';
import { watchPokemon } from '../pokemon.sagas';
import {
  PokemonActions,
  PokemonTypes
} from '../pokemon.redux';

describe('Pokemon: sagas', () => {
  const defaultState = fromJS({});

  const getSagaTester = (initialState = {}) => {
    const sagaTester = new SagaTester({
      initialState: defaultState.mergeDeep(initialState),
    });
    sagaTester.start(watchPokemon);
    return sagaTester;
  };

  it('should implement a test', () => {
    const sagaTester = getSagaTester();

    sagaTester.dispatch(PokemonActions.noop());

    expect(sagaTester.getCalledActions()).to.deep.equal([PokemonActions.noop()]);
  });
});
