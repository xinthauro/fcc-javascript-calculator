import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFreeCodeCamp, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import style from './Footer.module.css';

const LINKS = [
  {
    description: 'LinkedIn',
    font: faLinkedinIn,
    href: 'https://www.linkedin.com/in/carloslsilva/',
    className: style.linkedin
  },
  {
    description: 'GitHub',
    font: faGithub,
    href: 'https://github.com/carloslsilva/',
    className: style.github
  },
  {
    description: 'freeCodeCamp',
    font: faFreeCodeCamp,
    href: 'https://www.freecodecamp.org/carloslsilva',
    className: style.freecodecamp
  },
  {
    description: 'Twitter',
    font: faTwitter,
    href: 'https://twitter.com/carloslsilva?lang=en',
    className: style.twitter
  },
  {
    description: 'YouTube',
    font: faYoutube,
    href: 'https://www.youtube.com/channel/UCD0Spg-lYsdrP_nE7Qfca3w',
    className: style.youtube
  }
];

const Links = () => {
  return (
    <ul className={style.links}>
      {LINKS.map(e => (
        <li key={e.description}>
          <a className={e.className} href={e.href} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={e.font} />
          </a>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.description}>by Carlos Silva</div>
      <Links />
    </footer>
  );
};

export default Footer;
