import { twMerge } from 'tailwind-merge'

const Button = (props: { className?: string }) => {
  const { className } = props

  const internalClass = twMerge(
    `inline-flex cursor-pointer items-center justify-center rounded-full bg-blue-500 px-3 py-1 text-sm text-white`,
    className
  )

  return (
    <div
      // 一般写法
      // className={`inline-flex cursor-pointer items-center justify-center rounded-full bg-blue-500 px-3 py-1 text-sm text-white ${className}`}

      // 注册到组件层，两种方式
      className={`btn ${className}`}

      // 通过tailwind-merge来合并
      // https://dev.to/diogoko/overriding-tailwind-classes-in-react-4po3
      // className={internalClass}
    >
      Button
    </div>
  )
}

export default Button
