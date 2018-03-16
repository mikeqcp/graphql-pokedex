import { put, takeLatest } from 'redux-saga/effects';
import reportError from 'report-error';
import gql from 'graphql-tag';

import { PokemonTypes, PokemonActions } from './pokemon.redux';
import client from './graphql';

function* fetchPokemon({ name }) {
  try {
    const { data } = yield client.query({
      query: gql`
        query getPokemonData($name: String!) {
          pokemon(name:$name) {
            number
            name
            image
            evolutions {
              number
              name
            }
          }
        }
      `,
      variables: { name },
    });
    yield put(PokemonActions.fetchSuccess(data.pokemon));
  } catch (err) {
    reportError(err);
  }
}


export function* watchPokemon() {
  try {
    yield takeLatest(PokemonTypes.FETCH, fetchPokemon);
  } catch (error) {
    /* istanbul ignore next */
    reportError(error);
  }
}
