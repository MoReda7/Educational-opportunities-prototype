import React from 'react';
import { BookOpen, GraduationCap, Briefcase, Award, Landmark, Trophy, ArrowRight, ArrowLeft } from 'lucide-react';
import { CategoryType, Language } from '../types';

interface CategoryCardsProps {
  title: string;
  subtitle: string;
  language: Language;
  onSelectCategory: (category: CategoryType) => void;
  labels: Record<CategoryType, string>;
}

const CATEGORIES_CONFIG: { type: CategoryType; icon: React.FC<{ className?: string }>; count: string; colorClass: string }[] = [
  { type: 'Courses', icon: BookOpen, count: '100+ Available', colorClass: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-400' },
  { type: 'Scholarships', icon: GraduationCap, count: '50+ Grants', colorClass: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400' },
  { type: 'Internships', icon: Briefcase, count: '30+ Positions', colorClass: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400' },
  { type: 'Fellowships', icon: Award, count: '20+ Residencies', colorClass: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40 dark:text-purple-400' },
  { type: 'Grants', icon: Landmark, count: '15+ Funds', colorClass: 'text-rose-600 bg-rose-50 dark:bg-rose-950/40 dark:text-rose-400' },
  { type: 'Competitions', icon: Trophy, count: '25+ Events', colorClass: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-400' },
];

export const CategoryCards: React.FC<CategoryCardsProps> = ({
  title,
  subtitle,
  language,
  onSelectCategory,
  labels
}) => {
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-main tracking-tight">{title}</h2>
        <p className="text-muted text-sm sm:text-base">{subtitle}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATEGORIES_CONFIG.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.type}
              onClick={() => onSelectCategory(item.type)}
              className="group p-5 rounded-2xl bg-card border border-subtle hover:border-primary-subtle shadow-xs hover:shadow-md transition-all text-start flex flex-col justify-between space-y-4 focus:outline-none focus:ring-2 focus:ring-primary-main"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.colorClass} transition-transform group-hover:scale-110`}>
                <Icon className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-bold text-base text-main group-hover:text-primary-main transition-colors flex items-center justify-between">
                  <span>{labels[item.type]}</span>
                  <ArrowIcon className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-main" />
                </h3>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
