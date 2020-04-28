import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Sambare Aboubacar | full stack developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:"I'm a passionate full stack  developer skills: javascript, reactjs, nodejs, expressjs, mongodb... " // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sambare Aboubacar',
  subtitle: "I'm  full stack Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: "I'm a passionate full stack  developer.I enjoy creating high quality applications using MERN( MongoDB, Express, React / Redux, and Node.js) stacks.",
  paragraphTwo: "I'm really interested in new technologies  especially those of the javascript ecosystem.",
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/sambare-aboubacar', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'appcademix.png',
    title: 'Appcademix',
    info: 'Link sharing platform for developer, disigner....',
    videoUrl:'',
    stacks:['react','express','nodejs','mongodb'],
    info2: '',
    url: 'https://appcademix.herokuapp.com',
    repo: 'https://github.com/jeffascript/AppcademiX-BE', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'backend.png',
    title: 'Linkedin clone',
    info: 'Linkedin clone backend',
    videoUrl:'',
    stacks:['express','nodejs','mongodb'],
    info2: '',
    url: 'https://linkedin-backend.herokuapp.com/',
    repo: 'https://github.com/boubaSambare/linkedin-backend', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Have a question? Feel free to contact me!',
  btn: '',
  email: 'boubasambare@yahoo.it',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sambare-aboubacar',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/boubaSambare',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
