import AsideMenuList from './AsideMenuList'
import { mdiMonitor, mdiTable, mdiLogout } from '@mdi/js'
import AsideMenuItem from './AsideMenuItem'

const AsideMenu = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-60 py-2 pl-2">
      <div className="flex h-full flex-col overflow-hidden rounded-xl bg-gray-800 dark:bg-slate-900">
        <div className="flex h-14 items-center  bg-gray-900 font-black text-white dark:bg-slate-900 ">
          <p className="flex-1 text-center">Header</p>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <AsideMenuList
            items={[
              { label: '菜单项一', key: 'item-1', icon: mdiMonitor }, // 菜单项务必填写 key
              { label: '菜单项二', key: 'item-2', icon: mdiTable },
              {
                label: '子菜单',
                key: 'submenu',
                children: [{ label: '子菜单项', key: 'submenu-item-1' }]
              },
              { label: '菜单项四', key: 'item-4', icon: mdiTable }
            ]}
          />
        </div>
        <ul>
          <AsideMenuItem
            className=" border-blue-600 bg-blue-600  text-white ring-blue-300 hover:border-blue-700 hover:bg-blue-700 dark:border-blue-500 dark:bg-blue-500 dark:ring-blue-700 hover:dark:border-blue-600 hover:dark:bg-blue-600"
            item={{
              label: 'Logout',
              icon: mdiLogout,
              key: 'Logout'
            }}
          />
        </ul>
      </div>
    </aside>
  )
}

export default AsideMenu
