import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsuarioTypes } from 'store/ducks/usuario';
import { getUserLogin, postUserLogin } from './usuario';

export default function* rootSaga() {
  return yield all([
    takeLatest(UsuarioTypes.GET_LOGIN, getUserLogin),
    takeLatest(UsuarioTypes.POST_LOGIN, postUserLogin),
  ]);
}
