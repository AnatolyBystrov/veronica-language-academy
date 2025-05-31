export const initialStudents = [
  {
    id: 1,
    name: 'Anna Petrova',
    age: 8,
    level: 'A1 Beginner',
    language: 'English',
    progress: 75,
    lessonsCount: 12,
    homeworkPending: 2,
    parentCode: 'AP001',
    avatar: '👧',
    recentActivity: 'Studied alphabet and basic words',
    nextLesson: '2025-06-02',
    email: 'anna.petrova@example.com',
    phone: '+972-50-123-4567'
  },
  {
    id: 2,
    name: 'Maxim Ivanov',
    age: 10,
    level: 'A2 Elementary',
    language: 'English',
    progress: 60,
    lessonsCount: 18,
    homeworkPending: 1,
    parentCode: 'MI002',
    avatar: '👦',
    recentActivity: 'Learned verb tenses',
    nextLesson: '2025-06-03',
    email: 'maxim.ivanov@example.com',
    phone: '+972-50-765-4321'
  }
];

export const initialLessons = [
  {
    id: 1,
    studentId: 1,
    date: '2025-05-30',
    topic: 'Alphabet and pronunciation',
    notes: 'Anna memorizes letters well, needs more pronunciation practice',
    homework: 'Learn 10 new words',
    materials: ['alphabet.pdf', 'pronunciation-guide.mp3'],
    completed: true,
    rating: 5
  },
  {
    id: 2,
    studentId: 2,
    date: '2025-05-29',
    topic: 'Present Simple vs Present Continuous',
    notes: 'Maxim understands the difference but confuses endings',
    homework: 'Grammar exercises',
    materials: ['grammar-exercises.pdf'],
    completed: false,
    rating: 4
  }
];

export const homeworkData = [
  {
    id: 1,
    studentId: 1,
    studentName: 'Anna Petrova',
    task: 'Learn 10 new words',
    status: 'pending',
    dueDate: '2025-06-02',
    submittedDate: null,
    rating: null,
    feedback: null
  },
  {
    id: 2,
    studentId: 2,
    studentName: 'Maxim Ivanov',
    task: 'Grammar exercises',
    status: 'completed',
    dueDate: '2025-05-30',
    submittedDate: '2025-05-29',
    rating: 4,
    feedback: 'Excellent! All correct!'
  }
];