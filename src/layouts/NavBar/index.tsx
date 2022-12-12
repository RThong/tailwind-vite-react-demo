import BaseIcon from '@/components/BaseIcon'
import { useContext, useState } from 'react'
import {
  mdiWeatherSunny,
  mdiWeatherNight,
  mdiClockOutline,
  mdiMenu,
  mdiChevronUp,
  mdiLogout,
  mdiCloud,
  mdiCrop,
  mdiAccount,
  mdiCogOutline,
  mdiEmail,
  mdiChevronDown
} from '@mdi/js'
import { ThemeContext } from '@/App'
import Menu from '@/components/Menu'

const avatarImage = `https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93`

const NavBar = () => {
  const { changeTheme, theme } = useContext(ThemeContext)
  console.log(theme)

  const [menuActive, setMenuActive] = useState(false)
  const [userActive, setUserActive] = useState(false)

  return (
    <nav className="  fixed inset-x-0 top-0  flex h-14 w-screen items-center bg-gray-50 pl-60 dark:bg-slate-800 dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-1 items-center">
        <div className=" flex-1 text-slate-400">Search</div>

        <div className="relative cursor-pointer  py-2 px-3 ">
          <div
            className="flex items-center hover:text-blue-500  dark:hover:text-slate-400 "
            onClick={() => setMenuActive(_ => !_)}
          >
            <BaseIcon path={mdiMenu} />

            <span className="px-2">Sample Menu</span>

            <BaseIcon
              path={menuActive ? mdiChevronDown : mdiChevronUp}
              className="hidden transition-colors lg:inline-flex"
            />
          </div>

          <Menu
            active={menuActive}
            menu={[
              {
                icon: mdiClockOutline,
                title: 'Item One'
              },
              {
                icon: mdiCloud,
                title: 'Item Two'
              },

              {
                icon: mdiCrop,
                title: 'Item Last'
              }
            ]}
          />
        </div>

        <div className="relative cursor-pointer py-2 px-3">
          <div
            className="flex items-center hover:text-blue-500  dark:hover:text-slate-400"
            onClick={() => setUserActive(_ => !_)}
          >
            <div className="mr-3 h-6 w-6">
              <img
                src={avatarImage}
                className="block h-auto w-full max-w-full rounded-full bg-gray-100 dark:bg-slate-800"
              />
            </div>

            <span className="px-2">Sample Menu</span>

            <BaseIcon
              path={userActive ? mdiChevronDown : mdiChevronUp}
              className="hidden transition-colors lg:inline-flex"
            />
          </div>

          <Menu
            active={userActive}
            menu={[
              {
                icon: mdiAccount,
                title: 'My Profile'
              },
              {
                icon: mdiCogOutline,
                title: 'Settings'
              },
              {
                icon: mdiEmail,
                title: 'Messages'
              },

              {
                icon: mdiLogout,
                title: 'Log Out'
              }
            ]}
          />
        </div>

        <div
          className="cursor-pointer py-2 px-3 hover:text-blue-500  dark:hover:text-slate-400"
          onClick={() => {
            changeTheme(val => (val === 'dark' ? 'normal' : 'dark'))
          }}
        >
          <div className="flex items-center">
            <BaseIcon path={theme === 'dark' ? mdiWeatherNight : mdiWeatherSunny} size="20" />
          </div>
        </div>

        <div className="cursor-pointer py-2 px-3 hover:text-blue-500  dark:hover:text-slate-400">
          <div className="flex items-center">
            <BaseIcon path={mdiLogout} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
