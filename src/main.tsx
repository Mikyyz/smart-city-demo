import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import autofit from 'autofit.js'  
import './index.module.scss'
import App from './App.tsx'

autofit.init({
dh:1080, // 设计稿高度
dw:1920, // 设计稿宽度
el:"body",// 缩放的目标元素
resize:true,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
