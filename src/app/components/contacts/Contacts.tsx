'use client';
import { Element } from 'react-scroll';

import Section from '../section';
import Tag from '../tag';
import ClipboardButton from '../clipboardButton/ClipboardButton';
import EmailIcon from '../../../../public/assets/icons/email-icon.svg';
import PhoneIcon from '../../../../public/assets/icons/phone-icon.svg';
import InstagramIcon from '../../../../public/assets/icons/instagram-icon.svg';
import LinkedInIcon from '../../../../public/assets/icons/linkedin-icon.svg';
import GithubIcon from '../../../../public/assets/icons/github-icon.svg';
const Contacts: React.FC = () => {
  return (
    <Element name="contant">
      <Section id="contant" className="flex flex-col items-center">
        <Tag className="mx-auto">Get in touch</Tag>
        <h2 className="mt-4 text-lg text-center md:text-xl text-gray-light-600 dark:text-gray-dark-500">
          What&apos;s next? Feel free to reach out to me if you&apos;re looking
          for a developer, have a query, or simply want to connect.
        </h2>
        <ul className="w-full mt-6 md:mt-12 flex flex-col gap-4">
          <li className="w-full flex justify-center items-center gap-4 md:gap-5">
            <EmailIcon className="w-6 h-6 md:w-8 md:h-8 stroke-gray-light-600 dark:stroke-gray-dark-600" />
            <span className="text-base md:text-4xl font-semibold text-gray-light-900 dark:text-gray-dark-900">
              chabaniuk.nik@gmail.com
            </span>
            <ClipboardButton textToCopy="chabaniuk.nik@gmail.com" />
          </li>
          <li className="w-full flex justify-center items-center gap-4 md:gap-5">
            <PhoneIcon className="w-6 h-6 md:w-8 md:h-8 stroke-gray-light-600 dark:stroke-gray-dark-600" />
            <span className="text-base md:text-4xl font-semibold text-gray-light-900 dark:text-gray-dark-900">
              +380663175464
            </span>
            <ClipboardButton textToCopy="+380663175464" />
          </li>
        </ul>
        <span className="mt-6 md:mt-12 text-center text-gray-light-600 dark:text-gray-dark-600">
          You may also find me on these platforms!
        </span>
        <ul className="mt-2 flex gap-2.5 md:gap-1">
          <li className="w-fit h-fit hover:drop-shadow-xl transition-all duration-300">
            <a href="#" className="p-1.5">
              <InstagramIcon className="w-6 h-6 stroke-gray-light-600 dark:stroke-gray-dark-600" />
            </a>
          </li>
          <li className="w-fit h-fit hover:drop-shadow-xl transition-all duration-300">
            <a href="#" className="p-1.5">
              <LinkedInIcon className="w-6 h-6 stroke-gray-light-600 dark:stroke-gray-dark-600" />
            </a>
          </li>
          <li className="w-fit h-fit hover:drop-shadow-xl transition-all duration-300">
            <a href="#" className="p-1.5">
              <GithubIcon className="w-6 h-6 stroke-gray-light-600 dark:stroke-gray-dark-600" />
            </a>
          </li>
        </ul>
      </Section>
    </Element>
  );
};

export default Contacts;
