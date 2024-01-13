import ExperienceCard from '../experienceCard';
import Section from '../section';
import Tag from '../tag';

const skills = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Ut pretium arcu et massa semper, id fringilla leo semper.',
  'Sed quis justo ac magna.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
];

const Experience: React.FC = () => {
  return (
    <Section className="flex flex-col justify-center items-center">
      <Tag className="mx-auto">Experience</Tag>
      <h2 className="mt-4 text-lg text-center md:text-xl text-gray-light-600 dark:text-gray-dark-500">
        Here is a quick summary of my most recent experiences:
      </h2>
      <ul className="mt-12 flex flex-col gap-12">
        <ExperienceCard
          companyLogoSrc="/assets/icons/logo-upwork.svg"
          position="Sr. Frontend Developer"
          skills={skills}
          workPeriod="Nov 2021 - Present"
        />
        <ExperienceCard
          companyLogoSrc="/assets/icons/logo-upwork.svg"
          position="Sr. Frontend Developer"
          skills={skills}
          workPeriod="Nov 2021 - Present"
        />
        <ExperienceCard
          companyLogoSrc="/assets/icons/logo-upwork.svg"
          position="Sr. Frontend Developer"
          skills={skills}
          workPeriod="Nov 2021 - Present"
        />
      </ul>
    </Section>
  );
};

export default Experience;
