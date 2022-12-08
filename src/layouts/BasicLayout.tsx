import React, { ReactNode } from 'react'
import AsideMenu from './AsideMenu'
import FooterBar from './FooterBar'
import NavBar from './NavBar'

const BasicLayout = ({ children, className }: { children: ReactNode; className: string }) => {
  return (
    <div
      className={`${className} min-h-screen w-screen  bg-gray-50 pt-14 pl-60 dark:bg-slate-800 dark:text-slate-100`}
    >
      <NavBar>123</NavBar>
      <AsideMenu>123</AsideMenu>
      {children}
      <FooterBar>123</FooterBar>
    </div>
  )
}

export default BasicLayout
