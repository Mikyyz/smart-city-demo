import type { FC, ReactNode } from "react";
import { Header } from "./Header";

type ContainerProps = {
  children: ReactNode
}
export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Header title="智慧城市综合管理平台" />
      <div
        style={{
          flex: 1,
          boxSizing: "border-box",
          minHeight: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}
