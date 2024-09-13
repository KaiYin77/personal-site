/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Upbeat Technology',
    position: 'Software Engineer',
    url: 'https://www.upbeattechtw.com/',
    startDate: '2024-07-01',
    summary: 'Upbeat Technology specializes in advanced wearable SoCs and vibration sensor MEMS. Our mission is to empower individuals and organizations through innovative, ultra-low-power technology solutions that significantly enhance both personal and professional experiences.',
    highlights: [],
  },
  {
    name: 'InQuartik Corporation',
    position: 'Software Engineer Intern',
    url: 'https://www.inquartik.com.tw/about-us/',
    startDate: '2022-01-01',
    endDate: '2023-12-01',
    summary: 'InQuartik is a leading SaaS provider leveraging large language models (LLMs) to deliver cutting-edge AI and patent intelligence solutions.',
    highlights: [
      'Coded advanced-level program and design improvements for existing 6 production applications on Front-end using Vue.js.',
      'Built and maintained Back-end REST services using Java.',
      'Developed Behavioral-level test using Cucumber Framework and Unit-test using Jest.',
      'Increased marketing productivity by 3x through streamlining the integration of HubSpot and Apollo.',
    ],
  },
  {
    name: 'Midnight Clash',
    position: 'Web Developer Contractor',
    url: 'https://x.com/midnightclash1',
    startDate: '2022-03',
    endDate: '2022-06',
    summary: 'We are the dark stalkers. We earn blood through engaging in our underground network. We are the creators\' brand in the metaverse.',
    highlights: [
      'Collabrate with Backend & Blockchain developers in Agile team to rapid prototype.',
    ],
  },
  {
    name: 'Industrial Technology Research Institute (ITRI)',
    position: 'Software Engineer Intern',
    url: 'http://skepticalinvestments.biz',
    startDate: '2021-09-01',
    endDate: '2022-10-01',
    summary: 'Taiwan\'s leading total solution provider for autonomous driving vehicles (AVs)',
    highlights: [
      'Introduced and integrated an open-source object-level labeling tool for point cloud data and developed a customized pipeline for ITRI\'s internal dataset.',
      'Researched and developed modern motion forecasting module for urban areas, with a focus on performance and real-time application integration into autonomous vehicles.',
    ],
  },
  {
    name: 'GallopWave Inc.',
    position: 'Software Engineer Intern',
    url: 'https://www.gallopwave.com/',
    startDate: '2021-07-15',
    endDate: '2021-09-15',
    summary: 'ADAS Startup',
    highlights: [
      'Closely collaborated with robotic domain and computer vision experts developing VIO system.',
      'Developed various testing methodologies to evaluate the VIO (Visual-Inertial Odometry) system, including creating automated shell scripts to streamline and simplify the testing process.',
    ],
  },
];

export default work;
