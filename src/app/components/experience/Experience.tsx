'use client';
import { useApiStore } from '@/providers/api-store-provider';
import ExperienceCard from '../experienceCard';
import Section from '../section';
import Tag from '../tag';
import { Loader } from '../loader/Loader';

const Experience: React.FC = () => {
  const { experience, loading } = useApiStore((state) => state);

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
