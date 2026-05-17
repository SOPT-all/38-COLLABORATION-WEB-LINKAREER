export interface DropdownOption {
  value: string;
  label: string;
}

export const DROPDOWN_OPTIONS: DropdownOption[] = [
  { value: '최신순', label: '최신순' },
  { value: '마감순', label: '마감순' },
  { value: '최근 댓글 증가순', label: '최근 댓글 증가순' },
  { value: '최근 스크랩 증가순', label: '최근 스크랩 증가순' },
] as const;

export type SortValue = (typeof DROPDOWN_OPTIONS)[number]['value'];
