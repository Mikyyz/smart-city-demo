import type { FC, ReactNode } from "react"
import { BorderBox } from "./BorderBox"

type PanelProps = {
  title: string
  children: ReactNode
  height?: number | string
}
export const Panel: FC<PanelProps> = ({ title, children, height = 360 }) => {
  return (
    <BorderBox height={height} width="100%" title={title}>
      <div style={{ padding: "60px 18px 18px", boxSizing: "border-box", height: "100%" }}>
        {children}
      </div>
    </BorderBox>
  )
}
