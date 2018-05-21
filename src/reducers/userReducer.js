// updsate the state when an action happens

const initialState = {
  name: 'Ray',
  age: 0,
  address: ''
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case '':
      return {}

    default:
      return state
  }
}

export default userReducer
