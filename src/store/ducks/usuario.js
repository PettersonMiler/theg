import Immutable from 'seamless-immutable';

export const Types = {
  POST: 'usuario/POST',
};

const initialState = Immutable({
  data: [],
});

export default function Usuario(state = initialState, action) {
  switch (action.type) {
    case Types.POST:
      return { ...state };
    default:
      return state;
  }
}

export const Creators = {
  usuarioPost: data => ({
    type: Types.POST,
    payload: { data },
  }),

};
