'use client';
import { useApiStore } from '@/providers/api-store-provider';
import ProjectCard from '../projectCard';
import { RowOrder } from '../projectCard/ProjectCard';
import Section from '../section';
import Tag from '../tag';
import { Loader } from '../loader/Loader';
import { Element } from 'react-scroll';

const Work: React.FC = () => {
  const { repositories, loading } = useApiStore((state) => state);

  return (
    <Element name="work">
      <Section className="flex flex-col items-center">
        <Tag className="mx-auto">Work</Tag>
        <h2 className="mt-4 text-lg text-center md:text-xl  text-gray-light-600 dark:text-gray-dark-500">
          Some of the noteworthy projects I have built:
        </h2>
        <ul className="mt-12 flex flex-col gap-12">
          {loading || (!repositories && <Loader />)}
          {!loading &&
            repositories?.map((repo, i) => {
              const isOrderReverse = i % 2 === 0;

              return (
                <ProjectCard
                  description={repo.description}
                  name={repo.name}
                  topics={repo.topics}
                  order={isOrderReverse ? RowOrder.Normal : RowOrder.Reverse}
                  url={repo.html_url}
                  homepage={repo.homepage}
                />
              );
            })}
        </ul>
      </Section>
    </Element>
  );
};
export default Work;
