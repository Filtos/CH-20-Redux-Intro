// updsate the state when an action happens

const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT_COUNTER':
      return Object.assign({}, state, {
        count: state.count + action.amount
      })

    case 'DECRMENT_COUNTER':
      return Object.assign({}, state, {
        count: state.count - action.amount
      })

    default:
      return state
  }

  // if(action.type === '') {
  //
  // } else {
  //   return state
  // }
}

export default counterReducer
