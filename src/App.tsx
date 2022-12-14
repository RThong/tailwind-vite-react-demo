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

        <div className=" py-6">
          <p className="line-clamp-2">
            Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut
            omnis dolor debitis natus. Voluptas possimus deserunt sit delectus est saepe nihil. Qui
            voluptate possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est quos quos id
            ut molestiae fugit.
          </p>
        </div>

        <div className=" py-6">
          <label className="block">
            <span className="text-gray-700">When is your event?</span>
            <input type="date" className="mt-1 block w-full" />
          </label>
        </div>
      </BasicLayout>
    </ThemeContext.Provider>
  )
}

export default App
