import React from 'react';
import './aboutUs.css';
import Contact from './Contact';
import Headerallpages from '../headerallpages';
import Footer from '../Footer/Footer';

const paraOne = 'A propos :';
const description =
  'Oovy, application développée en 2021, vous permettant de trouver le film de votre choix. Idéale pour ne pas perdre de temps à choisir ! Oovy le fait pour vous !';
const cards = [
  {
    src: 'img/Edouard-LARROCHE.png',
    name: 'Edouard Larroche',
    text: '35 ans, développeur web front end en formation WCS',
    link_github: 'https://github.com/Edouard-LARROCHE',
    logo_git: 'img/github.png',
    link_linkedin: 'https://www.linkedin.com/in/edouard-larroche-9099a6163/',
    logo_linkedin: 'img/linkedin.png',
  },
  {

    src: 'img/marieanne-duvieu.png',
    name: 'Marie-Anne Duvieu',
    text: '29 ans, développeuse web front end en formation WCS',
    link_github: 'https://github.com/Sseven-lab',
    logo_git: 'img/github.png',
    link_linkedin: 'https://www.linkedin.com/in/Sseven-lab/',
    logo_linkedin: 'img/linkedin.png',
  },
  {
    src: 'img/baptiste-grias.png',
    name: 'Baptiste Grias',
    text: '30 ans, développeur web front end en formation WCS',
    link_github: 'https://github.com/BaptisteGrias',
    logo_git: 'img/github.png',
    link_linkedin: 'https://www.linkedin.com/in/baptiste-grias-4bbba8171/',
    logo_linkedin: 'img/linkedin.png',
  },
  {
    src: 'img/gregory-bouteville.jpg',
    name: 'Gregory Bouteville',
    text: '40 ans, développeur web front end en formation WCS',
    link_github: 'https://github.com/Gregory-Bouteville',
    logo_git: 'img/github.png',
    link_linkedin: 'https://www.linkedin.com/in/gregory-bouteville-14b464207',
    logo_linkedin: 'img/linkedin.png',
  },
  {
    src: 'img/Touyard-Kevin.jpg',
    name: 'Kevin Touyard',
    text: '28 ans, développeur web front end en formation WCS',
    link_github: 'https://github.com/TouyardK',
    logo_git: 'img/github.png',
    link_linkedin: 'https://www.linkedin.com/in/TouyardK/',
    logo_linkedin: 'img/linkedin.png',
  },
];

const AboutUs = () => {
  return (
    <div>
      <Headerallpages />
      <p className="trait_aboutus"></p>
      <h2 className="text1_aboutus">{paraOne}</h2>
      <div className="contains">
        <p className="description">{description}</p>
      </div>

      <div className="card-contact">
        {cards.map((cards, index) => (
          <Contact
            key={index}
            src={cards.src}
            name={cards.name}
            text={cards.text}
            link_github={cards.link_github}
            logo_git={cards.logo_git}
            link_linkedin={cards.link_linkedin}
            logo_linkedin={cards.logo_linkedin}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
