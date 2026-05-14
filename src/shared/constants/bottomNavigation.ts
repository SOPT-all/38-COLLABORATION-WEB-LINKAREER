import SvgIcCalendar2 from '@assets/svg/IcCalendar2';
import SvgIcCalendar2Filled from '@assets/svg/IcCalendar2Filled';
import SvgIcCommunity from '@assets/svg/IcCommunity';
import SvgIcCommunityFilled from '@assets/svg/IcCommunityFilled';
import SvgIcHome from '@assets/svg/IcHome';
import SvgIcHomeFilled from '@assets/svg/IcHomeFilled';
import SvgIcMy from '@assets/svg/IcMy';
import SvgIcMyFilled from '@assets/svg/IcMyFilled';

export const NAV_ITEMS = [
  {
    key: 'home',
    label: '홈',
    path: '/',
    icon: SvgIcHome,
    activeIcon: SvgIcHomeFilled,
  },
  {
    key: 'community',
    label: '커뮤니티',
    path: '/mento',
    icon: SvgIcCommunity,
    activeIcon: SvgIcCommunityFilled,
  },
  {
    key: 'calendar',
    label: '공고달력',
    icon: SvgIcCalendar2,
    activeIcon: SvgIcCalendar2Filled,
  },
  {
    key: 'myPage',
    label: '마이페이지',
    icon: SvgIcMy,
    activeIcon: SvgIcMyFilled,
  },
] as const;
