import BaseIcon from '@/components/BaseIcon'
import { mdiMinus, mdiPlus } from '@mdi/js'
import { useState } from 'react'
import AsideMenuItem, { AsideMenuItemType } from './AsideMenuItem'

const AsideMenuList = (props: { items: AsideMenuItemType[]; className?: string }) => {
  const { items, className } = props

  return (
    <ul className={`${className}`}>
      {items.map(item => (
        <AsideMenuItem item={item} key={item.key} />
      ))}
    </ul>
  )
}

export default AsideMenuList
