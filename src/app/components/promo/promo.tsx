import LocationIcon from '../../../../public/assets/icons/location-icon.svg';
import GitHubIcon from '../../../../public/assets/icons/github-icon.svg';
import FigmaIcon from '../../../../public/assets/icons/figma-icon.svg';
import TwitterIcon from '../../../../public/assets/icons/twitter-icon.svg';
import Image from 'next/image';

const ICON_SIZE_PX = 24;

const Promo: React.FC = () => {
  return (
    <section className="py-24 flex flex-col-reverse items-center gap-12 md:gap-36 lg:flex-row">
      <div className="flex-1 mt-2.5">
        <h1 className="text-4xl font-semibold md:text-6xl md:font-bold text-gray-light-900 dark:text-gray-dark-900">
          Hi, I’m Sagar 👋
        </h1>
        <p className="mt-8 text-gray-light-600 dark:text-gray-dark-600">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="mt-12 flex items-center gap-2">
          <Image
            src="/assets/icons/location-icon.svg"
            alt="Location Icon"
            width={ICON_SIZE_PX}
            height={ICON_SIZE_PX}
          />
          <span className="text-gray-light-600 dark:text-gray-dark-600">
            Ahmedabad, India
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald block"></span>
          <span className="text-gray-light-600 dark:text-gray-dark-600">
            Available for new projects
          </span>
        </div>
        <ul className="mt-12 flex">
          <li className="p-1.5">
            <Image
              src="/assets/icons/github-icon.svg"
              width={ICON_SIZE_PX}
              height={ICON_SIZE_PX}
              alt="Github Icon"
            />
          </li>
          <li className="p-1.5">
            <Image
              src="/assets/icons/twitter-icon.svg"
              width={ICON_SIZE_PX}
              height={ICON_SIZE_PX}
              alt="Twitter Icon"
            />
          </li>
          <li className="p-1.5">
            <Image
              src="/assets/icons/figma-icon.svg"
              width={ICON_SIZE_PX}
              height={ICON_SIZE_PX}
              alt="Figma Icon"
            />
          </li>
        </ul>
      </div>
      <div className="w-60 h-72 md:w-72 md:h-80 relative">
        <Image
          src="/assets/images/promo_portrait.jpg"
          width={280}
          height={320}
          alt="Promo Portrait Photo"
          className="w-full h-full"
        />
        <div className="absolute w-72 md:w-full h-full top-5 -left-1/2  md:top-10 md:left-10 -z-10 bg-gray-light-200 border-gray-light dark:bg-gray-dark-200 border-8 dark:border-gray-dark"></div>
      </div>
    </section>
  );
};

export default Promo;
