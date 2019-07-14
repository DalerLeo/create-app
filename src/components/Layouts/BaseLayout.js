import React from 'react'
import {Route} from 'react-router-dom'
import routes from '../../routes'

const BaseLayout = props => {
  return routes.map((route, key) => {
      return (
        <Route
          key={key}
          {...route}
          exact={true}
        />
      )})
}


export default BaseLayout
