
import styles from "./AnimatedTitle.module.scss"

export interface AnimatedTitleProps {
  title: string
  containerClassName?: string
  containerStyle?: object | undefined
}

export default function AnimatedTitle(props: AnimatedTitleProps) {
  const { title, containerClassName, containerStyle } = props

  return (
    <div className={containerClassName} style={containerStyle}>
      <div className={styles.title}>{title}</div>
    </div>
  )
}