
import { useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

export interface SpringNumberProps {
  number: number
  className?: string
  style?: object | undefined
}

export default function SpringNumber(props: SpringNumberProps) {
  const { number, className, style } = props

  const [springProps, api] = useSpring(
    () => ({
      from: { number: 0 },
      to: { number: number },
    }),
    []
  )

  useEffect(() => {
    const _number = number || 0

    setTimeout(() => {
      api.start({
        to: {
          number: _number
        }
      })
    }, 200);
  }, [number])

  const AnimatedSpan = animated('span')

  return (
    <AnimatedSpan className={className} style={style}>
      {springProps.number.to(x => x.toFixed(0))}
    </AnimatedSpan>
  )
}