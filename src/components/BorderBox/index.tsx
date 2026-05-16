import {
  forwardRef,
  useLayoutEffect,
  useImperativeHandle,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import styles from "./index.module.scss";

const DESIGN_WIDTH = 740;
const DESIGN_HEIGHT = 397;
const TITLE_X = 64;
const TITLE_Y = 28;
const TITLE_FONT_SIZE = 28;
const MIN_TITLE_FONT_SIZE = 18;

type BorderBoxProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  width?: number | string;
  height?: number | string;
  color?: string[];
  backgroundColor?: string;
  title?: string;
};

export const BorderBox = forwardRef<HTMLDivElement, BorderBoxProps>(
  function BorderBox(
    { children, className, style, width = "100%", height = "100%", title },
    ref,
  ) {
    const domRef = useRef<HTMLDivElement>(null);
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useImperativeHandle(ref, () => domRef.current as HTMLDivElement, []);

    useLayoutEffect(() => {
      const node = domRef.current;

      if (!node) {
        return;
      }

      const updateSize = () => {
        const { width: nextWidth, height: nextHeight } =
          node.getBoundingClientRect();

        setBoxSize((prevSize) => {
          if (
            prevSize.width === nextWidth &&
            prevSize.height === nextHeight
          ) {
            return prevSize;
          }

          return { width: nextWidth, height: nextHeight };
        });
      };

      updateSize();

      const observer = new ResizeObserver(updateSize);
      observer.observe(node);

      return () => observer.disconnect();
    }, []);

    const titleScaleX = boxSize.width / DESIGN_WIDTH || 1;
    const titleScaleY = boxSize.height / DESIGN_HEIGHT || 1;
    const titleStyle: CSSProperties = {
      left: TITLE_X * titleScaleX,
      top: TITLE_Y * titleScaleY,
      fontSize: Math.max(
        MIN_TITLE_FONT_SIZE,
        Math.min(TITLE_FONT_SIZE, TITLE_FONT_SIZE * titleScaleX),
      ),
    };

    const rootStyle: CSSProperties = {
      position: "relative",
      width,
      height,
      overflow: "hidden",
      ...style,
    };

    return (
      <div
        className={[styles.borderBox, className].filter(Boolean).join(" ")}
        style={rootStyle}
        ref={domRef}
      >
        <svg
          className={styles.boxFrame}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 740 397"
          preserveAspectRatio="none"
          fill="none"
        >
          <mask
            id="mask0_3_6"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="9"
            y="17"
            width="715"
            height="359"
          >
            <path
              d="M21.0168 17H706.976L724 34V359L706.976 376H22.0182L9 363V30L21.0168 17Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_3_6)">
            <path
              opacity="0.92"
              d="M21.0168 17H706.976L724 34V359L706.976 376H22.0182L9 363V30L21.0168 17Z"
              fill="#020B1B"
            />
            <path
              d="M21.0168 17H706.976L724 34V359L706.976 376H22.0182L9 363V30L21.0168 17Z"
              fill="url(#paint0_linear_3_6)"
            />
            <g filter="url(#filter0_d_3_6)">
              <path
                d="M21.0168 17H706.976L724 34V359L706.976 376H22.0182L9 363V30L21.0168 17Z"
                fill="url(#paint1_radial_3_6)"
                shape-rendering="crispEdges"
              />
            </g>
            <path
              opacity="0.42"
              d="M15.0084 73H724V126H15.0084V73Z"
              fill="url(#paint2_linear_3_6)"
            />
            <g filter="url(#filter1_d_3_6)">
              <path
                d="M9 72H366.327C372 72 377.337 72 385.898 65.0598C402.823 51.3409 407.36 16.3617 424.88 15.71C407.402 15.803 170.283 17.123 21.5132 17.5932L9 28.8718V72Z"
                fill="url(#paint3_linear_3_6)"
                fill-opacity="0.2"
                shape-rendering="crispEdges"
              />
              <path
                d="M424.88 15.71C407.36 16.3617 402.823 51.3409 385.898 65.0598C377.337 72 372 72 366.327 72H9V28.8718L21.5132 17.5932C170.283 17.123 407.402 15.803 424.88 15.71ZM424.88 15.71C425.828 15.705 475.693 14 474.993 14C474.861 14 425.017 15.7049 424.88 15.71Z"
                stroke="url(#paint4_linear_3_6)"
                stroke-opacity="0.21"
                shape-rendering="crispEdges"
              />
            </g>
          </g>
          <path d="M371 17H23.4256L10 31V72" stroke="black" />
          <g opacity="0.78" filter="url(#filter2_f_3_6)">
            <path
              d="M22 17H707L724 34V359L707 376H23L10 363V30L22 17Z"
              stroke="#005EA9"
              stroke-opacity="0.42"
              stroke-width="3"
            />
          </g>
          <path
            d="M22 17H707L724 34V359L707 376H23L10 363V30L22 17Z"
            stroke="#021B3E"
            stroke-opacity="0.92"
            stroke-width="2"
          />
          <path
            d="M22 17H707L724 34V359L707 376H23L10 363V30L22 17Z"
            stroke="url(#paint5_linear_3_6)"
            stroke-width="1.1"
          />
          <g filter="url(#filter3_i_3_6)">
            <mask id="path-12-inside-1_3_6" fill="white">
              <path d="M360 17H707L724 34V78" />
            </mask>
            <path
              d="M360 15.95C359.42 15.95 358.95 16.4201 358.95 17C358.95 17.5799 359.42 18.05 360 18.05V17V15.95ZM707 17L707.742 16.2575L707.435 15.95H707V17ZM724 34H725.05V33.5651L724.742 33.2575L724 34ZM722.95 78C722.95 78.5799 723.42 79.05 724 79.05C724.58 79.05 725.05 78.5799 725.05 78H724H722.95ZM360 17V18.05H707V17V15.95H360V17ZM707 17L706.258 17.7425L723.258 34.7425L724 34L724.742 33.2575L707.742 16.2575L707 17ZM724 34H722.95V78H724H725.05V34H724Z"
              fill="url(#paint6_linear_3_6)"
              fill-opacity="0.72"
              mask="url(#path-12-inside-1_3_6)"
            />
            <mask id="path-14-inside-2_3_6" fill="white">
              <path d="M10 30L22 17Z" />
            </mask>
            <path
              d="M9.33868 29.3895C9.00153 29.7548 9.02431 30.3242 9.38955 30.6613C9.75479 30.9985 10.3242 30.9757 10.6613 30.6105L10 30L9.33868 29.3895ZM22.6613 17.6105C22.9985 17.2452 22.9757 16.6758 22.6105 16.3387C22.2452 16.0015 21.6758 16.0243 21.3387 16.3895L22 17L22.6613 17.6105ZM10 30L10.6613 30.6105L22.6613 17.6105L22 17L21.3387 16.3895L9.33868 29.3895L10 30Z"
              fill="#8BFFFF"
              fill-opacity="0.72"
              mask="url(#path-14-inside-2_3_6)"
            />
          </g>
          <path
            d="M724 102V296"
            stroke="#0D64BF"
            stroke-opacity="0.34"
            stroke-width="0.85"
          />
          <path
            d="M10 103V298"
            stroke="#0D64BF"
            stroke-opacity="0.32"
            stroke-width="0.85"
          />
          <path
            d="M94 17H346"
            stroke="#0B5EBA"
            stroke-opacity="0.48"
            stroke-width="0.8"
          />
          <path
            d="M392 17H691"
            stroke="#0B5EBA"
            stroke-opacity="0.36"
            stroke-width="0.8"
          />
          <path
            d="M92 376H646"
            stroke="#0A5BA9"
            stroke-opacity="0.36"
            stroke-width="0.85"
          />
          <g filter="url(#filter4_i_3_6)">
            <path
              d="M707.15 16.8529L723.85 34.147"
              stroke="url(#paint7_linear_3_6)"
              stroke-linecap="round"
            />
          </g>
          <g filter="url(#filter5_i_3_6)">
            <path
              d="M724.216 359.218L707 375.999"
              stroke="url(#paint8_linear_3_6)"
              stroke-linecap="round"
            />
          </g>
          <g filter="url(#filter6_i_3_6)">
            <path
              d="M9.24976 361.987L22.9962 376.222"
              stroke="url(#paint9_linear_3_6)"
              stroke-linecap="round"
            />
          </g>
          <g filter="url(#filter7_i_3_6)">
            <path
              d="M9.09167 31.0312L22.1958 16.9933"
              stroke="url(#paint10_linear_3_6)"
              stroke-linecap="round"
            />
          </g>
          <path
            d="M346 17L393 17"
            stroke="url(#paint11_linear_3_6)"
            stroke-linecap="round"
          />
          <path
            d="M378 70C385.385 68.2717 395.115 56.3043 403 40.5C414.754 16.9393 418 17 420 17"
            stroke="url(#paint12_linear_3_6)"
            stroke-opacity="0.4"
            stroke-linecap="round"
          />
          <defs>
            <filter
              id="filter0_d_3_6"
              x="5"
              y="17"
              width="723"
              height="367"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3_6"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3_6"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_3_6"
              x="4.5"
              y="13.5"
              width="474.822"
              height="67"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3_6"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3_6"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_f_3_6"
              x="2.1"
              y="9.1"
              width="729.8"
              height="374.8"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="3.2"
                result="effect1_foregroundBlur_3_6"
              />
            </filter>
            <filter
              id="filter3_i_3_6"
              x="10"
              y="17"
              width="714"
              height="61"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3.2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_3_6"
              />
            </filter>
            <filter
              id="filter4_i_3_6"
              x="706.65"
              y="16.3529"
              width="17.7007"
              height="22.2941"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_3_6"
              />
            </filter>
            <filter
              id="filter5_i_3_6"
              x="706.5"
              y="358.718"
              width="18.2162"
              height="21.7811"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_3_6"
              />
            </filter>
            <filter
              id="filter6_i_3_6"
              x="8.74976"
              y="361.487"
              width="14.7464"
              height="19.2348"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_3_6"
              />
            </filter>
            <filter
              id="filter7_i_3_6"
              x="8.59167"
              y="16.4933"
              width="14.1041"
              height="19.038"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_3_6"
              />
            </filter>
            <linearGradient
              id="paint0_linear_3_6"
              x1="24.021"
              y1="28"
              x2="720.62"
              y2="368.769"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#082B68" stop-opacity="0.96" />
              <stop offset="0.19" stop-color="#062452" stop-opacity="0.88" />
              <stop offset="0.5" stop-color="#041936" stop-opacity="0.78" />
              <stop offset="0.78" stop-color="#03142B" stop-opacity="0.84" />
              <stop offset="1" stop-color="#061F4C" stop-opacity="0.94" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_3_6"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(454.341 283.507 -104.54 167.065 133.174 48)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0B64C7" stop-opacity="0.28" />
              <stop offset="0.36" stop-color="#063A86" stop-opacity="0.15" />
              <stop offset="1" stop-color="#020A18" stop-opacity="0" />
            </radialGradient>
            <linearGradient
              id="paint2_linear_3_6"
              x1="15.0084"
              y1="18"
              x2="15.0084"
              y2="72"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1EB8FF" stop-opacity="0.22" />
              <stop offset="0.58" stop-color="#0D55B5" stop-opacity="0.08" />
              <stop offset="1" stop-color="#01122C" stop-opacity="0.46" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_3_6"
              x1="475"
              y1="43"
              x2="9"
              y2="43"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#072559" />
              <stop offset="0.5" stop-color="#082552" />
              <stop offset="0.75" stop-color="#082147" />
              <stop offset="1" stop-color="#081B37" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_3_6"
              x1="9"
              y1="43.0634"
              x2="475.426"
              y2="43.0634"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#13DFFF" />
              <stop offset="1" stop-color="#8BFFFF" stop-opacity="0.72" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_3_6"
              x1="9"
              y1="17"
              x2="724"
              y2="376"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0B83F6" stop-opacity="0.42" />
              <stop offset="0.42" stop-color="#064681" stop-opacity="0.22" />
              <stop offset="0.72" stop-color="#0B6BD0" stop-opacity="0.34" />
              <stop offset="1" stop-color="#0EF0FF" stop-opacity="0.42" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_3_6"
              x1="9"
              y1="18"
              x2="724"
              y2="376"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1CF4FF" />
              <stop offset="0.08" stop-color="#0C83F8" />
              <stop offset="0.25" stop-color="#0753AE" />
              <stop offset="0.45" stop-color="#064887" stop-opacity="0.54" />
              <stop offset="0.7" stop-color="#0967C7" stop-opacity="0.72" />
              <stop offset="0.9" stop-color="#13DFFF" />
              <stop offset="1" stop-color="#6DFFFF" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_3_6"
              x1="715.648"
              y1="17.0013"
              x2="715.352"
              y2="33.9987"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#05477C" />
              <stop offset="0.25" stop-color="#1CF4FF" />
              <stop offset="0.375" stop-color="#1CF4FF" />
              <stop offset="0.4375" stop-color="#1CF4FF" />
              <stop offset="0.5" stop-color="#1CF4FF" />
              <stop offset="1" stop-color="#064B7A" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_3_6"
              x1="724.107"
              y1="367.717"
              x2="707.109"
              y2="367.499"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#05477C" />
              <stop offset="0.25" stop-color="#1CF4FF" />
              <stop offset="0.375" stop-color="#1CF4FF" />
              <stop offset="0.4375" stop-color="#1CF4FF" />
              <stop offset="0.5" stop-color="#1CF4FF" />
              <stop offset="1" stop-color="#064B7A" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_3_6"
              x1="16.2451"
              y1="362.109"
              x2="16.0009"
              y2="376.1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#05477C" />
              <stop offset="0.25" stop-color="#1CF4FF" />
              <stop offset="0.375" stop-color="#1CF4FF" />
              <stop offset="0.4375" stop-color="#1CF4FF" />
              <stop offset="0.5" stop-color="#1CF4FF" />
              <stop offset="1" stop-color="#064B7A" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_3_6"
              x1="8.85821"
              y1="24.2457"
              x2="22.4293"
              y2="23.7788"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#05477C" />
              <stop offset="0.25" stop-color="#1CF4FF" />
              <stop offset="0.375" stop-color="#1CF4FF" />
              <stop offset="0.4375" stop-color="#1CF4FF" />
              <stop offset="0.5" stop-color="#1CF4FF" />
              <stop offset="1" stop-color="#064B7A" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_3_6"
              x1="369.5"
              y1="17"
              x2="369.5"
              y2="18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#05477C" />
              <stop offset="1" stop-color="#064B7A" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_3_6"
              x1="398.525"
              y1="17"
              x2="398.525"
              y2="70.5824"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#153C58" stop-opacity="0.21" />
              <stop offset="0.125" stop-color="#1898AC" stop-opacity="0.5" />
              <stop offset="0.25" stop-color="#1CF4FF" />
              <stop offset="0.375" stop-color="#1CF4FF" />
              <stop offset="0.4375" stop-color="#1CF4FF" />
              <stop offset="0.5" stop-color="#1CF4FF" />
              <stop offset="1" stop-color="#064B7A" />
            </linearGradient>
          </defs>
        </svg>

        {title ? (
          <div className={styles.boxHeaderTitle} style={titleStyle}>
            <img src={'@/assets/header_rect.png'} />
            <span>{title}</span>
          </div>
        ) : null}

        <div className={styles.boxContent}>{children}</div>
      </div>
    );
  },
);
