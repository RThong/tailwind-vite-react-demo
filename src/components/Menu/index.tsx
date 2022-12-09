import MenuItem, { MenuItemProps } from './MenuItem'

export interface MenuProps {
  menu: MenuItemProps[]
  active: boolean
}

const Menu = (props: MenuProps) => {
  const { menu, active } = props
  return (
    <div
      className={`${
        active ? 'block' : 'hidden'
      } absolute left-0 top-full w-full rounded  border border-solid border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800`}
    >
      {menu.map(item => (
        <MenuItem key={item.title} {...item} />
      ))}
    </div>
  )
}

export default Menu
