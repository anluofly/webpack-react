/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'
import App from './views/App'
import appState from './store/app-state'

// ReactDOM.hydrate(<App />, document.getElementById('root'));

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

const root = document.getElementById('root')

const render = (Component) => {
  renderMethod(
    <AppContainer>
      <Provider appState={appState}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default
    // ReactDOM.render(<NextApp/>, document.getElementById('root'));
    // ReactDOM.hydrate(<NextApp/>, document.getElementById('root'));
    render(NextApp)
  })
}
