import actions from './actions';

// Action handlers
const ACTION_HANDLERS = {
  [actions.SIGN_IN_SUCCESS]: (state, action) => {
    return { ...state, user: action.data.user };
  },
  [actions.GET_TIME_ENTRIES_SUCCESS]: (state, action) => {
    return { ...state, tracks: action.data.time_entries };
  },
  [actions.START_TRACKING_SUCCESS]: (state, action) => {
    return { ...state, currentTrack: action.data.time_entry };
  },
  [actions.STOP_TRACKING_SUCCESS]: (state, action) => {
    return {
      ...state,
      tracks: state.tracks.concat([action.data.time_entry]),
      currentTrack: null
    };
  }
};

// Reducer
export const initialState = {
  user: null,
  tracks: [],
  currentTrack: null
};

export const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
