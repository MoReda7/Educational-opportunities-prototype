import { Opportunity } from '../types';

export const SAMPLE_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-1',
    title: 'Full Stack Web Development Professional Certificate',
    organization: 'Global Tech Academy',
    category: 'Courses',
    field: 'Computer Science',
    level: 'Beginner',
    location: 'Online',
    funding: 'Free',
    deadline: '2026-10-15',
    featured: true,
    shortDescription: 'Master HTML, CSS, JavaScript, React, and Node.js with hands-on projects and industry mentorship.',
    fullDescription: 'This comprehensive 12-week course is designed to take you from coding basics to building full-stack web applications. Taught by senior engineering mentors from top global tech companies, you will work on real-world projects, build an impressive GitHub portfolio, and prepare for entry-level developer roles.',
    eligibility: [
      'Open to participants worldwide of all backgrounds',
      'Basic literacy in English or translated subtitles available',
      'Requires a laptop/computer with internet access',
      'No prior programming experience required'
    ],
    benefits: [
      '100% Free tuition and certificate of completion',
      'Access to interactive coding environments and code reviews',
      'Weekly live Q&A sessions with industry professionals',
      'Career prep, resume review, and mock technical interviews'
    ],
    requirements: [
      'Online application form submission',
      'Short motivation statement (max 250 words)',
      'Commitment to 8-10 hours of study per week'
    ],
    importantDates: [
      { label: 'Application Deadline', date: 'October 15, 2026' },
      { label: 'Cohort Start Date', date: 'November 1, 2026' },
      { label: 'Program Graduation', date: 'January 30, 2027' }
    ],
    officialUrl: 'https://example.org/courses/fullstack'
  },
  {
    id: 'opp-2',
    title: 'DAAD Master\'s Scholarship for International Students',
    organization: 'German Academic Exchange Service (DAAD)',
    category: 'Scholarships',
    field: 'Engineering',
    level: 'Master\'s',
    location: 'Germany',
    funding: 'Fully Funded',
    deadline: '2026-11-30',
    featured: true,
    shortDescription: 'Full funding for international graduate students to pursue Master\'s degrees at top German universities.',
    fullDescription: 'The DAAD scholarship program offers outstanding graduates from around the globe the opportunity to pursue a Master\'s degree at state or state-recognized universities in Germany. The scholarship promotes academic excellence and cross-cultural exchange in sustainable technologies, engineering, and science.',
    eligibility: [
      'Hold a Bachelor\'s degree or equivalent completed within the last 6 years',
      'Proven record of academic excellence (GPA 3.5+ or equivalent)',
      'Language proficiency in English (IELTS 6.5+) or German (B2 level depending on course)',
      'Demonstrated commitment to returning and contributing to home country'
    ],
    benefits: [
      'Monthly stipend of €934 for living expenses',
      'Full coverage of university tuition fees',
      'Health, accident, and personal liability insurance',
      'Travel allowance for flights to and from Germany',
      'Preparatory German language course subsidy'
    ],
    requirements: [
      'Completed DAAD online application',
      'Curriculum Vitae (CV in Europass format)',
      'Letter of Motivation (1-2 pages)',
      'Two letters of recommendation from university professors',
      'Certified copies of official academic transcripts'
    ],
    importantDates: [
      { label: 'Application Portal Closes', date: 'November 30, 2026' },
      { label: 'Interview Phase', date: 'January 2027' },
      { label: 'Academic Year Begins', date: 'October 2027' }
    ],
    officialUrl: 'https://example.org/scholarships/daad-masters'
  },
  {
    id: 'opp-3',
    title: 'Software Engineering Summer Internship',
    organization: 'Innovate AI Labs',
    category: 'Internships',
    field: 'Computer Science',
    level: 'Undergraduate',
    location: 'United States',
    funding: 'Paid',
    deadline: '2026-09-20',
    featured: true,
    shortDescription: '12-week paid summer internship working on cutting-edge generative AI models and cloud architecture.',
    fullDescription: 'Join Innovate AI Labs in San Francisco or Seattle for a transformative 12-week software engineering internship. You will collaborate directly with research scientists and software leads to design scalable APIs, optimize neural network inference pipelines, and build user-facing AI tools.',
    eligibility: [
      'Currently enrolled in an Undergraduate or Master\'s degree in CS, Software Engineering, or related STEM fields',
      'Graduation date between December 2027 and June 2028',
      'Proficiency in Python, C++, or TypeScript',
      'Solid understanding of data structures and algorithms'
    ],
    benefits: [
      'Competitive monthly salary ($8,500/month)',
      'Housing stipend or relocation assistance provided',
      '1-on-1 mentorship with senior staff engineers',
      'Return offer opportunity for full-time employment'
    ],
    requirements: [
      'Updated Resume and GitHub portfolio link',
      'Coding challenge submission upon initial application',
      'Two rounds of technical virtual interviews'
    ],
    importantDates: [
      { label: 'Early Decision Deadline', date: 'September 20, 2026' },
      { label: 'Interview Process', date: 'October - November 2026' },
      { label: 'Internship Duration', date: 'June - August 2027' }
    ],
    officialUrl: 'https://example.org/internships/innovate-ai'
  },
  {
    id: 'opp-4',
    title: 'Global Health Policy Research Fellowship',
    organization: 'Oxford Institute for Global Policy',
    category: 'Fellowships',
    field: 'Medicine',
    level: 'PhD',
    location: 'United Kingdom',
    funding: 'Fully Funded',
    deadline: '2026-12-01',
    featured: true,
    shortDescription: 'Postdoctoral and doctoral research fellowship focused on epidemic preparedness and healthcare access.',
    fullDescription: 'The Oxford Institute for Global Policy invites applications for its prestigious 1-year research fellowship. Fellows conduct independent research on global health security, equitable vaccine distribution, and health system resilience in low- and middle-income regions.',
    eligibility: [
      'PhD or MD degree holders, or advanced PhD candidates in Medicine, Public Health, or Bioethics',
      'Strong research publication record in peer-reviewed journals',
      'Demonstrated interest in policy implementation and global health equity'
    ],
    benefits: [
      'Annual research stipend of £45,000',
      'Dedicated research equipment and conference travel budget (£5,000)',
      'Office space and library access at Oxford University',
      'Publication support and policy advisory network'
    ],
    requirements: [
      'Research proposal (max 2,000 words)',
      '3 Representative publications',
      '3 Professional references'
    ],
    importantDates: [
      { label: 'Proposal Submission Deadline', date: 'December 1, 2026' },
      { label: 'Shortlist Announcement', date: 'January 15, 2027' },
      { label: 'Fellowship Tenure Begins', date: 'April 1, 2027' }
    ],
    officialUrl: 'https://example.org/fellowships/oxford-health'
  },
  {
    id: 'opp-5',
    title: 'Clean Energy Innovation Research Grant',
    organization: 'European Climate Action Fund',
    category: 'Grants',
    field: 'Engineering',
    level: 'PhD',
    location: 'Germany',
    funding: 'Fully Funded',
    deadline: '2026-11-15',
    featured: true,
    shortDescription: 'Research grant up to €50,000 for innovative technologies in solar efficiency and battery storage.',
    fullDescription: 'The Clean Energy Innovation Grant empowers early-career researchers and green-tech startups to develop scalable solutions for renewable energy generation, smart grid optimization, and zero-carbon industrial processes.',
    eligibility: [
      'Independent researchers, university teams, or early-stage startups registered in EU or partner countries',
      'Clear project milestone timeline within 18 months',
      'High potential for real-world environmental impact'
    ],
    benefits: [
      'Grant funding between €20,000 and €50,000 without equity loss',
      'Mentorship from clean-tech venture capital leads',
      'Access to lab facilities at partner technical universities'
    ],
    requirements: [
      'Project technical proposal and budget plan',
      'Proof of concept video or lab prototype documentation',
      'Team background biographies'
    ],
    importantDates: [
      { label: 'Grant Application Deadline', date: 'November 15, 2026' },
      { label: 'Final Pitch Night', date: 'December 10, 2026' },
      { label: 'Grant Disbursement', date: 'January 2027' }
    ],
    officialUrl: 'https://example.org/grants/clean-energy'
  },
  {
    id: 'opp-6',
    title: 'International Data Science Hackathon 2026',
    organization: 'DataForGood Global Network',
    category: 'Competitions',
    field: 'Data Science',
    level: 'Undergraduate',
    location: 'Online',
    funding: 'Free',
    deadline: '2026-10-01',
    featured: true,
    shortDescription: 'Compete with 5,000+ data scientists worldwide to solve climate and humanitarian challenges using ML.',
    fullDescription: 'A 48-hour global online hackathon challenging student and professional data scientists to build predictive models, computer vision tools, and geospatial analytics for humanitarian aid distribution and disaster response.',
    eligibility: [
      'Open to students, professionals, and enthusiasts worldwide',
      'Teams of 1 to 4 members',
      'All code must be developed using open-source tools during the event window'
    ],
    benefits: [
      '$25,000 total cash prize pool ($10,000 1st place)',
      'Cloud compute credits provided by sponsors ($500 per team)',
      'Direct interview opportunities with sponsoring tech firms',
      'Certificate of participation and achievement'
    ],
    requirements: [
      'Free team registration on the competition platform',
      'Final submission of GitHub repository, trained model weights, and 3-minute video demo'
    ],
    importantDates: [
      { label: 'Registration Deadline', date: 'October 1, 2026' },
      { label: 'Hackathon Weekend', date: 'October 9 - 11, 2026' },
      { label: 'Winners Announcement', date: 'October 18, 2026' }
    ],
    officialUrl: 'https://example.org/competitions/datascience-2026'
  },
  {
    id: 'opp-7',
    title: 'Applied Machine Learning & Deep Learning Specialization',
    organization: 'MIT Open Learning',
    category: 'Courses',
    field: 'Data Science',
    level: 'Undergraduate',
    location: 'Online',
    funding: 'Free',
    deadline: '2026-12-31',
    shortDescription: 'Master PyTorch, neural architectures, transformers, and ML system design with MIT curriculum.',
    fullDescription: 'This online specialization covers foundational and advanced machine learning concepts. Learn optimization algorithms, convolutional networks, attention mechanisms, and reinforcement learning through rigorous assignments and code notebooks.',
    eligibility: ['Basic calculus and linear algebra knowledge', 'Intermediate Python programming skills'],
    benefits: ['Self-paced learning modules', 'Verified certificate option available', 'Comprehensive course lecture slides and code templates'],
    requirements: ['Free account registration', 'Completion of hands-on coding assignments'],
    importantDates: [
      { label: 'Enrollment Window', date: 'Open year-round' },
      { label: 'Self-Paced Completion', date: 'Recommended 10 weeks' }
    ],
    officialUrl: 'https://example.org/courses/mit-ml'
  },
  {
    id: 'opp-8',
    title: 'Chevening British Government Postgraduate Scholarship',
    organization: 'UK Foreign, Commonwealth & Development Office',
    category: 'Scholarships',
    field: 'Business',
    level: 'Master\'s',
    location: 'United Kingdom',
    funding: 'Fully Funded',
    deadline: '2026-11-05',
    shortDescription: 'Fully funded 1-year Master\'s degree at any UK university for future leaders and changemakers.',
    fullDescription: 'Chevening Scholarships enable outstanding emerging leaders from over 160 countries and territories to pursue one-year Master’s degrees in the UK. Chevening scholars are passionate about creating positive global change.',
    eligibility: [
      'Citizen of a Chevening-eligible country',
      'Undergraduate degree equivalent to an upper second-class 2:1 honours degree in the UK',
      'At least 2 years of work experience (2,000 hours)',
      'Commitment to return home for at least two years after the award'
    ],
    benefits: [
      'Full university tuition fee coverage',
      'Monthly living allowance',
      'Economy class travel to and from the UK',
      'Access to exclusive networking events and cultural tours'
    ],
    requirements: [
      'Online application with 4 essay responses',
      'Two academic/professional reference letters',
      'Unconditional UK university offer letter by July 2027'
    ],
    importantDates: [
      { label: 'Applications Open', date: 'September 1, 2026' },
      { label: 'Applications Close', date: 'November 5, 2026' },
      { label: 'Interview Period', date: 'February - April 2027' }
    ],
    officialUrl: 'https://example.org/scholarships/chevening'
  },
  {
    id: 'opp-9',
    title: 'UI/UX & Product Design Foundations Bootcamp',
    organization: 'Design Institute London',
    category: 'Courses',
    field: 'Design',
    level: 'Beginner',
    location: 'Online',
    funding: 'Partially Funded',
    deadline: '2026-10-20',
    shortDescription: 'Learn Figma, user research, wireframing, and design systems with a 50% partial scholarship.',
    fullDescription: 'An immersive 8-week design bootcamp equipping students with core skills in user research, wireframing, interactive prototyping, and design systems creation in Figma.',
    eligibility: ['No prior design experience needed', 'Access to a modern web browser and Figma (free account)'],
    benefits: ['50% tuition scholarship for international applicants', 'Portfolio project reviews by senior product designers', 'Industry certification'],
    requirements: ['Short design interest questionnaire', 'Commitment of 6 hours per week'],
    importantDates: [
      { label: 'Scholarship Application Closes', date: 'October 20, 2026' },
      { label: 'Bootcamp Kickoff', date: 'November 5, 2026' }
    ],
    officialUrl: 'https://example.org/courses/uiux-design'
  },
  {
    id: 'opp-10',
    title: 'TÜBİTAK Graduate Student Research Fellowship',
    organization: 'Scientific and Technological Research Council of Turkey',
    category: 'Fellowships',
    field: 'Engineering',
    level: 'PhD',
    location: 'Turkey',
    funding: 'Fully Funded',
    deadline: '2026-10-30',
    shortDescription: 'Research fellowship for international doctoral students in STEM disciplines studying at Turkish universities.',
    fullDescription: 'TÜBİTAK offers research fellowships for international PhD students and young researchers to conduct high-impact research in engineering, AI, biotech, and renewable energy at top Turkish research centers.',
    eligibility: ['Non-Turkish citizenship', 'Enrolled in or accepted to a doctoral program in STEM', 'Age under 35'],
    benefits: ['Monthly allowance (₺22,000/month)', 'Tuition fee waiver', 'Research expense support', 'Travel allowance'],
    requirements: ['Research plan endorsement from host supervisor in Turkey', 'Academic transcripts', 'Language proficiency proof'],
    importantDates: [
      { label: 'Application Deadline', date: 'October 30, 2026' },
      { label: 'Results Announced', date: 'December 2026' }
    ],
    officialUrl: 'https://example.org/fellowships/tubitak'
  },
  {
    id: 'opp-11',
    title: 'Toronto AI & Healthcare Summer Internship',
    organization: 'Vector Institute for Artificial Intelligence',
    category: 'Internships',
    field: 'Medicine',
    level: 'Master\'s',
    location: 'Canada',
    funding: 'Paid',
    deadline: '2026-11-10',
    shortDescription: 'Paid research internship integrating deep learning algorithms into medical imaging and diagnostics.',
    fullDescription: 'Work alongside world-class machine learning scientists and clinical researchers at the Vector Institute in Toronto. Develop deep learning algorithms for early cancer detection, genomic sequencing analysis, and electronic health record modeling.',
    eligibility: ['Enrolled in Master\'s or PhD in CS, Biomedical Engineering, or Data Science', 'Experience with PyTorch or TensorFlow'],
    benefits: ['CAD $4,200/month stipend', 'Travel stipend for candidates outside Ontario', 'Co-authorship opportunities on publications'],
    requirements: ['CV', 'Transcript', 'Cover letter detailing research interest'],
    importantDates: [
      { label: 'Application Deadline', date: 'November 10, 2026' },
      { label: 'Internship Duration', date: 'May - August 2027' }
    ],
    officialUrl: 'https://example.org/internships/vector-health'
  },
  {
    id: 'opp-12',
    title: 'Vanier Canada Graduate Scholarships (PhD)',
    organization: 'Government of Canada',
    category: 'Scholarships',
    field: 'Computer Science',
    level: 'PhD',
    location: 'Canada',
    funding: 'Fully Funded',
    deadline: '2026-11-01',
    shortDescription: 'Prestigious doctoral award valued at $50,000 per year for 3 years at Canadian universities.',
    fullDescription: 'The Vanier CGS program aims to attract and retain world-class doctoral students by supporting individuals who demonstrate leadership skills and a high standard of scholarly achievement in graduate studies.',
    eligibility: ['Nominated by a Canadian institution with a Vanier quota', 'Pursuing first doctoral degree', 'Academic excellence in top 15%'],
    benefits: ['$50,000 per year for three years', 'Full research facilities and institutional support'],
    requirements: ['Nomination package', 'Research proposal', 'Leadership statement', 'Referees reports'],
    importantDates: [
      { label: 'Institutional Nomination Deadline', date: 'November 1, 2026' },
      { label: 'Results Released', date: 'April 2027' }
    ],
    officialUrl: 'https://example.org/scholarships/vanier-canada'
  },
  {
    id: 'opp-13',
    title: 'Global Social Entrepreneurship Challenge',
    organization: 'Stanford Social Innovation Review',
    category: 'Competitions',
    field: 'Business',
    level: 'Undergraduate',
    location: 'United States',
    funding: 'Fully Funded',
    deadline: '2026-12-15',
    shortDescription: 'Submit business plans for social ventures tackling UN Sustainable Development Goals.',
    fullDescription: 'A global venture pitch competition for student entrepreneurs. Finalist teams receive seed capital, professional coaching, and travel grants to present live at Stanford University.',
    eligibility: ['Student-led teams (at least 1 current undergraduate or graduate student)', 'Venture must address a social or environmental problem'],
    benefits: ['$100,000 in equity-free prize funding', 'All-expenses-paid trip to California for top 10 finalists', 'Investor connections'],
    requirements: ['Executive summary pitch deck (10 slides max)', '2-minute video pitch'],
    importantDates: [
      { label: 'Pitch Submission Deadline', date: 'December 15, 2026' },
      { label: 'Finals in Stanford', date: 'March 2027' }
    ],
    officialUrl: 'https://example.org/competitions/social-impact'
  },
  {
    id: 'opp-14',
    title: 'German Language Immersion & Cultural Exchange Program',
    organization: 'Goethe-Institut Berlin',
    category: 'Courses',
    field: 'Languages',
    level: 'Beginner',
    location: 'Germany',
    funding: 'Partially Funded',
    deadline: '2026-10-10',
    shortDescription: '4-week intensive German language course (A1 to C1) in Berlin with family stay and cultural activities.',
    fullDescription: 'Immerse yourself in German language and culture in the heart of Berlin. Features 25 hours of interactive language training per week, excursions, and homestay options with local host families.',
    eligibility: ['Open to learners age 18+', 'All language levels from absolute beginner to advanced'],
    benefits: ['30% tuition discount scholarship available', 'Official Goethe-Zertifikat examination included', 'Guided cultural tours around Berlin'],
    requirements: ['Online placement test', 'Registration form'],
    importantDates: [
      { label: 'Early Bird Registration', date: 'October 10, 2026' },
      { label: 'Course Start', date: 'November 2, 2026' }
    ],
    officialUrl: 'https://example.org/courses/goethe-berlin'
  },
  {
    id: 'opp-15',
    title: 'Cambridge Gates Postdoctoral Research Fellowship',
    organization: 'Gates Cambridge Trust',
    category: 'Fellowships',
    field: 'Computer Science',
    level: 'PhD',
    location: 'United Kingdom',
    funding: 'Fully Funded',
    deadline: '2026-12-05',
    shortDescription: 'Full financial support to pursue research or postgraduate studies at Cambridge University.',
    fullDescription: 'Gates Cambridge Scholarships are awarded to outstanding applicants from countries outside the UK to pursue a full-time postgraduate degree in any subject available at the University of Cambridge.',
    eligibility: ['Citizen of any country outside the UK', 'Applying to pursue a PhD or research Master\'s at Cambridge'],
    benefits: ['Full cost of studying at Cambridge', 'Maintenance allowance (£20,000/year)', 'Airfare and discretionary funds'],
    requirements: ['Gates Cambridge reference', 'Personal statement on leadership and commitment to improving lives'],
    importantDates: [
      { label: 'US Citizen Deadline', date: 'October 14, 2026' },
      { label: 'International Deadline', date: 'December 5, 2026' }
    ],
    officialUrl: 'https://example.org/fellowships/gates-cambridge'
  },
  {
    id: 'opp-16',
    title: 'Bosphorus Tech Entrepreneurship Grant',
    organization: 'Istanbul Startup Hub',
    category: 'Grants',
    field: 'Business',
    level: 'Undergraduate',
    location: 'Turkey',
    funding: 'Fully Funded',
    deadline: '2026-11-20',
    shortDescription: 'Seed grant of ₺250,000 and co-working space in Istanbul for tech startups led by young founders.',
    fullDescription: 'Supporting early-stage technology founders across Southeastern Europe and the Middle East. Provides non-dilutive seed capital, office space in Istanbul financial center, and regulatory advisory.',
    eligibility: ['Founders under 30 years old', 'Tech-enabled product with MVP ready'],
    benefits: ['₺250,000 grant', '12 months free co-working space', 'Legal and accounting assistance'],
    requirements: ['Pitch deck submission', 'Product demo link'],
    importantDates: [
      { label: 'Applications Close', date: 'November 20, 2026' },
      { label: 'Cohort Onboarding', date: 'January 2027' }
    ],
    officialUrl: 'https://example.org/grants/bosphorus-tech'
  },
  {
    id: 'opp-17',
    title: 'Advanced Arabic Translation & Literature Workshop',
    organization: 'Center for Middle Eastern Studies',
    category: 'Courses',
    field: 'Languages',
    level: 'Master\'s',
    location: 'Online',
    funding: 'Free',
    deadline: '2026-10-25',
    shortDescription: 'Master literary translation skills between Arabic and English guided by acclaimed translators.',
    fullDescription: 'A semester-long online seminar focusing on classical and modern Arabic prose, poetry, and technical translation. Includes weekly critique workshops and publishing guidance.',
    eligibility: ['B2/C1 level Arabic proficiency', 'Fluent written English'],
    benefits: ['Free tuition', 'Publication opportunity in the annual Translation Journal', 'Peer feedback network'],
    requirements: ['Short translation sample (500 words)', 'Statement of intent'],
    importantDates: [
      { label: 'Application Deadline', date: 'October 25, 2026' },
      { label: 'Workshop Begins', date: 'November 10, 2026' }
    ],
    officialUrl: 'https://example.org/courses/arabic-translation'
  },
  {
    id: 'opp-18',
    title: 'Fulbright Foreign Student Program',
    organization: 'US Department of State',
    category: 'Scholarships',
    field: 'Business',
    level: 'Master\'s',
    location: 'United States',
    funding: 'Fully Funded',
    deadline: '2026-10-01',
    shortDescription: 'Fully funded graduate scholarship to study at top universities across the United States.',
    fullDescription: 'The Fulbright Foreign Student Program enables graduate students, young professionals, and artists from abroad to study and conduct research in the United States.',
    eligibility: ['Completed Bachelor\'s degree', 'Strong academic background and TOEFL/IELTS scores'],
    benefits: ['Full tuition coverage', 'Monthly stipend', 'Health insurance', 'J-1 visa sponsorship and roundtrip travel'],
    requirements: ['3 Letters of recommendation', 'Personal statement and study objective essays', 'Transcripts'],
    importantDates: [
      { label: 'National Deadline', date: 'October 1, 2026' },
      { label: 'Selection Interviews', date: 'December 2026' }
    ],
    officialUrl: 'https://example.org/scholarships/fulbright'
  },
  {
    id: 'opp-19',
    title: 'Sustainable Architecture & Urban Design Competition',
    organization: 'Royal Institute of British Architects (RIBA)',
    category: 'Competitions',
    field: 'Design',
    level: 'Master\'s',
    location: 'United Kingdom',
    funding: 'Paid',
    deadline: '2026-11-25',
    shortDescription: 'Design affordable, eco-friendly housing solutions for dense urban environments.',
    fullDescription: 'International design competition inviting architecture students and recent graduates to propose innovative, zero-carbon residential towers or community housing developments.',
    eligibility: ['Architecture or urban planning students/graduates', 'Individual or team entries up to 3 people'],
    benefits: ['£15,000 first prize', 'Exhibition at the London Architecture Festival', 'Publication in RIBA Journal'],
    requirements: ['3 A1 digital design boards', 'Project narrative (1,000 words)'],
    importantDates: [
      { label: 'Submission Deadline', date: 'November 25, 2026' },
      { label: 'Exhibition', date: 'February 2027' }
    ],
    officialUrl: 'https://example.org/competitions/riba-sustainable'
  },
  {
    id: 'opp-20',
    title: 'BioMed Research & Immunology Internship',
    organization: 'Max Planck Institute for Infection Biology',
    category: 'Internships',
    field: 'Medicine',
    level: 'Undergraduate',
    location: 'Germany',
    funding: 'Paid',
    deadline: '2026-11-12',
    shortDescription: 'Paid lab internship in Berlin exploring cell biology, host-pathogen interactions, and immunology.',
    fullDescription: 'Spend 3 to 6 months in Berlin conducting cutting-edge laboratory research under direct supervision of leading principal investigators in molecular biology.',
    eligibility: ['Undergraduate students in Biology, Biochemistry, Medicine, or Bioengineering'],
    benefits: ['€1,200/month living stipend', 'Housing assistance in Berlin', 'Lab safety and techniques certification'],
    requirements: ['CV', 'Letter of motivation', 'Official transcript'],
    importantDates: [
      { label: 'Application Deadline', date: 'November 12, 2026' },
      { label: 'Internship Period', date: 'Flexible start 2027' }
    ],
    officialUrl: 'https://example.org/internships/max-planck'
  },
  {
    id: 'opp-21',
    title: 'Women in Tech Leadership Fellowship',
    organization: 'Silicon Valley Founders Council',
    category: 'Fellowships',
    field: 'Computer Science',
    level: 'Undergraduate',
    location: 'United States',
    funding: 'Fully Funded',
    deadline: '2026-12-10',
    shortDescription: '6-month leadership development program with 1-on-1 CTO mentorship and tech executive roundtables.',
    fullDescription: 'Empowering female undergraduate computer science students to excel as software engineering managers and startup CTOs through intensive workshops, executive coaching, and peer networks.',
    eligibility: ['Identify as female or non-binary', 'Currently enrolled in 2nd or 3rd year CS/Engineering undergraduate program'],
    benefits: ['Fully covered retreat in California', 'Monthly $1,000 learning budget for books/courses', 'Lifetime alumni network access'],
    requirements: ['Short video introduction', 'Github profile or technical project demo'],
    importantDates: [
      { label: 'Applications Close', date: 'December 10, 2026' },
      { label: 'Program Launch', date: 'February 2027' }
    ],
    officialUrl: 'https://example.org/fellowships/women-tech-leaders'
  },
  {
    id: 'opp-22',
    title: 'Financial Tech & Blockchain Innovation Grant',
    organization: 'FinTech Innovation Lab UK',
    category: 'Grants',
    field: 'Business',
    level: 'Master\'s',
    location: 'United Kingdom',
    funding: 'Partially Funded',
    deadline: '2026-10-18',
    shortDescription: 'Grant support up to £25,000 for building secure decentralized finance and digital banking prototypes.',
    fullDescription: 'Supporting research projects and student startups building next-generation payment rails, privacy-preserving smart contracts, and algorithmic risk management tools.',
    eligibility: ['Master\'s or PhD candidates in Finance, Economics, or CS'],
    benefits: ['£15,000 - £25,000 funding', 'Regulatory sandbox access in the UK'],
    requirements: ['Technical whitepaper draft', 'Project roadmap'],
    importantDates: [
      { label: 'Application Deadline', date: 'October 18, 2026' },
      { label: 'Review Period', date: 'November 2026' }
    ],
    officialUrl: 'https://example.org/grants/fintech-lab'
  },
  {
    id: 'opp-23',
    title: 'Practical Cybersecurity & Ethical Hacking Essentials',
    organization: 'CyberShield Academy',
    category: 'Courses',
    field: 'Computer Science',
    level: 'Beginner',
    location: 'Online',
    funding: 'Free',
    deadline: '2026-12-20',
    shortDescription: 'Hands-on network security, penetration testing, and incident response labs on interactive virtual targets.',
    fullDescription: 'Learn defense and offense cybersecurity fundamentals. Practice vulnerability assessment, Wireshark packet analysis, web security, and Linux hardening in virtual labs.',
    eligibility: ['Open to all tech enthusiasts', 'Basic familiarity with command line interface'],
    benefits: ['Free access to 40+ hands-on labs', 'Industry recognized voucher discount', 'Community Discord server support'],
    requirements: ['Free account signup'],
    importantDates: [
      { label: 'Registration Open', date: 'Always Open' }
    ],
    officialUrl: 'https://example.org/courses/cybersecurity'
  },
  {
    id: 'opp-24',
    title: 'Sabancı University International Undergraduate Scholarship',
    organization: 'Sabancı University Istanbul',
    category: 'Scholarships',
    field: 'Engineering',
    level: 'Undergraduate',
    location: 'Turkey',
    funding: 'Fully Funded',
    deadline: '2026-10-05',
    shortDescription: 'Tuition waiver and dormitory accommodation for outstanding international undergraduate students.',
    fullDescription: 'Sabancı University offers merit-based full and partial scholarships to high-achieving international students applying to its English-medium undergraduate programs in Engineering, Natural Sciences, and Management.',
    eligibility: ['High school diploma with top 10% GPA or SAT/ACT competitive scores', 'Non-Turkish passport holders'],
    benefits: ['100% tuition exemption', 'Free campus accommodation in double room', 'Monthly meal stipend'],
    requirements: ['Online application', 'High school transcripts and exam results', 'English proficiency proof (TOEFL/IELTS)'],
    importantDates: [
      { label: 'Early Evaluation Deadline', date: 'October 5, 2026' },
      { label: 'Semester Start', date: 'February 2027' }
    ],
    officialUrl: 'https://example.org/scholarships/sabanci-undergrad'
  }
];
