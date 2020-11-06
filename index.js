const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
  return{
    type:BUY_CAKE,
    info:'First redux action'
  }
}
function buyIceCream(){
  return{
    type:BUY_ICECREAM
  }
}

// (previousState,action) => newstate

// const initialState = {
//   numOfCakes:10,
//   numOfIceCreams:20
// }
const initialCakeState = {numOfCakes:10}
const initialIceCreamState = {numOfIceCreams:20}

const cakeReducer = (state= initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: 
      return {
        ...state,//make a copy of the state object
        numOfCakes: state.numOfCakes - 1 // return the new state
    }
       default: return state
  }
}
const iceCreamReducer = (state= initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: 
      return {
        ...state,//make a copy of the state object
        numOfIceCreams: state.numOfIceCreams - 1 // return the new state
    }
    default: return state
  }
}
const rootReducers =  combineReducers({
  cake:cakeReducer,
  iceCream:iceCreamReducer
})

const store = createStore(rootReducers,applyMiddleware(logger))
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
// unsubscribe()
