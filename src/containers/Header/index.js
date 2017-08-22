import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar                 from '../../components/AppBar';

/* actions */
import * as uiActionCreators from '../../core/actions/actions-ui';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleToggle=() => {
    this.props.actions.ui.openNav();
  }

  render() {

    return (
      <div>
        <header>
          <AppBar onLeftIconButtonTouchTap= {this.handleToggle} />
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
