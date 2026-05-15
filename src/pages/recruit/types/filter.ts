import type {
  CompanyType,
  EmploymentType,
  JobCategory,
  Region,
} from '@pages/recruit/constants/filterOptions';

export interface FilterValues {
  jobCategories: JobCategory[];
  companyTypes: CompanyType[];
  employmentTypes: EmploymentType[];
  regions: Region[];
}
