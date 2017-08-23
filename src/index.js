import React          from 'react';
import ReactDOM       from 'react-dom';
import { Provider }   from 'react-redux';
import { browserHistory, Router, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';
import injectTapEventPlugin       from 'react-tap-event-plugin';
import configureStore from './core/store/configureStore';
import App            from './containers/App';
import Home            from './containers/Home';
import Item1            from './containers/Item1';
import Item2            from './containers/Item2';
import routes from './routes'

injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store);

function startApp() {

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} >
        <App>
            <Route exact path="/" component={Home}/>
            <Route path="/item1" component={Item1}/>
            <Route path="/item2" component={Item2}/>
        </App>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
}

if (window.cordova){
  console.log('cordova');
  document.addEventListener('deviceready', function() {
    console.log('startapp');
    startApp();
  }, false);
} else {
  console.log('not cordova');
  startApp();
}
