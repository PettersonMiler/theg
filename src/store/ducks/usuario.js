import Immutable from 'seamless-immutable';

export const Types = {
  GET_LOGIN: 'usuario/GET_LOGIN',
  LOGIN_SUCCESS: 'usuario/LOGIN_SUCCESS',
  LOGIN_FAILED: 'usuario/LOGIN_FAILED',
  POST_LOGIN: 'usuario/POST_LOGIN',
};

const initialState = Immutable({
  data: {},
  user: {},
  erro: '',
  loading: false,
});

export default function Usuario(state = initialState, action) {
  console.tron.log('reducer');
  console.tron.log(action.payload);
  switch (action.type) {
    case Types.GET_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        erro: '',
        loading: false,
      };
    case Types.LOGIN_FAILED:
      return {
        ...state,
        data: {},
        erro: action.payload.erro,
        loading: false,
      };
    case Types.POST_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        loading: true,
      };
    default:
      return state;
  }
}

export const Creators = {
  getUserLogin: (login, senha) => ({
    type: Types.GET_LOGIN,
    payload: {
      login,
      senha,
    },
  }),
  userLoginSuccess: data => ({
    type: Types.LOGIN_SUCCESS,
    payload: {
      data,
    },
  }),
  userLoginFailed: erro => ({
    type: Types.LOGIN_FAILED,
    payload: { erro },
  }),
  postUserLogin: (login, senha, user) => ({
    type: Types.POST_LOGIN,
    payload: {
      login,
      senha,
      user,
    },
  }),
};
