import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import { font } from './fonts/font';

import './reset.css';
import { vars } from './theme.css';

globalFontFace('Pretendard', {
  src: 'url("/fonts/PretendardVariable.woff2") format("woff2")',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  fontWeight: '400 700',
});

globalStyle('html, body', {
  margin: 0,
  width: '100vw',
  minHeight: '100vh',
  overflowX: 'hidden',
  overscrollBehaviorY: 'none',
});

globalStyle('body', {
  backgroundColor: vars.color.gray100,
  touchAction: 'manipulation',
  color: vars.color.gray900,
  fontFamily: font.pretendard,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('#root', {
  margin: '0 auto',
  boxShadow: '0 0.8rem 2rem rgba(0, 0, 0, 0.2)',
  backgroundColor: vars.color.white,
  width: '100%',
  minWidth: '375px',
  maxWidth: '430px',
  minHeight: '100dvh',
});
