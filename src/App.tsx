import React, { createContext, useMemo, useState } from 'react'
import BasicLayout from './layouts/BasicLayout'

export const ThemeContext = createContext<{
  theme: 'dark' | 'normal'
  changeTheme: React.Dispatch<React.SetStateAction<'dark' | 'normal'>>
  // @ts-ignore
}>(null)

const App = () => {
  const [theme, setTheme] = useState<'dark' | 'normal'>('normal')

  const value = useMemo(
    () => ({
      theme,
      changeTheme: setTheme
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={value}>
      <BasicLayout className={theme === 'dark' ? 'dark' : ''}>123</BasicLayout>
    </ThemeContext.Provider>
  )
}

export default App
