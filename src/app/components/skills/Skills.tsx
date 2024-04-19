'use client';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from 'react';
import IconText from '../IconText';
import Section from '../section';
import Tag from '../tag';
import { useApiStore } from '@/providers/api-store-provider';
import ContentLoader from 'react-content-loader';
import { useTheme } from '@/app/hooks/useTheme';
import { Loader } from '../loader/Loader';

interface Skill {
  name: string;
  icon: string;
  slug: string;
}

const Skills: React.FC = () => {
  const { skills, loading } = useApiStore((state) => state);

  return (
    <Section className="flex flex-col items-center">
      <Tag className="mx-auto">Skills</Tag>
      <h3 className="mt-4 mb-6 text-lg text-center md:text-xl text-gray-light-600 dark:text-gray-light-600">
        The skills, tools and technologies I am really good at:
      </h3>
      {loading || (!skills && <Loader />)}
      {!loading && (
        <ul className="w-full grid grid-cols-1 md:grid-cols-5 xl:grid-cols-8 auto-rows-auto gap-5">
          {skills?.map((skill) => (
            <IconText
              imageSrc={skill.icon}
              text={skill.name}
              key={skill.slug}
            />
          ))}
        </ul>
      )}
    </Section>
  );
};
export default Skills;
