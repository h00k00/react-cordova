import React, { Component }       from 'react';
import { connect }                from 'react-redux';
import injectTapEventPlugin       from 'react-tap-event-plugin';
import getMuiTheme                from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider           from 'material-ui/styles/MuiThemeProvider';
import { HashRouter, Route }      from 'react-router-dom'

/* application containers */
import Header     from './Header';
import Footer     from './Footer';
import LeftNavBar from './LeftNavBar';
import Home       from './Home';

injectTapEventPlugin();

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Header />
          <div className="container">
            <HashRouter>
              <div>
                <Route exact path="/" component={Home}/>
              </div>
            </HashRouter>
          </div>
          <LeftNavBar />
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(null)(App);
