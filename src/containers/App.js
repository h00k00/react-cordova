import React, { Component }       from 'react';
import { connect }                from 'react-redux';
import { bindActionCreators }     from 'redux';
import injectTapEventPlugin       from 'react-tap-event-plugin';
import getMuiTheme                from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider           from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { HashRouter, Route }      from 'react-router-dom'

/* actions */
import * as uiActionCreators from '../core/actions/actions-ui';

/* application containers */
import Home       from './Home';
import Item1       from './Item1';

injectTapEventPlugin();

const styles = {
  backgroundStyle: {
    boxShadow: '0px 2px 12px rgba(0,0,0,.2)',
    padding: '16px 16px 10px',
    height: '100%'
  }
}

export class App extends Component {
  constructor(props) {
    super(props);
  }

  handleToggle=() => {
    this.props.actions.ui.openNav();
  }

  closeNav=() => {
    this.props.actions.ui.closeNav();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={{height: '100vh'}}>
          <AppBar title="Example"
                  className="app-bar"
                  style={{position: 'fixed', top: '0'}}
                  onLeftIconButtonTouchTap= {this.handleToggle} />
          <Drawer docked={false}
                  disableSwipeToOpen={true}
                  open={this.props.ui.leftNavOpen}
                  onRequestChange={this.closeNav}>
            <MenuItem primaryText="Menu 1"/>
            <MenuItem primaryText="Menu 2"/>
          </Drawer>
          <div style={{marginTop: '64px', height: '100%'}}>
            <Paper zDepth={1} style={styles.backgroundStyle}>
            <HashRouter>
              <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/item1" component={Item1}/>
              </div>
            </HashRouter>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
