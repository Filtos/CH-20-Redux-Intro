// { type: 'INCREMEN T', count, name}

const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const incrementCounter = (amount) => {
  return {
    type: INCREMENT_COUNTER,
    amount
  }
}

const DECRMENT_COUNTER = 'DECRMENT_COUNTER'
export const decrementCounter = (amount) => {
  return {
    type: DECRMENT_COUNTER,
    amount
  }
}
