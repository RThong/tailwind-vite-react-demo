import React, { createContext, useMemo, useState } from 'react'
import Button from './components/Button'
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
      <BasicLayout className={theme === 'dark' ? 'dark' : ''}>
        <Button />
        <Button className=" bg-gray-800" />
        <Button className=" bg-red-300" />
      </BasicLayout>
    </ThemeContext.Provider>
  )
}

export default App
