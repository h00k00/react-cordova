import React          from 'react';
import ReactDOM       from 'react-dom';
import { Provider }   from 'react-redux';
import configureStore from './core/store/configureStore';
import App            from './containers/App';

const store = configureStore();

function startApp() {

  ReactDOM.render(
    <Provider store={store}>
      <App/>
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
