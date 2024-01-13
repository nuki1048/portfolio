import Image from 'next/image';
import Tag from '../tag';
import Link from 'next/link';
const skills = [
  'React',
  'Next.js',
  'Typescript',
  'Nest.js',
  'PostgreSQL',
  'Tailwindcss',
  'Figma',
  'Cypress',
  'Storybook',
  'Git',
];

export enum RowOrder {
  Normal,
  Reverse,
}

interface Props {
  order?: RowOrder;
}

const ProjectCard: React.FC<Props> = ({ order }) => {
  const rowOrderStyles =
    order === RowOrder.Reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div
      className={`w-fit h-fit flex flex-col ${rowOrderStyles} rounded-xl shadow-md bg-gray-light dark:bg-gray-dark-100`}
    >
      <div className="flex-1	p-12 border-gray-light-100 dark:border-gray-dark-100 bg-gray-light-50 dark:bg-gray-dark-50">
        <Image
          src="/assets/images/project_photo.png"
          width={480}
          height={380}
          alt="Project Photo"
          className="object-cover w-72 h-48 md:w-[480px] md:h-[380px] rounded-xl shadow-lg"
        />
      </div>
      <div className="flex-1	p-12 flex flex-col gap-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-light-900 dark:text-gray-dark-900">
          Fiskil
        </h3>
        <p className="text-gray-light-600 dark:text-gray-dark-600 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <ul className="flex gap-2 flex-wrap">
          {skills.map((item) => (
            <Tag key={`id-${item}`}>{item}</Tag>
          ))}
        </ul>
        <Link
          href="#"
          className="p-1.5 rounded-lg transition-shadow duration-300 hover:shadow-xl w-fit h-fit"
        >
          <Image
            src="/assets/icons/external-link.svg"
            width={24}
            height={24}
            alt="External Link"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
