import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle(
  `html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video`,
  {
    margin: 0,
    border: 0,
    padding: 0,
    verticalAlign: 'baseline',
    font: 'inherit',
    fontSize: '100%',
  },
);

globalStyle(
  `article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section`,
  {
    display: 'block',
  },
);

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('html, body, #root', {
  minHeight: '100%',
});

globalStyle('body', {
  lineHeight: 1,
});

globalStyle('button, input, textarea, select', {
  font: 'inherit',
  WebkitTapHighlightColor: 'transparent',
});

globalStyle('button, input', {
  border: 0,
  background: 'none',
  cursor: 'pointer',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('ol, ul', {
  listStyle: 'none',
});

globalStyle('blockquote, q', {
  quotes: 'none',
});

globalStyle('blockquote::before, blockquote::after, q::before, q::after', {
  content: "''",
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});
