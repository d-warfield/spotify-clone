export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,

// //REMOVE after finished developing
//   token: 'BQC1Wjf-SjlaIkiSBVoGghHdad7tGcWmMaTH2cMT96bCrKjF1ZQCxlpUq_LtEDrPKnkTcj59KYMfyhA3D3bxXRhpOBalLEsOj2Gr6VUbt3lxyGd-uHSQvWOZ5wPnQ6JafrfpY4h4f7xME9HfjVcifk340bGZPOa8otq_0agoe3Pq11KV'
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
      case 'SET_TOKEN':
        return {
          ...state,
          token: action.token
        };

      case 'SET_PLAYLIST':
        return {
          ...state,
          playlists: action.playlists,
        };

      case 'SET_DISCOVER_WEEKLY':
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };

        default:
          return state;
        };
      
      
        


}

export default reducer;