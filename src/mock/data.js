import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Sambare Aboubacar | full stack developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'MERN Full Stack Developer really passionate and challenging!', // e.g: Welcome to my website
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
  paragraphOne: "MERN Full Stack Developer really passionate and challenging!",
  paragraphTwo: "I really like keep pushing myself in new things! Six months ago I started a course in Strive SChool to learn more about MERN and I'm succefully finishing it!",
  paragraphThree: 'Currently looking for a job',
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
    info2: '',
    url: 'https://appcademix.herokuapp.com',
    repo: 'https://github.com/jeffascript/AppcademiX-BE', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
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
