import { observable, action } from "mobx";
import { createStore } from 'redux'

/* redux */
const ADD_ACTION = 'ADD'
const add = (num) => {
  return {
    type: ADD_ACTION,
    num
  }
}

const initialState = {
  count: 0,
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return Object.assign({}, state, {
        count: state.count + action.num
      })
    default:
      return state
  }
}

const reduxStore = createStore(reducers)
reduxStore.dispatch(add(1))

const reduxStore = createStore(reducers)
reduxStore.dispatch(add(1))

/* mobox */
const mobxStore = observable({
  count: 0,
  add: action(function(num) {
    this.count += num
  })
})
mobxStore.add(1)
// mobxStore.count += 1 mobx可随意修改

