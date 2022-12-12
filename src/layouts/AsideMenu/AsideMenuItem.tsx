import BaseIcon from '@/components/BaseIcon'
import { mdiMinus, mdiPlus } from '@mdi/js'
import { useState } from 'react'
import AsideMenuList from './AsideMenuList'
import { twMerge } from 'tailwind-merge'
// import './index.css'

export interface AsideMenuItemType {
  label: string
  key: string
  icon?: string
  children?: AsideMenuItemType[]
}

const AsideMenuItem = (props: { item: AsideMenuItemType; className?: string }) => {
  const { item, className } = props
  const [visible, setVisible] = useState(false)

  return (
    <li key={item.key} className="text-white">
      <div
        // 外部class将内部同类的class覆盖掉
        // className={twMerge(
        //   `relative flex h-12 cursor-pointer items-center px-4 text-gray-300 hover:text-white`,
        //   className
        // )}
        className={` side_menu_item ${className}`}
        onClick={() => setVisible(_ => !_)}
      >
        {item.icon && <BaseIcon path={item.icon} className="mr-6" />}
        <span>{item.label}</span>

        {item.children && (
          <BaseIcon
            path={visible ? mdiMinus : mdiPlus}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          />
        )}
      </div>
      {item.children && visible && (
        <AsideMenuList
          items={item.children}
          className="block bg-gray-700/50 dark:bg-slate-800/50"
        />
      )}
    </li>
  )
}

export default AsideMenuItem
