import { css,CSSProp } from 'styled-components';

interface BreakPoints {
    [key:string]:number;
}

const breakPointsProps:BreakPoints = {
    large:1440,
    medium:1180,
    small:820,
    xsmall:414
}

export const DeviceSize = Object.keys(breakPointsProps).reduce((acc, label) => {
    acc[label] = (literals: TemplateStringsArray, ...args:any[]) => css`
        @media only screen and (max-width: ${breakPointsProps[label]}px) {
            ${css(literals, ...args)};
        }
    `
    return acc
}, {} as Record<keyof typeof breakPointsProps, (literals: TemplateStringsArray, ...args: any[]) => CSSProp>);