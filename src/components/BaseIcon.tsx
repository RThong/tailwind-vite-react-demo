import { ReactNode } from 'react'

interface BaseIconProps {
  path: string
  w?: string
  h?: string
  size?: string | number | null
  className?: string
  children?: ReactNode
}

const BaseIcon = (props: BaseIconProps) => {
  const { path, w = 'w-6', h = 'h-6', size = null, className = '', children } = props

  const iconSize = size ?? 16

  return (
    <span className={`inline-flex items-center justify-center ${w} ${h} ${className}`}>
      <svg viewBox="0 0 24 24" width={iconSize} height={iconSize} className="inline-block">
        <path fill="currentColor" d={path} />
      </svg>
      {children}
    </span>
  )
}
export default BaseIcon
