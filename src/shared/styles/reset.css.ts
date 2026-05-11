import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('html, body, #root', {
  minHeight: '100%',
});

globalStyle('body', {
  margin: 0,
});

globalStyle('button, input, textarea, select', {
  font: 'inherit',
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

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});
