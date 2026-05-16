export const DESIGN_WIDTH = 1920;
export const DESIGN_HEIGHT = 1080;

export const getScale = () => {
  const w = window.innerWidth / DESIGN_WIDTH;
  const h = window.innerHeight / DESIGN_HEIGHT;
  return Math.min(w, h);
}