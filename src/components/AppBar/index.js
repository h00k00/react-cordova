/**
 * AppBar
 */

import React                   from 'react';
import { AppBar as MuiAppBar } from 'material-ui';

export default function AppBar(props) {
  return (
    <div>
      <MuiAppBar {...props} className="app-bar" />
    </div>
  );
}
