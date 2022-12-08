import BaseIcon from '@/components/BaseIcon'
import React, { useContext } from 'react'
import {
  mdiWeatherSunny,
  mdiWeatherNight,
  mdiBackburger,
  mdiForwardburger,
  mdiClose,
  mdiDotsVertical,
  mdiClockOutline,
  mdiMenu,
  mdiChevronUp,
  mdiChevronDown
} from '@mdi/js'
import { ThemeContext } from '@/App'

const NavBar = () => {
  const { changeTheme, theme } = useContext(ThemeContext)
  console.log(theme)

  const avatarImage = `https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93`

  return (
    <nav className="transition-position fixed inset-x-0  top-0 z-30 flex h-14 w-screen items-center bg-gray-50 pl-60 dark:bg-slate-800">
      <div className="mx-auto flex max-w-6xl items-center">
        <div className="cursor-pointer py-2 px-3 hover:text-blue-500">
          <div className="flex items-center">
            <BaseIcon path={mdiMenu} />

            <span className="px-2">Sample Menu</span>

            <BaseIcon path={mdiChevronUp} className="hidden transition-colors lg:inline-flex" />
          </div>
        </div>

        <div className="cursor-pointer py-2 px-3 hover:text-blue-500">
          <div className="flex items-center">
            <div className="mr-3 h-6 w-6">
              <img
                src={avatarImage}
                className="block h-auto w-full max-w-full rounded-full bg-gray-100 dark:bg-slate-800"
              />
            </div>

            <span className="px-2">Sample Menu</span>

            <BaseIcon path={mdiChevronUp} className="hidden transition-colors lg:inline-flex" />
          </div>
        </div>

        <div
          className="cursor-pointer py-2 px-3 hover:text-blue-500"
          onClick={() => {
            changeTheme(val => (val === 'dark' ? 'normal' : 'dark'))
          }}
        >
          <div className="flex items-center">
            <BaseIcon path={theme === 'dark' ? mdiWeatherNight : mdiWeatherSunny} size="24" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
