import Image from 'next/image';
import Section from '../section';
import { animated, useSpring } from '@react-spring/web';
const ICON_SIZE_PX = 24;

const Promo: React.FC = () => {
  const date = new Date();
  const startDate = new Date('2022-09-01');
  const diffInMilliseconds = date.getTime() - startDate.getTime();
  const diffInYears = Math.round(
    diffInMilliseconds / (1000 * 60 * 60 * 24 * 365)
  ).toFixed(1);

  return (
    <Section className="flex flex-col-reverse items-center gap-12 md:gap-36 lg:flex-row">
      <div className="flex-1 mt-2.5">
        
        <animated.h1 className="text-4xl font-semibold md:text-6xl md:font-bold text-gray-light-900 dark:text-gray-dark-900">
          Hi, I&apos;m Nikita👋
        </animated.h1>
        <p className="mt-8 text-gray-light-600 dark:text-gray-dark-600">
          I&apos;m a front end developer (React.js & TypeScript) with a focus in
          on creating a client side applications. I've been in this field for{' '}
          {diffInYears} years now and still opening for my self something new.
        </p>
        <div className="mt-12 flex items-center gap-2">
          <Image
            src="/assets/icons/location-icon.svg"
            alt="Location Icon"
            width={ICON_SIZE_PX}
            height={ICON_SIZE_PX}
          />
          <span className="text-gray-light-600 dark:text-gray-dark-600">
            Odesa, Ukraine
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald block"></span>
          <span className="text-gray-light-600 dark:text-gray-dark-600">
            Currently have a work place
          </span>
        </div>
        <ul className="mt-12 flex">
          <li className="p-1.5">
            <a target="_blank" href="https://github.com/nuki1048">
              <Image
                src="/assets/icons/github-icon.svg"
                width={ICON_SIZE_PX}
                height={ICON_SIZE_PX}
                alt="Github Icon"
              />
            </a>
          </li>
          <li className="p-1.5">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nikita-chabaniuk-002119264"
            >
              <Image
                src="/assets/icons/linkedin-icon.svg"
                width={ICON_SIZE_PX}
                height={ICON_SIZE_PX}
                alt="Twitter Icon"
              />
            </a>
          </li>
          <li className="p-1.5">
            <a target="_blank" href="https://www.instagram.com/nuki_1048">
              <Image
                src="/assets/icons/instagram-icon.svg"
                width={ICON_SIZE_PX}
                height={ICON_SIZE_PX}
                alt="Figma Icon"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="w-60 h-72 md:w-72 md:h-80 relative">
        <Image
          src="https://res.cloudinary.com/dqfxgsnor/image/upload/v1713528612/portfolio_api/portfolio_app_IMG_20240309_190638_286.jpg.png"
          width={280}
          height={320}
          alt="Promo Portrait Photo"
          className="w-full h-full border-gray-light  border-8 dark:border-gray-dark object-cover"
        />
        <span className="absolute w-72 md:w-full h-full top-5 left-1/2 -translate-x-1/2 md:-translate-x-0  md:top-10 md:left-10 -z-10 bg-gray-light-200 border-gray-light dark:bg-gray-dark-200 border-8 dark:border-gray-dark"></span>
      </div>
    </Section>
  );
};

export default Promo;
