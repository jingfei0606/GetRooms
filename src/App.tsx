import React from 'react'
import { Provider } from "react-redux"
// import { store } from "./redux/store"
import { store } from './states/store'
import Navigator from './navigations'

const App = () =>
  <Provider store={store}>
    <Navigator />
  </Provider>

export default App
