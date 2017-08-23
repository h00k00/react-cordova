import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import Item1 from './containers/Item1'

export default  <Route path="/" component={App}>
  <Route path="/:home"
         component={Home} />
  <Route path="/:item1"
         component={Item1} />
</Route>
