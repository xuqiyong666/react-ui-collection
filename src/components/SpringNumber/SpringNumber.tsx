
import { useEffect } from 'react'
import { useSpring, animated, config } from '@react-spring/web'

export interface SpringNumberProps {
  number: number
  wrapClassName?: string
  wrapStyle?: object | undefined
}

export default function SpringNumber(props: SpringNumberProps) {
  const { number, wrapClassName, wrapStyle } = props

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
    <AnimatedSpan className={wrapClassName} style={wrapStyle}>
      {springProps.number.to(x => x.toFixed(0))}
    </AnimatedSpan>
  )
}