import { ReactNode } from 'react'
import AsideMenu from './AsideMenu'
import NavBar from './NavBar'

const BasicLayout = ({ children, className }: { children: ReactNode; className: string }) => {
  return (
    <div
      className={`${className} min-h-screen w-screen  bg-gray-50 pt-14 pl-60 dark:bg-slate-800 dark:text-slate-100`}
    >
      <NavBar />
      <AsideMenu />
      <div className=" mx-auto max-w-6xl">{children}</div>
    </div>
  )
}

export default BasicLayout
