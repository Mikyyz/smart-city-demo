import type { FC } from "react"
import styles from "./index.module.scss"


type HeaderProps = {
  title: string
}
export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div className={styles.containerHeader}>
      <span className={styles.headerTitle}>{title}</span>
    </div>
  )
}