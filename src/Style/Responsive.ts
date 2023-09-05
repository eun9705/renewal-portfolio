// import { css,CSSProp } from 'styled-components';

// interface BreakPoints {
//     [key:string]:number;
// }

// const breakPointsProps:BreakPoints = {
//     large:1441,
//     medium:1181,
//     small:821,
//     xsmall:431
// }

// export const DeviceSize = Object.keys(breakPointsProps).reduce((acc, label) => {
//     acc[label] = (literals: TemplateStringsArray, ...args:any[]) => css`
//         @media only screen and (max-width: ${breakPointsProps[label]}px) {
//             ${css(literals, ...args)};
//         }
//     `
//     return acc
// }, {} as Record<keyof typeof breakPointsProps, (literals: TemplateStringsArray, ...args: any[]) => CSSProp>);

const customMediaQuery = (maxWidth: number) =>
  `@media only screen and (max-width: ${maxWidth}px)`;

export const media = {
  large: customMediaQuery(1441),
  medium: customMediaQuery(1181),
  small: customMediaQuery(821),
  xsmall: customMediaQuery(431),
};