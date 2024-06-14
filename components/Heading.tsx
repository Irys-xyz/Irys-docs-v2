interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children?: any
}

const useHeading = ({ level }: { level: HeadingProps['level'] }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const HEADING_DEFINITION = {
    1: 'font-bold text-6xl lg:text-7xl tracking-[-.02em]',
    2: 'font-bold text-5xl lg:text-6xl tracking-[-.02em]',
    3: 'font-bold text-4xl lg:text-5xl tracking-[-.02em]',
    4: 'font-bold text-3xl lg:text-4xl tracking-[-.02em]',
    5: 'font-bold text-2xl lg:text-3xl tracking-[-.02em]',
    6: 'font-bold text-lg lg:text-xl tracking-[-.02em]'
  }[level]

  return { Tag, HEADING_DEFINITION }
}

const Heading = ({ level, className, children, ...props }: HeadingProps) => {
  const { Tag, HEADING_DEFINITION } = useHeading({
    level
  })

  return (
    <>
      {/* @ts-ignore */}
      <Tag
        className={`${HEADING_DEFINITION} ${className ? className : ''}`}
        {...props}
      >
        {children}
      </Tag>
    </>
  )
}

export default Heading
