import React, { createContext, useReducer, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { light, dark, pank } from '../../styled/themes'
import { DARK_THEME, LIGHT_THEME, PANK_THEME } from './actionTypes'

const themeReducer = (theme, action) => {
  localStorage.setItem('THEME', action.type)
  switch (action.type) {
    case DARK_THEME:
      return dark
    case LIGHT_THEME:
      return light
    case PANK_THEME:
      return pank
    default:
      return theme
  }
}

export const ThemeSwitcherContext = createContext()

export const ThemeSwitcherProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, light)
  
  const [themes, setThemes] = useState([
    [LIGHT_THEME, 'Light'],
    [DARK_THEME, 'Dark'],
    [PANK_THEME, 'Pank']
  ])

  const pushUpTheme = (themeType, themes) => {
    const toPushTheme = themes.find(([type]) => type === themeType)
    const newThemes = [...themes].filter(([type]) => type !== themeType)
    newThemes.unshift(toPushTheme)
    return newThemes
  }

  useEffect(() => {
    const storageTheme = localStorage.getItem('THEME')

    if (storageTheme === null) {
      localStorage.setItem('THEME', LIGHT_THEME)
      dispatch({ type: LIGHT_THEME })
    } else {
      localStorage.setItem('THEME', storageTheme)
      setThemes(pushUpTheme(storageTheme, themes))
      dispatch({ type: storageTheme })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemeSwitcherContext.Provider value={{ dispatch, themes }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSwitcherContext.Provider>
  )
}
