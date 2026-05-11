import { font, fontWeight } from '@styles/fonts/font';

// 기본 폰트, line-height, letter-spacing 설정
const baseTypography = {
  fontFamily: font.pretendard,
  lineHeight: '150%',
  letterSpacing: '-0.02em',
} as const;

export const typography = {
  title_b_24: {
    ...baseTypography,
    fontSize: '24px',
    fontWeight: fontWeight.bold,
  },
  title_b_20: {
    ...baseTypography,
    fontSize: '20px',
    fontWeight: fontWeight.bold,
  },
  title_sb_20: {
    ...baseTypography,
    fontSize: '20px',
    fontWeight: fontWeight.semiBold,
  },
  title_b_18: {
    ...baseTypography,
    fontSize: '18px',
    fontWeight: fontWeight.bold,
  },
  title_sb_18: {
    ...baseTypography,
    fontSize: '18px',
    fontWeight: fontWeight.semiBold,
  },
  body_b_16: {
    ...baseTypography,
    fontSize: '16px',
    fontWeight: fontWeight.bold,
  },
  body_sb_16: {
    ...baseTypography,
    fontSize: '16px',
    fontWeight: fontWeight.semiBold,
  },
  body_m_15: {
    ...baseTypography,
    fontSize: '15px',
    fontWeight: fontWeight.medium,
  },
  body_r_15: {
    ...baseTypography,
    fontSize: '15px',
    fontWeight: fontWeight.regular,
  },
  body_b_14: {
    ...baseTypography,
    fontSize: '14px',
    fontWeight: fontWeight.bold,
  },
  body_m_14: {
    ...baseTypography,
    fontSize: '14px',
    fontWeight: fontWeight.medium,
  },
  body_r_14: {
    ...baseTypography,
    fontSize: '14px',
    fontWeight: fontWeight.regular,
  },
  caption_b_12: {
    ...baseTypography,
    fontSize: '12px',
    fontWeight: fontWeight.bold,
  },
  caption_m_12: {
    ...baseTypography,
    fontSize: '12px',
    fontWeight: fontWeight.medium,
  },
  caption_r_12: {
    ...baseTypography,
    fontSize: '12px',
    fontWeight: fontWeight.regular,
  },
  caption_m_10: {
    ...baseTypography,
    fontSize: '10px',
    fontWeight: fontWeight.medium,
  },
} as const;
