import React, { Component }       from 'react'
import { Link }                   from 'react-router'
import { connect }                from 'react-redux'
import { bindActionCreators }     from 'redux'
import getMuiTheme                from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider           from 'material-ui/styles/MuiThemeProvider'
import AppBar   from 'material-ui/AppBar'
import Drawer   from 'material-ui/Drawer'
import Menu     from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Paper    from 'material-ui/Paper'

/* actions */
import * as uiActionCreators from '../core/actions/actions-ui'

const styles = {
  backgroundStyle: {
    boxShadow: '0px 2px 12px rgba(0,0,0,.2)',
    padding: '16px 16px 10px',
    height: '100%'
  }
}

export class App extends Component {
  constructor(props) {
    super(props)

    if (window.cordova) {
        screen.orientation.lock('portrait');
    }
  }

  handleToggle=() => {
    this.props.actions.ui.openNav()
  }

  closeNav=() => {
    this.props.actions.ui.closeNav()
  }

  render() {
    const { children } = this.props
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
                  <Menu>
                    <MenuItem primaryText="Item 1"
                              href="item1"
                              onTouchTap={() => this.closeNav()}/>
                    <MenuItem primaryText="Item 2"
                              href="item2"
                              onTouchTap={() => this.closeNav()}/>
                  </Menu>
          </Drawer>
          <div style={{marginTop: '64px', height: '100%'}}>
          {children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  ui: state.ui
})


const mapDispatchToProps = dispatch => ({
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
