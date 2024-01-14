import Image from 'next/image';
import Section from '../section';
import Tag from '../tag';
import ClipboardButton from '../clipboardButton/ClipboardButton';
import EmailIcon from '../../../../public/assets/icons/email-icon.svg';
import PhoneIcon from '../../../../public/assets/icons/phone-icon.svg';
import GithubIcon from '../../../../public/assets/icons/github-icon.svg';
import TwitterIcon from '../../../../public/assets/icons/twitter-icon.svg';
import FigmaIcon from '../../../../public/assets/icons/figma-icon.svg';
const Contacts: React.FC = () => {
  return (
    <Section className="flex flex-col items-center">
      <Tag className="mx-auto">Get in touch</Tag>
      <h2 className="mt-4 text-lg text-center md:text-xl text-gray-light-600 dark:text-gray-dark-500">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </h2>
      <ul className="w-full mt-6 md:mt-12 flex flex-col gap-4">
        <li className="w-full flex justify-center items-center gap-4 md:gap-5">
          <EmailIcon className="w-6 h-6 md:w-8 md:h-8 stroke-gray-light-600 dark:stroke-gray-dark-600" />
          <span className="text-base md:text-4xl font-semibold text-gray-light-900 dark:text-gray-dark-900">
            reachsagarshah@gmail.com
          </span>
          <ClipboardButton textToCopy="reachsagarshah@gmail.com" />
        </li>
        <li className="w-full flex justify-center items-center gap-4 md:gap-5">
          <PhoneIcon className="w-6 h-6 md:w-8 md:h-8 stroke-gray-light-600 dark:stroke-gray-dark-600" />
          <span className="text-base md:text-4xl font-semibold text-gray-light-900 dark:text-gray-dark-900">
            +918980500565
          </span>
          <ClipboardButton textToCopy="+918980500565" />
        </li>
      </ul>
      <span className="mt-6 md:mt-12 text-center text-gray-light-600 dark:text-gray-dark-600">
        You may also find me on these platforms!
      </span>
      <ul className="mt-2 flex gap-2.5 md:gap-1">
        <li className="w-fit h-fit hover:drop-shadow-xl transition-all duration-300">
          <a href="#" className="p-1.5">
            <GithubIcon className="w-6 h-6 stroke-gray-light-600 dark:stroke-gray-dark-600" />
          </a>
        </li>
        <li className="w-fit h-fit hover:drop-shadow-xl transition-all duration-300">
          <a href="#" className="p-1.5">
            <TwitterIcon className="w-6 h-6 stroke-gray-light-600 dark:stroke-gray-dark-600" />
          </a>
        </li>
        <li className="w-fit h-fit hover:drop-shadow-xl transition-all duration-300">
          <a href="#" className="p-1.5">
            <FigmaIcon className="w-6 h-6 stroke-gray-light-600 dark:stroke-gray-dark-600" />
          </a>
        </li>
      </ul>
    </Section>
  );
};

export default Contacts;
