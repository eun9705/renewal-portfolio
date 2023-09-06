const customMediaQuery = (maxWidth: number) =>
  `@media only screen and (max-width: ${maxWidth}px)`;

export const media = {
  large: customMediaQuery(1441),
  medium: customMediaQuery(1181),
  small: customMediaQuery(821),
  xsmall: customMediaQuery(431),
};