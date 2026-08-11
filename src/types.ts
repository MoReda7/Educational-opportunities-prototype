export type CategoryType = 
  | 'Courses' 
  | 'Scholarships' 
  | 'Internships' 
  | 'Fellowships' 
  | 'Grants' 
  | 'Competitions';

export type FieldType = 
  | 'Computer Science' 
  | 'Business' 
  | 'Engineering' 
  | 'Medicine' 
  | 'Languages' 
  | 'Design' 
  | 'Data Science';

export type LevelType = 
  | 'Beginner' 
  | 'Undergraduate' 
  | 'Master\'s' 
  | 'PhD';

export type LocationType = 
  | 'Online' 
  | 'Germany' 
  | 'United Kingdom' 
  | 'United States' 
  | 'Turkey' 
  | 'Canada';

export type FundingType = 
  | 'Free' 
  | 'Fully Funded' 
  | 'Partially Funded' 
  | 'Paid';

export type Language = 'en' | 'ar' | 'tr' | 'de';

export type ThemeAppearance = 'light' | 'dark';

export type ThemeColor = 'blue' | 'green' | 'red' | 'orange';

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  category: CategoryType;
  field: FieldType;
  level: LevelType;
  location: LocationType;
  funding: FundingType;
  deadline: string; // ISO date string or formatted date
  shortDescription: string;
  fullDescription: string;
  eligibility: string[];
  benefits: string[];
  requirements: string[];
  importantDates: { label: string; date: string }[];
  officialUrl: string;
  featured?: boolean;
}

export interface FilterState {
  searchQuery: string;
  category: CategoryType | 'All';
  field: FieldType | 'All';
  level: LevelType | 'All';
  location: LocationType | 'All';
  funding: FundingType | 'All';
}

export type PageType = 'home' | 'explore' | 'details';
