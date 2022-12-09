import BaseIcon from '../BaseIcon'

export interface MenuItemProps {
  icon?: string
  title: string
}

const MenuItem = (props: MenuItemProps) => {
  const { icon, title } = props
  return (
    <div className="flex py-2 px-3 last:border-t last:border-solid last:border-t-slate-200 hover:text-blue-500 dark:border-t-slate-700 dark:hover:text-slate-400">
      {icon && <BaseIcon path={icon} />}
      <span className="px-2">{title}</span>
    </div>
  )
}

export default MenuItem
