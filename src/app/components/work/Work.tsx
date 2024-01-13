import ProjectCard from '../projectCard';
import { RowOrder } from '../projectCard/ProjectCard';
import Section from '../section';
import Tag from '../tag';

const Work: React.FC = () => {
  return (
    <Section className="flex flex-col items-center">
      <Tag className="mx-auto">Work</Tag>
      <h2 className="mt-4 text-lg text-center md:text-xl  text-gray-light-600 dark:text-gray-dark-500">
        Some of the noteworthy projects I have built:
      </h2>
      <ul className="mt-12 flex flex-col gap-12">
        <ProjectCard order={RowOrder.Reverse} />
        <ProjectCard />
        <ProjectCard />
      </ul>
    </Section>
  );
};
export default Work;
