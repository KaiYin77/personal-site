const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Vue.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'bash/zsh/fish',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services(AWS)',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 2,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'AWS Lambda',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'PyTorch',
    competency: 5,
    category: ['DL Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Ruby on Rails',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C/C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 5,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Engineering', 'ML Engineering'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
