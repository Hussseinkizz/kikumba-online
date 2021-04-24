import { useState, useEffect, useDebugValue } from 'react'

export default function useThemeMode({theme}) {
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    setThemeMode(theme ? 'dark' : 'light')
    // localStorage.setItem(mode : currentTheme)

  },[theme])

  useDebugValue(themeMode ?? 'loading...')

  return themeMode;
}


//todo: this hook should get the value from source of truth, app and sets theme in local storage as expected