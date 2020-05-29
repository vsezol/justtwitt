import React, { createContext, useReducer } from 'react'
import { ThemeProvider } from 'styled-components'
import { light, dark } from '../../components/styled/themes'
import { DARK_THEME, LIGHT_THEME } from './actionTypes'

const themeReducer = (theme, action) => {
  switch (action.type) {
    case DARK_THEME:
      return dark
    case LIGHT_THEME:
      return light
    default:
      return theme
  }
}

export const ThemeSwitcherContext = createContext()

export const ThemeSwitcherProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, light)
  return (
    <ThemeSwitcherContext.Provider value={dispatch}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSwitcherContext.Provider>
  )
}
