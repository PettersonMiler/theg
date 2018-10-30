import { call, put } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { Creators as UsuarioActions } from 'store/ducks/usuario';

export function* getUserLogin(action) {
  try {
    const auth = firebase.auth();
    const result = yield call(
      [auth, auth.signInAndRetrieveDataWithEmailAndPassword],
      action.payload.login,
      action.payload.senha,
    );
    console.tron.log('getUserLogin');
    console.tron.log(result.user.uid);
    const user = firebase.database().ref(`users/${result.user.uid}`);
    console.tron.log(user);
    user.once('value').then((snapshot) => {
      console.tron.log('snapshot');
      const snap = snapshot.val();
      console.tron.log(snap);
    });

    yield put(UsuarioActions.userLoginSuccess(result));
  } catch (err) {
    console.tron.log('erro saga');
    console.tron.log(err);
    yield put(UsuarioActions.userLoginFailed(err.code));
  }
}

export function* postUserLogin(action) {
  try {
    const create = firebase.auth();
    const result = yield call(
      [create, create.createUserAndRetrieveDataWithEmailAndPassword],
      action.payload.login,
      action.payload.senha,
    );

    firebase.database().ref(`users/${result.user.uid}`).set({
      nome: action.payload.user.nome,
      user: action.payload.user.user,
      email: action.payload.user.email,
      cpf: action.payload.user.cpf,
      nascimento: action.payload.user.nascimento,
      guia: action.payload.user.guia,
      turista: action.payload.user.turista,
    });

    yield put(UsuarioActions.userLoginSuccess(result));
  } catch (err) {
    console.tron.log('erro saga');
    console.tron.log(err);
    yield put(UsuarioActions.userLoginFailed(err.code));
  }
}

