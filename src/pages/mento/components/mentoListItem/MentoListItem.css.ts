import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css';
import { typography } from '@styles/tokens/typography';

export const container = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottom: `1px solid ${vars.color.gray100}`,
    padding: '1.4rem 1.6rem',
    height: '9.2rem',
  },

  variants: {
    isNotice: {
      true: {
        backgroundColor: vars.color.blue50,
      },
      false: {
        backgroundColor: vars.color.white,
        height: '11.8rem',
      },
    },
  },
});

export const filterRow = style({
  display: 'flex',
  ...typography.caption_m_12,
  alignItems: 'center',
  gap: '0.7rem',
  color: vars.color.gray600,
});

export const divider = style({
  backgroundColor: vars.color.gray200,
  width: '0.1rem',
  height: '0.9rem',
});

export const mainContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const leftInfo = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '0.2rem',
  width: '20.4rem',
});

export const title = style({
  paddingRight: '0.2rem',
  overflow: 'hidden',
  ...typography.body_sb_16,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: vars.color.gray800,
});

export const infoRow = style({
  display: 'flex',
  gap: '0.8rem',
  color: vars.color.gray400,
  ...typography.caption_m_12,
});

export const strongText = style({
  color: vars.color.gray800,
  ...typography.caption_m_12,
});

export const rightInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.6rem 0',
});

export const thumbnail = style({
  display: 'block',
  borderRadius: '0.6rem',
  backgroundColor: vars.color.gray100,
  objectFit: 'cover',
  width: '4.7rem',
  height: '4.6rem',
});

export const commentBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.6rem',
  backgroundColor: vars.color.gray100,
  padding: '0.8rem',
});

export const commentLabel = style({
  color: vars.color.gray400,
  ...typography.caption_m_10,
});
