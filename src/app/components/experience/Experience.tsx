'use client';
import { useEffect } from 'react';
import { useApiStore } from '@/providers/api-store-provider';
import ExperienceCard from '../experienceCard';
import Section from '../section';
import Tag from '../tag';
import { useTheme } from '@/app/hooks/useTheme';
import ContentLoader from 'react-content-loader';
import { Oval } from 'react-loader-spinner';
import { Loader } from '../loader/Loader';

const skills = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Ut pretium arcu et massa semper, id fringilla leo semper.',
  'Sed quis justo ac magna.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
];

const Skeleton = () => {
  const { isModeDark } = useTheme();
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="300px"
      backgroundColor={isModeDark ? '#0B1736' : '#f3f3f3'}
      foregroundColor={isModeDark ? '#1c3166' : '#ecebeb'}
    >
      <rect x="30" y="30" rx="0" ry="0" width="258" height="32" />
      <rect x="30" y="71" rx="0" ry="0" width="465" height="32" />
      <rect x="30" y="116" rx="0" ry="0" width="749" height="32" />

      <rect x="30" y="180" rx="0" ry="0" width="258" height="32" />
      <rect x="30" y="220" rx="0" ry="0" width="465" height="32" />
      <rect x="30" y="270" rx="0" ry="0" width="749" height="32" />
    </ContentLoader>
  );
};

const Experience: React.FC = () => {
  const { experience, loading } = useApiStore((state) => state);
  const { isModeDark } = useTheme();

  return (
    <Section className="flex flex-col justify-center items-center">
      <Tag className="mx-auto">Experience</Tag>
      <h2 className="mt-4 text-lg text-center md:text-xl text-gray-light-600 dark:text-gray-dark-500">
        Here is a quick summary of my most recent experiences:
      </h2>
      <ul className="w-full h-full mt-12 flex flex-col gap-12">
        {loading && <Loader />}
        {!loading &&
          experience?.map((item) => {
            console.log(item);
            return (
              <ExperienceCard
                key={item.id}
                companyLogoSrc={item.logo}
                position={item.position}
                skills={item.commitments}
                workPeriod={item.workTime}
              />
            );
          })}
      </ul>
    </Section>
  );
};

export default Experience;
