import { all, fork } from 'redux-saga/effects';
import maintainersSaga from './maintainers/maintainers.sagas';
import { watchPokemon } from './pokemon/pokemon.sagas';
//<-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
  yield all([
    fork(maintainersSaga),
    fork(watchPokemon),
    //<-- INJECT MODULE SAGA -->
  ]);
}
