'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import Welcome from './index'
import Menu from '../Menu'

const routeConfiguration = {
  Welcome: { screen: Welcome },
  Menu: { screen: Menu }
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'Welcome'
}

export const NavigatorWelcome = StackNavigator(routeConfiguration,stackNavigatorConfiguration)