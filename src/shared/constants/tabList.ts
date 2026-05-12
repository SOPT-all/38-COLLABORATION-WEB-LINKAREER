import type { TabItem } from '@components/tabBar/TabBar';

export const HOME_TABLIST: TabItem[] = [
  { label: '대외활동', value: 'activity', disabled: true },
  { label: '공모전', value: 'contest', disabled: true },
  { label: '신입/인턴', value: 'recruit', hasDot: true },
  { label: '자기소개서', value: 'cover-letter', disabled: true },
  { label: '시험정보', value: 'exam-info', disabled: true },
  { label: '멘토게시판', value: 'mento-board' },
  { label: '커뮤니티', value: 'community', disabled: true },
];

export const RECRUIT_DETAIL_TABLIST: TabItem[] = [
  { label: '상세 내용', value: 'detail' },
  { label: '합격 자료', value: 'pass-data' },
];

export const MENTO_MAIN_TABLIST: TabItem[] = [
  { label: '멘토게시판', value: 'mento-board' },
  { label: '커뮤니티', value: 'community', hasDot: true, disabled: true },
  { label: '시험 정보방', value: 'exam-board', hasDot: true, disabled: true },
  { label: '팀원 모집', value: 'team-recruit', disabled: true },
  {
    label: '대외활동/교육/공모전',
    value: 'activity-education-contest',
    disabled: true,
  },
];

export const MENTO_CARTEGORY_TABLIST: TabItem[] = [
  { label: '대기업 멘토', value: 'corporate-mentor' },
  { label: '꿀팁 게시판', value: 'tips-board' },
  { label: '대학생 게시판', value: 'college-board' },
  { label: '직장인 게시판', value: 'worker-board' },
];
